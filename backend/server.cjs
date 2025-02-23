const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Tambahkan ini untuk mengizinkan permintaan CORS
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Tambahkan ini untuk mengizinkan permintaan CORS
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data.json');

// Membaca data pengguna berdasarkan email
app.get('/api/users/:email', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file', error: err });
    }
    const users = JSON.parse(data).users;
    const user = users.find(user => user.email === req.params.email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  });
});

app.get('/api/users', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file', error: err });
    }
    const users = JSON.parse(data).users;
    res.json(users);
  });
});

// Menambahkan pengguna baru

app.post('/api/users', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file', error: err });
    }
    const users = JSON.parse(data).users;
    const newUser = req.body;
    users.push(newUser);
    fs.writeFile(dataFilePath, JSON.stringify({ users }), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing data file', error: err });
      }
      res.status(201).json(newUser);
    });
  });
});

// Memperbarui data pengguna berdasarkan email
app.put('/api/users/:email', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file', error: err });
    }
    const users = JSON.parse(data).users;
    const updatedUser = req.body;
    const userIndex = users.findIndex(user => user.email === req.params.email);
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    users[userIndex] = updatedUser;
    fs.writeFile(dataFilePath, JSON.stringify({ users }), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing data file', error: err });
      }
      res.json(updatedUser);
    });
  });
});

// Menghapus pengguna berdasarkan email
app.delete('/api/users/:email', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file', error: err });
    }
    let users = JSON.parse(data).users;
    users = users.filter(user => user.email !== req.params.email);
    fs.writeFile(dataFilePath, JSON.stringify({ users }), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing data file', error: err });
      }
      res.status(204).send();
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
