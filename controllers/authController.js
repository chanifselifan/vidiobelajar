import { loginUserByEmailOrUsername } from '../services/userService.js';

export async function loginUser(req, res) {
    console.log('Fungsi loginUser dipanggil'); // Debug log
    try {
        const { identifier, password } = req.body;

        if (!identifier || !password) {
            return res.status(400).json({ message: 'Email/Username dan password harus diisi.' });
        }

        const result = await loginUserByEmailOrUsername(identifier, password);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in loginUser:', error.message); // Debug error
        res.status(401).json({ message: error.message });
    }
}
