import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { db } from '../server.js'; // Impor koneksi database

const router = express.Router();

// Mendapatkan __dirname di lingkungan ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path ke folder uploads
const uploadFolder = path.resolve(__dirname, '../uploads');
console.log(`Upload folder path: ${uploadFolder}`);

// Konfigurasi disk storage untuk multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder); // Simpan file di folder uploads
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueSuffix); // Gunakan timestamp dan nama file asli
    },
});

// Inisialisasi multer dengan konfigurasi storage
const upload = multer({ storage });

// Route POST untuk upload file
router.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        // Pastikan file berhasil diupload
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Ambil userId dari middleware autentikasi
        const userId = req.user.id; // Asumsikan req.user.id tersedia
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        // Path lengkap file yang disimpan oleh multer
        const profileImagePath = req.file.path;

        // Update database untuk menyimpan path gambar profil
        const query = 'UPDATE users SET profile_image_path = ? WHERE id = ?';
        const values = [profileImagePath, userId];

        await new Promise((resolve, reject) => {
            db.query(query, values, (err, result) => {
                if (err) {
                    console.error('Database error:', err.message);
                    return reject(new Error('Failed to update user profile image in database'));
                }
                resolve(result);
            });
        });

        // Kirim respons sukses dengan detail file
        res.status(200).json({
            message: 'File uploaded and user profile updated successfully',
            publicImageUrl: `http://localhost:3000/uploads/${req.file.filename}`, // URL publik untuk frontend
        });
    } catch (error) {
        console.error('Error during file upload:', error.message);
        res.status(500).json({ error: 'File upload failed' });
    }
});

export default router;
