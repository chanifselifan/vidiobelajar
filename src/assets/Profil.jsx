import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profil = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    namaLengkap: '',
    email: '',
    noHp: ''
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [displayedProfileImageUrl, setDisplayedProfileImageUrl] = useState('/img/profile.png'); // Default profile image
  const fileInputRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);

      // Update displayed profile image URL
      const publicImageUrl = response.data.publicImageUrl;
      setDisplayedProfileImageUrl(publicImageUrl);

      alert('Foto profil berhasil diupload!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Gagal mengupload foto profil.');
    } finally {
      event.target.value = null;
    }
  };

  const handleChangePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleDelete = async () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    navigate('/register');
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
            <div className="flex items-center gap-6 mb-8">
              <img 
                src={displayedProfileImageUrl} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{userData.namaLengkap}</h2>
                <p className="text-gray-500">{userData.email}</p>
                <button 
                  className="text-orange-500 hover:text-orange-600 mt-2"
                  onClick={handleChangePhotoClick}
                >
                  Ganti Foto Profil
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleUpdate}>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={userData.namaLengkap || ''}
                  onChange={(e) => setUserData({...userData, namaLengkap: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  value={userData.email || ''}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    No. Hp
                  </label>
                  <div className="flex">
                    <select className="p-3 border rounded-l-lg border-r-0 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                      <option>+62</option>
                    </select>
                    <input
                      type="tel"
                      value={userData.noHp || ''}
                      onChange={(e) => setUserData({...userData, noHp: e.target.value})}
                      className="w-full p-3 border rounded-r-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300"
                >
                  Simpan
                </button>
                <button 
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300 ml-4"
                >
                  Hapus Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white pt-12 sm:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-4 relative p-6 rounded-lg overflow-hidden">
              
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
                style={{
                  backgroundImage: "url('./img/Frame 3.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  transform: 'scale(0.8)',
                  transition: 'transform 0.3s ease-in-out'
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <img 
                    src="./img/Frame 3.png" 
                    alt="Logo" 
                    className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300"
                  />
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-3">
                  Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Jl. Usman Effendi No. 50 Lowokwaru, Malang
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  +62-877-7123-1234
                </p>
              </div>
            </div>

            {/* Column 2 - Kategori */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg sm:text-xl">Kategori</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Digital & Teknologi</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Pemasaran</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Manajemen Bisnis</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Pengembangan Diri</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Desain</Link></li>
              </ul>
            </div>

            {/* Column 3 - Perusahaan */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg sm:text-xl">Perusahaan</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Tentang Kami</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">FAQ</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Kebijakan Privasi</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Ketentuan Layanan</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Bantuan</Link></li>
              </ul>
            </div>

            {/* Column 4 - Komunitas */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg sm:text-xl">Komunitas</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Tips Sukses</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 text-sm sm:text-base">Blog</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright & Social Media */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-0">@2023 Gerobak Sayur All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profil;