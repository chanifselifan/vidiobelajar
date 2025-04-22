import { db } from '../server.js';

// Mendapatkan semua data kelas
export const getAllKelas = (req, res) => {
    let query = 'SELECT * FROM kelas';
    const conditions = [];
    const values = [];
    const { category, search, sortBy, sortOrder } = req.query;

    if (category) {
        conditions.push('kategori_kelas_id = ?');
        values.push(category);
    }

    if (search) {
        conditions.push('nama_kelas LIKE ?');
        values.push(`%${search}%`);
    }

    if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
    }

    if (sortBy) {
        const order = sortOrder && sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC';
        query += ` ORDER BY ${sortBy} ${order}`;
    }

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error fetching kelas:', err);
            res.status(500).json({ error: 'Gagal mendapatkan data kelas' });
        } else {
            res.json(results);
        }
    });
};

// Mendapatkan data kelas berdasarkan ID
export const getKelasById = (id, callback) => {
    db.query('SELECT * FROM kelas WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan kelas baru
export const addKelas = (kelasData, callback) => {
    const { nama_kelas, deskripsi, harga, kategori_kelas_id, tutor_id } = kelasData;
    db.query(
        'INSERT INTO kelas (nama_kelas, deskripsi, harga, kategori_kelas_id, tutor_id) VALUES (?, ?, ?, ?, ?)',
        [nama_kelas, deskripsi, harga, kategori_kelas_id, tutor_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...kelasData });
        }
    );
};

// Mengubah data kelas berdasarkan ID
export const updateKelas = (id, kelasData, callback) => {
    const { nama_kelas, deskripsi, harga, kategori_kelas_id, tutor_id } = kelasData;
    db.query(
        'UPDATE kelas SET nama_kelas = ?, deskripsi = ?, harga = ?, kategori_kelas_id = ?, tutor_id = ? WHERE id = ?',
        [nama_kelas, deskripsi, harga, kategori_kelas_id, tutor_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus kelas berdasarkan ID
export const deleteKelas = (id, callback) => {
    db.query('DELETE FROM kelas WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
