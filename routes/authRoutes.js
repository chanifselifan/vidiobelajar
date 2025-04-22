import express from 'express';
import { loginUser } from '../controllers/authController.js'; // Pastikan loginUser diimpor dengan benar

const router = express.Router();

console.log('authRoutes.js: Mendefinisikan route POST /login'); // Log sebelum definisi route

// Route untuk login
router.post('/login', async (req, res, next) => {
    try {
        console.log('authRoutes.js: Route POST /login tercapai!'); // Log untuk memastikan request mencapai route
        await loginUser(req, res, next); // Panggil loginUser dan teruskan req, res, next
        console.log('authRoutes.js: loginUser berhasil dipanggil.'); // Log jika loginUser berhasil
    } catch (error) {
        console.error('authRoutes.js: Terjadi error di route POST /login:', error.message); // Log error jika terjadi
        next(error); // Teruskan error ke middleware error handling
    }
});

console.log('authRoutes.js: Router selesai dikonfigurasi'); // Log di akhir file

export default router;
