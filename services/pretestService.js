// Mendapatkan semua data pretest
export const getAllPretest = (callback) => {
    db.query('SELECT * FROM pretest', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data pretest berdasarkan ID
export const getPretestById = (id, callback) => {
    db.query('SELECT * FROM pretest WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan pretest baru
export const addPretest = (pretestData, callback) => {
    const { total_soal, total_benar, total_salah, kelas_id } = pretestData;
    db.query(
        'INSERT INTO pretest (total_soal, total_benar, total_salah, kelas_id) VALUES (?, ?, ?, ?)',
        [total_soal, total_benar, total_salah, kelas_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...pretestData });
        }
    );
};

// Mengubah data pretest berdasarkan ID
export const updatePretest = (id, pretestData, callback) => {
    const { total_soal, total_benar, total_salah, kelas_id } = pretestData;
    db.query(
        'UPDATE pretest SET total_soal = ?, total_benar = ?, total_salah = ?, kelas_id = ? WHERE id = ?',
        [total_soal, total_benar, total_salah, kelas_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus pretest berdasarkan ID
export const deletePretest = (id, callback) => {
    db.query('DELETE FROM pretest WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
