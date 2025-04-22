import express from 'express';
import mysql from 'mysql2/promise';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import kategoriKelasRoutes from './routes/kategoriKelasRoutes.js'; // Pastikan path impor benar
import 'dotenv/config';
import cors from 'cors'; // Import middleware cors
import uploadRoutes from './routes/uploadRoutes.js'; // Pastikan path benar
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

console.log('Starting server.js...'); // Log awal file

const app = express();
console.log('Express app instance created'); // Log setelah instance express dibuat

// Mendapatkan __dirname di lingkungan ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path absolut ke folder uploads
const uploadFolder = path.join(__dirname, 'uploads');

const port = 3000;

// Middleware CORS untuk mengizinkan request dari frontend
console.log('Configuring CORS middleware...');
app.use(cors({
  origin: 'http://localhost:5173', // Ganti jika origin frontend berbeda
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Pastikan POST diizinkan
  allowedHeaders: ['Content-Type', 'Authorization'], // Pastikan Content-Type dan Authorization diizinkan
  credentials: true
}));
console.log('CORS middleware configured');

// Middleware untuk parsing JSON
console.log('Configuring JSON parsing middleware...');
app.use(express.json());
console.log('JSON parsing middleware configured');

// Middleware untuk melayani file statis dari folder uploads
app.use('/uploads', express.static(uploadFolder));

// Debugging middleware untuk log semua request
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Middleware untuk rute user
console.log('Mounting userRoutes...');
app.use(userRoutes);
console.log('userRoutes mounted');

// Mount route untuk autentikasi dengan prefix /api/auth
console.log('Preparing to mount authRoutes at /api/auth...');
app.use('/api/auth', (req, res, next) => {
    console.log('Middleware for /api/auth reached'); // Log bahwa middleware /api/auth tercapai
    console.log('Request path:', req.path); // Log path request saat ini
    console.log('Original URL:', req.originalUrl); // Log URL asli request
    next(); // Lanjutkan ke authRoutes
}, authRoutes);
console.log('authRoutes mounted at /api/auth');

// Mount route untuk kategori kelas dengan prefix /api/kategori-kelas
console.log('Mounting kategoriKelasRoutes at /api/kategori-kelas...');
app.use('/api/kategori-kelas', kategoriKelasRoutes);
console.log('kategoriKelasRoutes mounted at /api/kategori-kelas');

// Gunakan route upload
console.log('Mounting uploadRoutes at /api/upload...');
app.use('/api/upload', uploadRoutes);
console.log('uploadRoutes mounted at /api/upload');

// Middleware untuk menangani error 404
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

// Konfigurasi koneksi ke database menggunakan pooling
console.log('Configuring database connection...');
const db = mysql.createPool({
    host: 'localhost', // Removed protocol and port
    user: 'root',
    password: '888o',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
console.log('Database connection configured');

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
console.log('Starting server...');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;