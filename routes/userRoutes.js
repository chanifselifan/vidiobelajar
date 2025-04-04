import express from 'express';
import { getAllUsers, addUser, updateUser, deleteUser } from '../services/userService.js';

const router = express.Router();

// GET /api/users - Mendapatkan semua data user
router.get('/api/users', (req, res) => {
    getAllUsers((err, users) => {
        if (err) {
            res.status(500).json({ error: 'Gagal mendapatkan data user' });
        } else {
            res.status(200).json(users);
        }
    });
});

// POST /api/users - Menambahkan user baru
router.post('/api/users', (req, res) => {
    const userData = req.body;
    addUser(userData, (err, newUser) => {
        if (err) {
            res.status(500).json({ error: 'Gagal menambahkan user' });
        } else {
            res.status(201).json(newUser);
        }
    });
});

// PATCH /api/users/:id - Mengubah data user berdasarkan ID
router.patch('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    updateUser(id, userData, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Gagal mengubah data user' });
        } else {
            res.status(200).json({ message: 'Data user berhasil diubah' });
        }
    });
});

// DELETE /api/users/:id - Menghapus data user berdasarkan ID
router.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    deleteUser(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Gagal menghapus data user' });
        } else {
            res.status(200).json({ message: 'Data user berhasil dihapus' });
        }
    });
});

export default router;
