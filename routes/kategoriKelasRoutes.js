import express from 'express';
import { getAllKategoriKelas } from '../services/kategoriKelasService.js';

const router = express.Router();

// GET / - Mengambil semua kategori kelas
router.get('/', (req, res) => {
  console.log('GET /api/kategori-kelas called with filters:', req.query); // Log untuk debugging
  const filters = req.query;

  getAllKategoriKelas(filters, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch kategori_kelas', details: err.message });
    }
    res.status(200).json(results);
  });
});

export default router;
