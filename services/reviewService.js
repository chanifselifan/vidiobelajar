// Mendapatkan semua data review
export const getAllReview = (callback) => {
    db.query('SELECT * FROM review', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data review berdasarkan ID
export const getReviewById = (id, callback) => {
    db.query('SELECT * FROM review WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan review baru
export const addReview = (reviewData, callback) => {
    const { tanggal, comment, user_id, kelas_id } = reviewData;
    db.query(
        'INSERT INTO review (tanggal, comment, user_id, kelas_id) VALUES (?, ?, ?, ?)',
        [tanggal, comment, user_id, kelas_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...reviewData });
        }
    );
};

// Mengubah data review berdasarkan ID
export const updateReview = (id, reviewData, callback) => {
    const { tanggal, comment, user_id, kelas_id } = reviewData;
    db.query(
        'UPDATE review SET tanggal = ?, comment = ?, user_id = ?, kelas_id = ? WHERE id = ?',
        [tanggal, comment, user_id, kelas_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus review berdasarkan ID
export const deleteReview = (id, callback) => {
    db.query('DELETE FROM review WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
