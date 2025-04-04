// Mendapatkan semua data produk
export const getAllProduk = (callback) => {
    db.query('SELECT * FROM produk', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Mendapatkan data produk berdasarkan ID
export const getProdukById = (id, callback) => {
    db.query('SELECT * FROM produk WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results[0]);
    });
};

// Menambahkan produk baru
export const addProduk = (produkData, callback) => {
    const { deskripsi, harga, user_id } = produkData;
    db.query(
        'INSERT INTO produk (deskripsi, harga, user_id) VALUES (?, ?, ?)',
        [deskripsi, harga, user_id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...produkData });
        }
    );
};

// Mengubah data produk berdasarkan ID
export const updateProduk = (id, produkData, callback) => {
    const { deskripsi, harga, user_id } = produkData;
    db.query(
        'UPDATE produk SET deskripsi = ?, harga = ?, user_id = ? WHERE id = ?',
        [deskripsi, harga, user_id, id],
        (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        }
    );
};

// Menghapus produk berdasarkan ID
export const deleteProduk = (id, callback) => {
    db.query('DELETE FROM produk WHERE id = ?', [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
