// Mendapatkan semua data order
export const getAllOrder = (callback) => {
    db.query('SELECT * FROM `order`', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data order berdasarkan ID
export const getOrderById = (id, callback) => {
    db.query('SELECT * FROM `order` WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan order baru
export const addOrder = (orderData, callback) => {
    const { tanggal_order, status, user_id } = orderData;
    db.query(
        'INSERT INTO `order` (tanggal_order, status, user_id) VALUES (?, ?, ?)',
        [tanggal_order, status, user_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...orderData });
        }
    );
};

// Mengubah data order berdasarkan ID
export const updateOrder = (id, orderData, callback) => {
    const { tanggal_order, status, user_id } = orderData;
    db.query(
        'UPDATE `order` SET tanggal_order = ?, status = ?, user_id = ? WHERE id = ?',
        [tanggal_order, status, user_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus order berdasarkan ID
export const deleteOrder = (id, callback) => {
    db.query('DELETE FROM `order` WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
