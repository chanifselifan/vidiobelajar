import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setDuration, setSearchQuery, setSortBy } from '../reducers/filterSlice';
import CourseCard from './CourseCard';
import NavLogin from '../NavLogin';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SemuaProduk = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, duration, searchQuery, sortBy } = useSelector((state) => state.filter);

  // Local state for backend data, loading, and error
  const [backendCourses, setBackendCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data from backend whenever filters change
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);

      try {
        // Build query parameters
        const params = {};
        if (category && category !== 'Semua Kelas') params.kategori_id = category;
        if (duration && duration !== 'Semua Durasi') params.durasi = duration;
        if (searchQuery) params.search = searchQuery;
        if (sortBy && sortBy !== 'Urutkan') {
          if (sortBy === 'Harga Rendah') params.sort_by = 'price';
          if (sortBy === 'Harga Tinggi') params.sort_by = 'price';
          if (sortBy === 'A to Z') params.sort_by = 'title';
          if (sortBy === 'Z to A') params.sort_by = 'title';
          if (sortBy === 'Rating Tertinggi') params.sort_by = 'rating';
          if (sortBy === 'Rating Terendah') params.sort_by = 'rating';
          params.sort_order = sortBy.includes('Tinggi') || sortBy === 'Z to A' ? 'desc' : 'asc';
        }

        // Fetch data from backend
        const token = localStorage.getItem('token'); // Replace with your token retrieval logic
        const response = await axios.get('http://localhost:3000/api/kategori-kelas', {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBackendCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchCourses();
  }, [category, duration, searchQuery, sortBy]);

  const handleSelectProduct = (product) => {
    navigate(`/detail-produk/${product.id}`, { state: product });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavLogin />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Koleksi Video Pembelajaran Unggulan</h1>
          <p className="text-gray-600 mt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>
        {/* Filter, Sort, and Search UI */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Cari Kelas"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {/* Sort Dropdown */}
          <select className="px-4 py-2 border border-gray-300 rounded-lg" value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))}>
            <option>Urutkan</option>
            <option>Harga Rendah</option>
            <option>Harga Tinggi</option>
            <option>A to Z</option>
            <option>Z to A</option>
            <option>Rating Tertinggi</option>
            <option>Rating Terendah</option>
          </select>
        </div>
        {/* Content */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {backendCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.nama_kelas}
                instructor={course.instructor}
                rating={course.rating}
                price={course.price}
                image={course.image}
                onClick={() => handleSelectProduct(course)}
              />
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8 gap-2">
          {/* Pagination buttons (if needed) */}
        </div>
      </main>
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

export default SemuaProduk;