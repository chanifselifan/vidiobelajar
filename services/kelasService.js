// Mendapatkan semua data kelas
export const getAllKelas = (callback) => {
    db.query('SELECT * FROM kelas', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
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
