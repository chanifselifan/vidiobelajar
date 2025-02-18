import React from 'react';
import NavLogin from '../NavLogin';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';

const DetailProduk = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Example data (replace with data from API/database)
  const courseData = {
    title: "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager",
    instructor: "Gregorius Erick Luwanto",
    rating: 3.5,
    price: "Rp 250K",
    originalPrice: "Rp 400K",
    image: "/img/course-hero.jpg",
    description: "Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus...",
  };

  const handleBuyClick = () => {
    navigate('/metode-pembayaran', { 
      state: { 
        courseData: {
          title: courseData.title,
          price: courseData.price,
          originalPrice: courseData.originalPrice,
          image: courseData.image
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavLogin />
      
      {/* Logo and Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-500">Beranda</Link>
          <span className="mx-2">/</span>
          <Link to="/courses" className="hover:text-green-500">Desain</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6 sm:mb-8">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
              alt="Course Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-8">
              <div className="max-w-4xl text-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                  Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
                  Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.
                </p>
                <div className="flex items-center justify-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${index < Math.floor(courseData.rating) ? 'text-yellow-400' : 'text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-400 text-sm sm:text-base">3.5 (86)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Deskripsi</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula sebagai desainer UX.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Dalam kursus ini, Anda akan diperkenalkan dengan dunia desain UX dan memahami apa yang dilakukan desainer UX dalam pekerjaan sehari-hari. Mulai dari mempelajari prinsip-prinsip dasar UX hingga memahami bagaimana desainer UX mengidentifikasi masalah dan menyelesaikannya.
              </p>
            </div>

            {/* Learn with Professional Tutor */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Belajar bersama Tutor Profesional</h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://ui-avatars.com/api/?name=Gregorius+Erick+Luwanto&background=random"
                    alt="Tutor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Gregorius Erick Luwanto</h3>
                  <p className="text-gray-600">Senior Talent Acquisition di Gojek</p>
                </div>
              </div>
              <p className="text-gray-600">
                Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
              </p>
            </div>

            {/* You Will Learn */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">Kamu akan Mempelajari</h2>
              
              {/* Course Section 1 */}
              <div className="border rounded-lg mb-4">
                <div className="p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-green-500 font-medium">Introduction to Course 1: Foundations of User Experience Design</h3>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {/* Course Items */}
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>The basics of user experience design</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        12 Menit
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Jobs in the field of user experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        12 Menit
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>The product development life cycle</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        12 Menit
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Course Sections */}
              <div className="border rounded-lg mb-4">
                <div className="p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-green-500 font-medium">Universal design, inclusive design, and equity-focused design</h3>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg mb-4">
                <div className="p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-green-500 font-medium">Introduction to design sprints</h3>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg">
                <div className="p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-green-500 font-medium">Introduction to UX research</h3>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating and Review */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">Rating dan Review</h2>
              {/* Review Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Review Item 1 */}
                <div className="bg-white rounded-lg border p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-100 rounded-full p-1">
                      <img 
                        src="https://ui-avatars.com/api/?name=Gregorius+Edrik+Lawanto&background=random"
                        alt="Reviewer"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Gregorius Edrik Lawanto</h3>
                      <p className="text-gray-500 text-sm">Alumni Batch 2</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${index < 3 ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-1">3.5</span>
                  </div>
                </div>

                {/* Review Item 2 */}
                <div className="bg-white rounded-lg border p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-100 rounded-full p-1">
                      <img 
                        src="https://ui-avatars.com/api/?name=Gregorius+Edrik+Lawanto&background=random"
                        alt="Reviewer"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Gregorius Edrik Lawanto</h3>
                      <p className="text-gray-500 text-sm">Alumni Batch 2</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${index < 3 ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-1">3.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Course Card */}
            <CourseCard 
              title={courseData.title}
              instructor={courseData.instructor}
              rating={courseData.rating}
              price={courseData.price}
              originalPrice={courseData.originalPrice}
              image={courseData.image}
               
            />
            
              <button onClick={handleBuyClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full mt-4">
                Buy Now
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

export default DetailProduk;
