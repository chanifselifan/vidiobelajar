import express from 'express';
import { updateUsers } from '../services/userService.js'; // Pastikan fungsi diimpor dengan benar
import * as userService from '../services/userService.js';

const router = express.Router();

// GET /api/users - Mendapatkan semua data users
router.get('/api/users', async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error saat mendapatkan data users:', err.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mendapatkan data users' });
    }
});

// POST /api/users - Menambahkan users baru
router.post('/api/users', async (req, res) => {
    try {
        const newUsers = await userService.addUsers(req.body);
        res.status(201).json(newUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PATCH /api/users/:id - Mengubah data users berdasarkan ID
router.patch('/api/users/:id', async (req, res) => {
    try {
        const id = req.params.id; // Ambil ID dari parameter URL
        const updatedData = req.body; // Ambil data yang akan diupdate dari body request
        const updatedUser = await updateUsers(id, updatedData); // Panggil fungsi updateUsers
        res.status(200).json({ message: 'Data user berhasil diubah', updatedUser });
    } catch (err) {
        console.error('Error saat mengupdate data user:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/users/:id - Menghapus data users berdasarkan ID
router.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUsers = await userService.deleteUsers(req.params.id);
        res.status(200).json({ message: 'Data users berhasil dihapus', deletedUsers });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/users/:id - Mendapatkan data user berdasarkan ID
router.get('/api/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User tidak ditemukan' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

export default router;
