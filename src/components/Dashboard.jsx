import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [statusMessage, setStatusMessage] = useState('');

    const WorkspaceUserData = async () => {
        try {
            // Retrieve token from localStorage
            const token = localStorage.getItem('token'); // <-- Updated key to 'token'

            // Check if token exists
            if (!token) {
                console.error('Token tidak ditemukan. Silakan login terlebih dahulu.');
                setStatusMessage('Token tidak ditemukan. Silakan login terlebih dahulu.');
                return;
            }

            // Make a GET request to the protected endpoint
            const response = await axios.get('http://localhost:3000/api/users', {
                headers: {
                    Authorization: `Bearer ${token}`, // Include token in Authorization header
                },
            });

            // Log and display the response data
            console.log('Data pengguna:', response.data);
            setStatusMessage('Data pengguna berhasil diambil. Periksa console untuk detailnya.');
        } catch (error) {
            console.error('Error saat mengambil data pengguna:', error.response?.data || error.message);

            // Handle authentication errors
            if (error.response?.status === 401 || error.response?.status === 403) {
                setStatusMessage('Autentikasi gagal: Token tidak valid atau kadaluarsa.');
            } else {
                setStatusMessage('Gagal mengambil data pengguna. Silakan coba lagi.');
            }
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Dashboard</h1>
            <p>Halaman ini hanya dapat diakses setelah login.</p>
            <button
                onClick={WorkspaceUserData}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Ambil Data Pengguna
            </button>
            {statusMessage && <p style={{ marginTop: '20px', color: 'red' }}>{statusMessage}</p>}
        </div>
    );
};

export default Dashboard;
