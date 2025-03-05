import React, { useState } from 'react';
import CourseCard from './CourseCard.jsx';
import { Link } from 'react-router-dom';
import NavLogin from '../NavLogin';

const Home = () => {
  // Data untuk cards
  const courses = [
    {
      id: 1,
      title: "Big 4 Auditor Financial Analyst",
      instructor: "Jenna Ortega",
      rating: 4.5,
      price: "Rp 300K",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "John Doe",
      rating: 4.7,
      price: "Rp 350K",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Graphic Design Essentials",
      instructor: "Jane Smith",
      rating: 4.8,
      price: "Rp 400K",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Self Development Workshop",
      instructor: "Emily Johnson",
      rating: 4.6,
      price: "Rp 250K",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3"
    },
    {
      id: 5,
      title: "Business Management 101",
      instructor: "Michael Brown",
      rating: 4.9,
      price: "Rp 500K",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
    },
    {
      id: 6,
      title: "Advanced Data Science",
      instructor: "Sarah Davis",
      rating: 4.7,
      price: "Rp 450K",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3"
    },
    {
      id: 7,
      title: "Creative Writing",
      instructor: "David Wilson",
      rating: 4.5,
      price: "Rp 300K",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
    },
    {
      id: 8,
      title: "Photography Basics",
      instructor: "Laura Martinez",
      rating: 4.8,
      price: "Rp 350K",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3"
    },
    {
      id: 9,
      title: "Web Development Bootcamp",
      instructor: "James Anderson",
      rating: 4.9,
      price: "Rp 600K",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
    }
  ];

  //  state
  const [activeCategory, setActiveCategory] = useState('Semua Kelas');

  //  kategori
  const categories = [
    'Semua Kelas',
    'Pemasaran',
    'Desain',
    'Pengembangan Diri',
    'Bisnis'
  ];

  return (
    <div className="min-h-screen">
      <NavLogin />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative bg-cover bg-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 rounded-lg my-4 sm:my-6 md:my-8 mx-auto"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('./img/gambar-awal.jpeg')`,
            minHeight: "300px",
            height: {
              default: "300px",
              sm: "350px",
              md: "400px"
            },
            maxWidth: "1200px",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "1rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
        >
          <div className="relative z-10 text-white h-full flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 max-w-xl sm:max-w-2xl drop-shadow-lg">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-md sm:max-w-xl px-4 drop-shadow-md">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
            </p>
            <Link 
              to="/semua-produk" 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              Lihat Semua Kursus
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12"></div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 px-4">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-gray-600 mb-6 px-4">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          {/* Kategori Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 px-4">
            {categories.map((category) => (
              <Link
                key={category}
                to="/"
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Course Grid responsivitas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                rating={course.rating}
                price={course.price}
                image={course.image}
              />
            ))}
          </div>
        </div>

        {/* Newsletter responsivitas */}
        <div 
          className="relative text-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 rounded-lg my-4 sm:my-6 md:my-8"
          style={{
            backgroundImage: "url('/img/Free Photo _ People working in elegant and cozy office space.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
              Mau Belajar Lebih Banyak?
            </h2>
            <p className="text-sm sm:text-base mb-4 sm:mb-6">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 px-4">
              <input 
                type="email" 
                placeholder="Masukkan Email" 
                className="flex-1 px-3 sm:px-4 py-2 rounded-lg text-gray-900 text-sm sm:text-base"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base transition-all duration-300">
                Subscribe
              </button>
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

export default Home;
