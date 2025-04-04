// Mendapatkan semua data materi
export const getAllMateri = (callback) => {
    db.query('SELECT * FROM materi', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data materi berdasarkan ID
export const getMateriById = (id, callback) => {
    db.query('SELECT * FROM materi WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan materi baru
export const addMateri = (materiData, callback) => {
    const { Judul, URL_content, kelas_id } = materiData;
    db.query(
        'INSERT INTO materi (Judul, URL_content, kelas_id) VALUES (?, ?, ?)',
        [Judul, URL_content, kelas_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...materiData });
        }
    );
};

// Mengubah data materi berdasarkan ID
export const updateMateri = (id, materiData, callback) => {
    const { Judul, URL_content, kelas_id } = materiData;
    db.query(
        'UPDATE materi SET Judul = ?, URL_content = ?, kelas_id = ? WHERE id = ?',
        [Judul, URL_content, kelas_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus materi berdasarkan ID
export const deleteMateri = (id, callback) => {
    db.query('DELETE FROM materi WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
