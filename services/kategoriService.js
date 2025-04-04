
const mysql = require('mysql2');
const userRoutes = require('./routes/userRoutes.js'); // Impor route


// Mendapatkan semua data kategori
export const getAllKategori = (callback) => {
    db.query('SELECT * FROM kategori', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data kategori berdasarkan ID
export const getKategoriById = (id, callback) => {
    db.query('SELECT * FROM kategori WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan kategori baru
export const addKategori = (kategoriData, callback) => {
    const { nama_kategori, kategori_id } = kategoriData;
    db.query(
        'INSERT INTO kategori (nama_kategori, kategori_id) VALUES (?, ?)',
        [nama_kategori, kategori_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...kategoriData });
        }
    );
};

// Mengubah data kategori berdasarkan ID
export const updateKategori = (id, kategoriData, callback) => {
    const { nama_kategori, kategori_id } = kategoriData;
    db.query(
        'UPDATE kategori SET nama_kategori = ?, kategori_id = ? WHERE id = ?',
        [nama_kategori, kategori_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus kategori berdasarkan ID
export const deleteKategori = (id, callback) => {
    db.query('DELETE FROM kategori WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
