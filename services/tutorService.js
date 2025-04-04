// Mendapatkan semua data tutor
export const getAllTutor = (callback) => {
    db.query('SELECT * FROM tutor', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data tutor berdasarkan ID
export const getTutorById = (id, callback) => {
    db.query('SELECT * FROM tutor WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan tutor baru
export const addTutor = (tutorData, callback) => {
    const { nama, keahlian, user_id } = tutorData;
    db.query(
        'INSERT INTO tutor (nama, keahlian, user_id) VALUES (?, ?, ?)',
        [nama, keahlian, user_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...tutorData });
        }
    );
};

// Mengubah data tutor berdasarkan ID
export const updateTutor = (id, tutorData, callback) => {
    const { nama, keahlian, user_id } = tutorData;
    db.query(
        'UPDATE tutor SET nama = ?, keahlian = ?, user_id = ? WHERE id = ?',
        [nama, keahlian, user_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus tutor berdasarkan ID
export const deleteTutor = (id, callback) => {
    db.query('DELETE FROM tutor WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
