import { db } from '../server.js';

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
        const { nama, email, password, gender, no_hp } = usersData;

        // Log data yang diterima dari Postman
        console.log('Data yang diterima dari Postman:', usersData);

        // Validasi input
        if (!nama || !email || !password || !gender || !no_hp) {
            throw new Error('Semua field (nama, email, password, gender, no_hp) harus diisi.');
        }

        const [result] = await db.query(
            'INSERT INTO users (nama, email, no_hp, gender, password) VALUES (?, ?, ?, ?, ?)',
            [nama, email, no_hp, gender, password]
        );
        return { id: result.insertId, nama, email, no_hp, gender, password };
    } catch (err) {
        console.error('Error saat menambahkan users:', err); // Ubah jadi ini untuk melihat error object lengkap
        throw new Error('Gagal menambahkan users: Semua field (nama, email, password, gender, no_hp) harus diisi.');
    }
}

export async function updateUsers(id, usersData) {
    try {
        const { nama, email } = usersData; // Pastikan menggunakan 'nama' (bukan 'name')
        await db.query('UPDATE users SET nama = ?, email = ? WHERE id = ?', [nama, email, id]); // Ganti 'name' menjadi 'nama'
        return { id, nama, email };
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
