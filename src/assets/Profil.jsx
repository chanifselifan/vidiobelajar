import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Tambahkan ini untuk melakukan permintaan HTTP

const Profil = () => {
  const API_URL = "/api/users";
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // State untuk mengelola mode edit
  const [error, setError] = useState(''); // State untuk menyimpan pesan kesalahan

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = localStorage.getItem('userEmail');
        if (!email) {
          throw new Error('User email not found in localStorage');
        }
        const response = await axios.get(`${API_URL}/${email}`);
        if (response.status === 404) {
          throw new Error('User not found');
        }
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message); // Set pesan kesalahan
      }
    };

    fetchUserData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleEdit = () => {
    if (isEditing) {
      updateUser();
    }
    setIsEditing(!isEditing);
  };

  const updateUser = async () => {
    try {
      console.log('Mengirim data ke server:', userData); // Log data yang dikirim
      const response = await axios.put(`${API_URL}/${userData.email}`, userData);
      console.log('Respons dari server:', response); // Log respons dari server
      alert('Data berhasil diperbarui');
    } catch (error) {
      console.error('Error updating user data:', error.response || error.message); // Log error yang lebih spesifik
      alert('Gagal memperbarui data');
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`${API_URL}/${userData.email}`);
      alert('Akun berhasil dihapus');
      localStorage.clear(); // Hapus data dari localStorage
      navigate('/register'); // Arahkan ke halaman register setelah akun dihapus
    } catch (error) {
      console.error('Error deleting user account:', error);
      alert('Gagal menghapus akun');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src="/img/Frame 3.png" alt="logo vidiobelajar" className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <span>Kategori</span>
              <img src="/img/profile.png" alt="Profile" className="h-8 w-8 rounded-full" />
              <button className="md:hidden" onClick={toggleSidebar}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className={`col-span-1 md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Ubah Profil</h2>
            <p className="text-sm text-gray-500 mb-4">Ubah data diri Anda</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-yellow-50 text-yellow-600 font-medium p-2 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Profil Saya</span>
              </div>
              <div 
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-800"
                onClick={() => navigate('/kelas')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Kelas Saya</span>
              </div>
              <div 
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-800"
                onClick={() => navigate('/pesanan')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Pesanan Saya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg p-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                {error}
              </div>
            )}
            <div className="flex items-center gap-6 mb-8">
              <img 
                src="/img/profile.png" 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{userData.name}</h2>
                <p className="text-gray-500">{userData.email}</p>
                <button className="text-orange-500 hover:text-orange-600 mt-2">
                  Ganti Foto Profil
                </button>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => setUserData({...userData, name: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  disabled={!isEditing} // Disable input jika tidak dalam mode edit
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  disabled={!isEditing} // Disable input jika tidak dalam mode edit
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    No. Hp
                  </label>
                  <div className="flex">
                    <select className="p-3 border rounded-l-lg border-r-0 focus:ring-2 focus:ring-green-500 focus:border-green-500" disabled={!isEditing}>
                      <option>+62</option>
                    </select>
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({...userData, phone: e.target.value})}
                      className="w-full p-3 border rounded-r-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      disabled={!isEditing} // Disable input jika tidak dalam mode edit
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button 
                  type="button"
                  onClick={toggleEdit}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors duration-300 ${isEditing ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                  {isEditing ? 'Simpan' : 'Edit'}
                </button>
                <button 
                  onClick={deleteUser}
                  className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300"
                >
                  Hapus Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;