// Mendapatkan semua data pembayaran
export const getAllPembayaran = (callback) => {
    db.query('SELECT * FROM pembayaran', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data pembayaran berdasarkan ID
export const getPembayaranById = (id, callback) => {
    db.query('SELECT * FROM pembayaran WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan pembayaran baru
export const addPembayaran = (pembayaranData, callback) => {
    const { tanggal_pembayaran, metode_pembayaran, total, status, user_id, order_id } = pembayaranData;
    db.query(
        'INSERT INTO pembayaran (tanggal_pembayaran, metode_pembayaran, total, status, user_id, order_id) VALUES (?, ?, ?, ?, ?, ?)',
        [tanggal_pembayaran, metode_pembayaran, total, status, user_id, order_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...pembayaranData });
        }
    );
};

// Mengubah data pembayaran berdasarkan ID
export const updatePembayaran = (id, pembayaranData, callback) => {
    const { tanggal_pembayaran, metode_pembayaran, total, status, user_id, order_id } = pembayaranData;
    db.query(
        'UPDATE pembayaran SET tanggal_pembayaran = ?, metode_pembayaran = ?, total = ?, status = ?, user_id = ?, order_id = ? WHERE id = ?',
        [tanggal_pembayaran, metode_pembayaran, total, status, user_id, order_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus pembayaran berdasarkan ID
export const deletePembayaran = (id, callback) => {
    db.query('DELETE FROM pembayaran WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
