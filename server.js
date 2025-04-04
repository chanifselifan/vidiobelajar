import express from 'express';
import mysql from 'mysql2';
import userRoutes from './routes/userRoutes.js';
import { getAllUsers } from './services/userService.js';

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());
app.use(userRoutes); // Pastikan ini ada

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: '888o',      
    database: 'vidio_belajar' 
});

// Sambungkan ke database
db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err.message);
        return;
    }
    console.log('Koneksi ke database berhasil!');
});

// Ekspor koneksi database
export { db };

// Endpoint untuk mendapatkan semua data (contoh)
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM nama_tabel', (err, results) => {
        if (err) {
            console.error('Query gagal:', err.message);
            res.status(500).json({ error: 'Query gagal' });
            return;
        }
        res.json(results);
    });
});

// Endpoint untuk menambahkan data (contoh)
app.post('/api/data', (req, res) => {
    const { kolom1, kolom2 } = req.body; // Ganti dengan kolom yang sesuai
    db.query('INSERT INTO nama_tabel (kolom1, kolom2) VALUES (?, ?)', [kolom1, kolom2], (err, results) => {
        if (err) {
            console.error('Insert gagal:', err.message);
            res.status(500).json({ error: 'Insert gagal' });
            return;
        }
        res.status(201).json({ message: 'Data berhasil ditambahkan', id: results.insertId });
    });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});