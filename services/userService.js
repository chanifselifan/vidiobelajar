import { db } from '../server.js';

// Mendapatkan semua data user
export const getAllUsers = (callback) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data user berdasarkan ID
export const getUserById = (id, callback) => {
    db.query('SELECT * FROM user WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan user baru
export const addUser = (userData, callback) => {
    const { nama, email, no_hp, gender } = userData;
    db.query(
        'INSERT INTO user (nama, email, no_hp, gender) VALUES (?, ?, ?, ?)',
        [nama, email, no_hp, gender],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...userData });
        }
    );
};

// Mengubah data user berdasarkan ID
export const updateUser = (id, userData, callback) => {
    const { nama, email, no_hp, gender } = userData;
    db.query(
        'UPDATE user SET nama = ?, email = ?, no_hp = ?, gender = ? WHERE id = ?',
        [nama, email, no_hp, gender, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus user berdasarkan ID
export const deleteUser = (id, callback) => {
    db.query('DELETE FROM user WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
