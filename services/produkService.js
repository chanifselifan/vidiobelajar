import { db } from '../server.js';

// Mendapatkan semua data produk
export const getAllProduk = async () => {
    try {
        const [results] = await db.query('SELECT * FROM produk');
        return results;
    } catch (err) {
        throw new Error('Gagal mendapatkan data produk: ' + err.message);
    }
};

// Mendapatkan data produk berdasarkan ID
export const getProdukById = async (id) => {
    try {
        const [results] = await db.query('SELECT * FROM produk WHERE id = ?', [id]);
        return results[0];
    } catch (err) {
        throw new Error('Gagal mendapatkan data produk berdasarkan ID: ' + err.message);
    }
};

// Menambahkan produk baru
export const addProduk = async (produkData) => {
    try {
        const { deskripsi, harga, user_id } = produkData;
        const [result] = await db.query(
            'INSERT INTO produk (deskripsi, harga, user_id) VALUES (?, ?, ?)',
            [deskripsi, harga, user_id]
        );
        return { id: result.insertId, ...produkData };
    } catch (err) {
        throw new Error('Gagal menambahkan produk: ' + err.message);
    }
};

// Mengubah data produk berdasarkan ID
export const updateProduk = async (id, produkData) => {
    try {
        const { deskripsi, harga, user_id } = produkData;
        await db.query(
            'UPDATE produk SET deskripsi = ?, harga = ?, user_id = ? WHERE id = ?',
            [deskripsi, harga, user_id, id]
        );
        return { id, ...produkData };
    } catch (err) {
        throw new Error('Gagal mengubah data produk: ' + err.message);
    }
};

// Menghapus produk berdasarkan ID
export const deleteProduk = async (id) => {
    try {
        await db.query('DELETE FROM produk WHERE id = ?', [id]);
        return { id };
    } catch (err) {
        throw new Error('Gagal menghapus produk: ' + err.message);
    }
};
