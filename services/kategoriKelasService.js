// Mendapatkan semua data kategori_kelas
export const getAllKategoriKelas = (callback) => {
    db.query('SELECT * FROM kategori_kelas', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data kategori_kelas berdasarkan ID
export const getKategoriKelasById = (id, callback) => {
    db.query('SELECT * FROM kategori_kelas WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan data kategori_kelas baru
export const addKategoriKelas = (kategoriKelasData, callback) => {
    const { nama_kelas, kelas_id, kategori_id } = kategoriKelasData;
    db.query(
        'INSERT INTO kategori_kelas (nama_kelas, kelas_id, kategori_id) VALUES (?, ?, ?)',
        [nama_kelas, kelas_id, kategori_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...kategoriKelasData });
        }
    );
};

// Mengubah data kategori_kelas berdasarkan ID
export const updateKategoriKelas = (id, kategoriKelasData, callback) => {
    const { nama_kelas, kelas_id, kategori_id } = kategoriKelasData;
    db.query(
        'UPDATE kategori_kelas SET nama_kelas = ?, kelas_id = ?, kategori_id = ? WHERE id = ?',
        [nama_kelas, kelas_id, kategori_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus data kategori_kelas berdasarkan ID
export const deleteKategoriKelas = (id, callback) => {
    db.query('DELETE FROM kategori_kelas WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
