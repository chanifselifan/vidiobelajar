// Mendapatkan semua data modul_kelas
export const getAllModulKelas = (callback) => {
    db.query('SELECT * FROM modul_kelas', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data modul_kelas berdasarkan ID
export const getModulKelasById = (id, callback) => {
    db.query('SELECT * FROM modul_kelas WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan modul_kelas baru
export const addModulKelas = (modulKelasData, callback) => {
    const { nama_modul, kelas_id, user_id } = modulKelasData;
    db.query(
        'INSERT INTO modul_kelas (nama_modul, kelas_id, user_id) VALUES (?, ?, ?)',
        [nama_modul, kelas_id, user_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...modulKelasData });
        }
    );
};

// Mengubah data modul_kelas berdasarkan ID
export const updateModulKelas = (id, modulKelasData, callback) => {
    const { nama_modul, kelas_id, user_id } = modulKelasData;
    db.query(
        'UPDATE modul_kelas SET nama_modul = ?, kelas_id = ?, user_id = ? WHERE id = ?',
        [nama_modul, kelas_id, user_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus modul_kelas berdasarkan ID
export const deleteModulKelas = (id, callback) => {
    db.query('DELETE FROM modul_kelas WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
