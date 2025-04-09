import express from 'express';
import mysql from 'mysql2/promise';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk rute user
app.use(userRoutes);

// Konfigurasi koneksi ke database menggunakan pooling
const db = mysql.createPool({
    host: 'localhost', // Removed protocol and port
    user: 'root',
    password: '888o',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Ekspor koneksi database
export { db };

// Endpoint untuk mendapatkan semua data
app.get('/api/data', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM nama_tabel');
        res.json(results);
    } catch (err) {
        console.error('Query gagal:', err.message);
        res.status(500).json({ error: 'Query gagal' });
    }
});

// Endpoint untuk menambahkan data
app.post('/api/data', async (req, res) => {
    const { kolom1, kolom2 } = req.body;
    try {
        const [results] = await db.query('INSERT INTO nama_tabel (kolom1, kolom2) VALUES (?, ?)', [kolom1, kolom2]);
        res.status(201).json({ message: 'Data berhasil ditambahkan', id: results.insertId });
    } catch (err) {
        console.error('Insert gagal:', err.message);
        res.status(500).json({ error: 'Insert gagal' });
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});