import express from 'express';
import { 
    getAllUsers, 
    getUserById, 
    addUsers, 
    updateUsers, 
    deleteUsers, 
    registerUser, 
    loginUser 
} from '../services/userService.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET /api/users - Mendapatkan semua data users (dengan autentikasi)
router.get('/api/users', verifyToken, async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error saat mendapatkan data users:', err.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat mendapatkan data users' });
    }
});

// POST /api/users - Menambahkan users baru (tanpa autentikasi)
router.post('/api/users', async (req, res) => {
    try {
        const newUsers = await addUsers(req.body);
        res.status(201).json(newUsers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PATCH /api/users/:id - Mengubah data users berdasarkan ID (dengan autentikasi)
router.patch('/api/users/:id', verifyToken, async (req, res) => {
    try {
        const id = req.params.id; 
        const updatedData = req.body; 
        const updatedUser = await updateUsers(id, updatedData); 
        res.status(200).json({ message: 'Data user berhasil diubah', updatedUser });
    } catch (err) {
        console.error('Error saat mengupdate data user:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/users/:id - Menghapus data users berdasarkan ID (dengan autentikasi)
router.delete('/api/users/:id', verifyToken, async (req, res) => {
    try {
        const deletedUsers = await deleteUsers(req.params.id);
        res.status(200).json({ message: 'Data users berhasil dihapus', deletedUsers });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/users/:id - Mendapatkan data user berdasarkan ID (dengan autentikasi)
router.get('/api/users/:id', verifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);
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

// Endpoint untuk registrasi pengguna baru (tanpa autentikasi)
router.post('/register', async (req, res) => {
    try {
        const { fullname, username, email, password } = req.body;

        // Panggil fungsi registerUser dari userService
        const result = await registerUser(fullname, username, email, password);

        res.status(201).json(result); // Kirim respons sukses
    } catch (err) {
        console.error('Error saat registrasi:', err.message);
        res.status(400).json({ error: err.message }); // Kirim respons error
    }
});

// Endpoint untuk login pengguna (tanpa autentikasi)
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Panggil fungsi loginUser dari userService
        const result = await loginUser(email, password);

        res.status(200).json(result); // Kirim respons sukses
    } catch (error) {
        console.error('Error saat login:', error.message);
        res.status(401).json({ error: error.message }); // Kirim respons error
    }
});

// Route untuk registrasi user (tanpa autentikasi)
router.post('/api/users/register', async (req, res) => {
    try {
        const userData = req.body;

        // Log data yang diterima
        console.log('Data yang diterima dari frontend:', userData);

        // Panggil service untuk menambahkan user
        const newUser = await addUsers(userData);

        res.status(201).json({ message: 'User berhasil ditambahkan', user: newUser });
    } catch (error) {
        console.error('Error saat menambahkan user:', error.message);
        res.status(400).json({ error: error.message });
    }
});

export default router;
