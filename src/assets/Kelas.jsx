import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Kelas = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('semua');

  const kelasData = [
    {
      id: 1,
      title: 'Big 4 Auditor Financial Analyst',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'Jenna Ortega',
        role: 'Senior Accountant di Gojek'
      },
      progress: {
        completed: 12,
        total: 12,
        status: 'Selesai',
        percent: 100
      },
      duration: '360 Menit',
      modules: '12 Modul',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3'
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
      instructor: {
        name: 'John Doe',
        role: 'Senior Marketer di Tokopedia'
      },
      progress: {
        completed: 2,
        total: 12,
        status: 'Sedang Berjalan',
        percent: 28
      },
      duration: '360 Menit',
      modules: '12 Modul',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3'
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
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Daftar Kelas</h2>
            <p className="text-sm text-gray-500 mb-4">Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!</p>
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
              <div className="flex items-center gap-2 bg-yellow-50 text-yellow-600 font-medium p-2 rounded">
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

        {/* Course List */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg p-6">
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b mb-6">
              <button 
                className={`pb-4 px-2 ${activeTab === 'semua' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('semua')}
              >
                Semua Kelas
              </button>
              <button 
                className={`pb-4 px-2 ${activeTab === 'berjalan' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('berjalan')}
              >
                Sedang Berjalan
              </button>
              <button 
                className={`pb-4 px-2 ${activeTab === 'selesai' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('selesai')}
              >
                Selesai
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <input 
                type="text"
                placeholder="Cari Kelas"
                className="pl-10 pr-4 py-2 border rounded-lg w-64"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Course Cards */}
            <div className="space-y-6">
              {kelasData.map((kelas) => (
                <div key={kelas.id} className="border rounded-lg p-4">
                  <div className="flex gap-4">
                    <img src={kelas.image} alt={kelas.title} className="w-24 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-lg">{kelas.title}</h3>
                          <p className="text-gray-500 text-sm">{kelas.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          kelas.progress.status === 'Selesai' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          {kelas.progress.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <img src="/img/instructor.png" alt={kelas.instructor.name} className="w-6 h-6 rounded-full" />
                        <div>
                          <p className="text-sm font-medium">{kelas.instructor.name}</p>
                          <p className="text-xs text-gray-500">{kelas.instructor.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          {kelas.modules}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {kelas.duration}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 mb-2">
                          {kelas.progress.completed}/{kelas.progress.total} Modul Terselesaikan
                        </p>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: `${kelas.progress.percent}%` }}
                          ></div>
                        </div>
                      </div>

                      {kelas.progress.status === 'Selesai' ? (
                        <div className="flex justify-end gap-4 mt-4">
                          <button className="px-4 py-2 text-green-500 border border-green-500 rounded-lg hover:bg-green-50">
                            Unduh Sertifikat
                          </button>
                          <button 
                            onClick={() => navigate('/video')}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                          >
                            Lihat Detail Kelas
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-end mt-4">
                          <button 
                            onClick={() => navigate('/video')}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                          >
                            Lanjutkan Pembelajaran
                          </button>
                        </div>
                      )}
                    </div>
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

export default Kelas;