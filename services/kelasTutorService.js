// Mendapatkan semua data kelas_tutor
export const getAllKelasTutor = (callback) => {
    db.query('SELECT * FROM kelas_tutor', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data kelas_tutor berdasarkan ID
export const getKelasTutorById = (id, callback) => {
    db.query('SELECT * FROM kelas_tutor WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan data kelas_tutor baru
export const addKelasTutor = (kelasTutorData, callback) => {
    const { biaya, kelas_id, tutor_id } = kelasTutorData;
    db.query(
        'INSERT INTO kelas_tutor (biaya, kelas_id, tutor_id) VALUES (?, ?, ?)',
        [biaya, kelas_id, tutor_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...kelasTutorData });
        }
    );
};

// Mengubah data kelas_tutor berdasarkan ID
export const updateKelasTutor = (id, kelasTutorData, callback) => {
    const { biaya, kelas_id, tutor_id } = kelasTutorData;
    db.query(
        'UPDATE kelas_tutor SET biaya = ?, kelas_id = ?, tutor_id = ? WHERE id = ?',
        [biaya, kelas_id, tutor_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus data kelas_tutor berdasarkan ID
export const deleteKelasTutor = (id, callback) => {
    db.query('DELETE FROM kelas_tutor WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
