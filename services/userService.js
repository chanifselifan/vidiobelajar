import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../server.js';
import 'dotenv/config'; // Untuk load environment variables
import { sendEmail } from './emailService.js';
import { v4 as uuidv4 } from 'uuid'; // Tambahkan import untuk uuid

export async function getAllUsers() {
    try {
        const [users] = await db.query('SELECT * FROM users'); // Query ke database
        return users; // Mengembalikan hasil query
    } catch (err) {
        console.error('Error di getAllUsers:', err.message); // Log error untuk debugging
        throw new Error('Gagal mendapatkan data users: ' + err.message); // Lempar error agar ditangani di routes
    }
}

export async function getUsersById(id) {
    try {
        const [results] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        return results[0];
    } catch (err) {
        throw new Error('Gagal mendapatkan data users berdasarkan ID: ' + err.message);
    }
}

export async function addUsers(usersData) {
    try {
        const { nama, username, email, password, gender, no_hp } = usersData;

        // Validasi input
        if (!nama || !username || !email || !password || !gender || !no_hp) {
            throw new Error('Semua field (nama, username, email, password, gender, no_hp) harus diisi.');
        }

        // Hash password menggunakan bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Periksa apakah username sudah digunakan
        const [existingUserByUsername] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUserByUsername.length > 0) {
            throw new Error('Username sudah digunakan.');
        }

        // Periksa apakah email sudah terdaftar
        const [existingUserByEmail] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUserByEmail.length > 0) {
            throw new Error('Email sudah terdaftar.');
        }

        // Simpan data pengguna baru ke database
        const [result] = await db.query(
            'INSERT INTO users (nama, username, email, password, gender, no_hp) VALUES (?, ?, ?, ?, ?, ?)',
            [nama, username, email, hashedPassword, gender, no_hp]
        );

        return { id: result.insertId, nama, username, email, gender, no_hp };
    } catch (err) {
        console.error('Error saat menambahkan users:', err.message);
        throw new Error('Gagal menambahkan user: ' + err.message);
    }
}

export async function updateUsers(id, usersData) {
    try {
        const { nama, username, email } = usersData; // Pastikan menggunakan 'nama' (bukan 'name')

        // Validasi input
        if (!nama || !username || !email) {
            throw new Error('Field (nama, username, email) harus diisi.');
        }

        await db.query('UPDATE users SET nama = ?, username = ?, email = ? WHERE id = ?', [nama, username, email, id]); // Ganti 'name' menjadi 'nama'
        return { id, nama, username, email };
    } catch (err) {
        throw new Error('Gagal mengubah data users: ' + err.message);
    }
}

export async function deleteUsers(id) {
    try {
        await db.query('DELETE FROM users WHERE id = ?', [id]);
        return { id };
    } catch (err) {
        throw new Error('Gagal menghapus data users: ' + err.message);
    }
}

// Fungsi untuk mendapatkan data user berdasarkan ID
export async function getUserById(id) {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0]; // Mengembalikan satu user (jika ditemukan)
    } catch (err) {
        throw new Error('Gagal mendapatkan data user berdasarkan ID: ' + err.message);
    }
}

// Fungsi untuk registrasi pengguna baru
export async function registerUser(fullname, username, email, password) {
    console.log('--- registerUser: Memulai ---'); // Log awal fungsi

    try {
        if (!fullname || !username || !email || !password) {
            throw new Error('Semua field (fullname, username, email, password) harus diisi.');
        }

        console.log('--- registerUser: Validasi input berhasil ---'); // Log setelah validasi input

        // Hash password menggunakan bcrypt dengan salt rounds 10
        const hashedPassword = await bcrypt.hash(password, 10);

        // Periksa apakah username sudah digunakan
        const [existingUserByUsername] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUserByUsername.length > 0) {
            throw new Error('Username sudah digunakan.');
        }

        // Periksa apakah email sudah terdaftar
        const [existingUserByEmail] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUserByEmail.length > 0) {
            throw new Error('Email sudah terdaftar.');
        }

        // Buat token verifikasi unik
        const verificationToken = uuidv4();

        console.log('--- registerUser: Sebelum INSERT Database ---'); // Log sebelum query INSERT
        // Simpan data pengguna baru ke database dengan token verifikasi
        const [result] = await db.query(
            'INSERT INTO users (nama, username, email, password, verification_token) VALUES (?, ?, ?, ?, ?)',
            [fullname, username, email, hashedPassword, verificationToken]
        );
        console.log('--- registerUser: Setelah INSERT Database ---'); // Log setelah query INSERT

        const newUser = { id: result.insertId, fullname, username, email };

        // Siapkan data untuk email verifikasi
        console.log('--- registerUser: Sebelum menyiapkan email verifikasi ---'); // Log sebelum menyiapkan email
        const verificationLink = `http://localhost:3000/api/auth/verifikasi-email?token=${verificationToken}`;
        const emailHtml = `<p>Halo ${fullname},</p>
            <p>Terima kasih telah mendaftar di aplikasi kami!</p>
            <p>Silakan klik link berikut untuk memverifikasi akun Anda:</p>
            <a href="${verificationLink}">Klik untuk verifikasi email</a>`;

        // Blok try...catch untuk pengiriman email
        console.log('--- registerUser: Sebelum blok try...catch sendEmail ---'); // Log sebelum blok try...catch
        try {
            console.log('--- registerUser: Sebelum memanggil sendEmail ---'); // Log sebelum sendEmail
            console.log('sendEmail parameters:', {
                to: email,
                subject: 'Verifikasi Akun Anda di Aplikasi Kami!',
                html: emailHtml,
            }); // Debug parameter sendEmail

            await sendEmail({
                to: email,
                subject: 'Verifikasi Akun Anda di Aplikasi Kami!',
                html: emailHtml,
            });

            console.log('--- registerUser: Setelah memanggil sendEmail ---'); // Log setelah sendEmail
            console.log('Email verifikasi berhasil dikirim ke:', email);
        } catch (emailError) {
            console.error('--- registerUser: Gagal mengirim email ---', emailError); // Log jika sendEmail gagal
            console.error('Error detail:', emailError.message); // Log detail error
            console.error('Stack trace:', emailError.stack); // Log stack trace untuk debugging
        }
        console.log('--- registerUser: Setelah blok try...catch sendEmail ---'); // Log setelah blok try...catch

        // Return pesan sukses registrasi
        console.log('--- registerUser: Sebelum return pesan sukses ---'); // Log sebelum return sukses
        return { message: 'Registrasi berhasil! Silakan cek email Anda untuk verifikasi akun.', user: newUser };
    } catch (error) {
        console.error('--- registerUser: Terjadi error utama ---', error); // Log awal blok catch utama
        console.error('Error saat registrasi:', error);
        throw new Error('Gagal melakukan registrasi: ' + error.message);
    }
}

export async function loginUser(email, password) {
    try {
        // Cari pengguna berdasarkan email
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = users[0];

        if (!user) {
            throw new Error('Email atau password salah');
        }

        // Bandingkan password yang dimasukkan dengan password yang di-hash di database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Email atau password salah');
        }

        // Buat token JWT
        const token = jwt.sign(
            { userId: user.id, username: user.username, email: user.email },
            process.env.JWT_SECRET, // Ambil secret key dari environment variable
            { expiresIn: '1h' }
        );

        return { message: 'Login berhasil!', token };
    } catch (error) {
        console.error('Error saat login:', error);
        throw new Error('Gagal melakukan login: ' + error.message);
    }
}

export async function loginUserByEmailOrUsername(identifier, password) {
    try {
        console.log('loginUserByEmailOrUsername: Mencari user berdasarkan email atau username:', identifier); // Debug input identifier

        // Cari pengguna berdasarkan email atau username
        const [users] = await db.query(
            'SELECT * FROM users WHERE email = ? OR username = ?',
            [identifier, identifier]
        );
        const user = users[0];

        if (!user) {
            console.error('loginUserByEmailOrUsername: User tidak ditemukan'); // Debug jika user tidak ditemukan
            throw new Error('Email atau username tidak ditemukan.');
        }

        console.log('loginUserByEmailOrUsername: Password dari database:', user.password); // Debug password dari database

        // Bandingkan password yang dimasukkan dengan password yang di-hash di database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        console.log('loginUserByEmailOrUsername: Hasil perbandingan password:', isPasswordValid); // Debug hasil perbandingan

        if (!isPasswordValid) {
            console.error('loginUserByEmailOrUsername: Password salah'); // Debug jika password salah
            throw new Error('Password salah.');
        }

        // Buat token JWT
        const token = jwt.sign(
            { userId: user.id, username: user.username, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log('loginUserByEmailOrUsername: Login berhasil, token dibuat'); // Debug jika login berhasil
        return { message: 'Login berhasil!', token };
    } catch (error) {
        console.error('loginUserByEmailOrUsername: Error saat login:', error.message); // Debug error
        throw new Error('Gagal melakukan login: ' + error.message);
    }
}
