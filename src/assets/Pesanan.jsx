import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Pesanan = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('semua');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const pesananData = [
    {
      id: 'HEL/V1/10062023',
      waktu: '10 Juni 2023, 14:17',
      status: 'Berhasil',
      kursus: {
        title: 'Belajar Microsoft Office dan Google Workspace untuk Pemula',
        image: '/img/office.png',
        harga: 'Rp 300.000'
      },
      totalPembayaran: 'Rp 300.000'
    },
    {
      id: 'HEL/V1/10062023',
      waktu: '10 Juni 2023, 14:17',
      status: 'Gagal',
      kursus: {
        title: 'Belajar Microsoft Office dan Google Workspace untuk Pemula',
        image: '/img/office.png',
        harga: 'Rp 300.000'
      },
      totalPembayaran: 'Rp 300.000'
    },
    {
      id: 'HEL/V1/10062023',
      waktu: '10 Juni 2023, 14:17',
      status: 'Belum Bayar',
      kursus: {
        title: 'Belajar Microsoft Office dan Google Workspace untuk Pemula',
        image: '/img/office.png',
        harga: 'Rp 300.000'
      },
      totalPembayaran: 'Rp 300.000'
    }
  ];

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
            <h2 className="text-lg font-semibold mb-4">Daftar Pesanan</h2>
            <p className="text-sm text-gray-500 mb-4">Informasi terperinci mengenai pembelian</p>
            <div className="space-y-2">
              <div 
                className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-800"
                onClick={() => navigate('/profil')}
              >
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
              <div className="flex items-center gap-2 bg-yellow-50 text-yellow-600 font-medium p-2 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Pesanan Saya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg p-6">
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b mb-6">
              <button 
                className={`pb-4 px-2 ${activeTab === 'semua' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('semua')}
              >
                Semua Pesanan
              </button>
              <button 
                className={`pb-4 px-2 ${activeTab === 'menunggu' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('menunggu')}
              >
                Menunggu
              </button>
              <button 
                className={`pb-4 px-2 ${activeTab === 'berhasil' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('berhasil')}
              >
                Berhasil
              </button>
              <button 
                className={`pb-4 px-2 ${activeTab === 'gagal' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('gagal')}
              >
                Gagal
              </button>
            </div>

            {/* Search and Sort */}
            <div className="flex justify-between mb-6">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Cari Kelas"
                  className="pl-10 pr-4 py-2 border rounded-lg w-64"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <select className="px-4 py-2 border rounded-lg">
                <option>Urutkan</option>
                <option>Terbaru</option>
                <option>Terlama</option>
              </select>
            </div>

            {/* Order List */}
            <div className="space-y-4">
              {pesananData.map((pesanan, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-gray-500">No. Invoice: <span className="text-blue-500">{pesanan.id}</span></p>
                      <p className="text-sm text-gray-500">Waktu Pembayaran: {pesanan.waktu}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      pesanan.status === 'Berhasil' ? 'bg-green-100 text-green-600' :
                      pesanan.status === 'Gagal' ? 'bg-red-100 text-red-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {pesanan.status}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <img src={pesanan.kursus.image} alt={pesanan.kursus.title} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">{pesanan.kursus.title}</h3>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Harga</span>
                        <span className="font-medium">{pesanan.kursus.harga}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t mt-4 pt-4">
                    <span className="text-gray-500">Total Pembayaran</span>
                    <span className="text-green-500 font-medium">{pesanan.totalPembayaran}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6">
              <button className="p-2 border rounded hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded">1</button>
              <button className="px-4 py-2 border rounded hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border rounded hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border rounded hover:bg-gray-50">4</button>
              <button className="px-4 py-2 border rounded hover:bg-gray-50">5</button>
              <button className="px-4 py-2 border rounded hover:bg-gray-50">6</button>
              <button className="p-2 border rounded hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pesanan;