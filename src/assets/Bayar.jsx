import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Bayar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseData, paymentMethod } = location.state || {};
  const [timeLeft, setTimeLeft] = useState({ minutes: 50, seconds: 55 });
  const [isAtmOpen, setIsAtmOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isInternetOpen, setIsInternetOpen] = useState(false);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fungsi untuk handle ganti metode pembayaran
  const handleGantiMetode = () => {
    navigate('/ubah-metode', { 
      state: { 
        courseData,
        previousPayment: paymentMethod 
      } 
    });
  };

  // Fungsi untuk copy nomor VA
  const handleUserAction = () => {
    alert('Nomor VA berhasil disalin!');
  };

  // Fungsi bayar sekarang yang langsung ke halaman selesai
  const handleBayarSekarang = () => {
    navigate('/selesai');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <span className="text-orange-500 font-bold text-xl">video<span className="text-orange-700">belajar</span></span>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <span className="ml-2 text-sm text-gray-600">Pilih Metode</span>
          </div>
          <div className="h-0.5 flex-1 mx-4 bg-gray-200">
            <div className="h-full w-2/3 bg-green-500"></div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white text-sm">
              2
            </div>
            <span className="ml-2 text-sm text-gray-600">Bayar</span>
          </div>
          <div className="h-0.5 flex-1 mx-4 bg-gray-200"></div>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center text-sm">
              3
            </div>
            <span className="ml-2 text-sm text-gray-400">Selesai</span>
          </div>
        </div>
      </div>

      {/* Timer Banner */}
      <div className="bg-orange-50 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center text-sm">
            <span className="text-gray-600">Selesaikan pemesanan dalam</span>
            <span className="text-orange-500 font-medium ml-2">
              {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Metode Pembayaran</h2>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <img src="/img/bca.png" alt="BCA" className="h-8 w-8" />
                <div>
                  <p className="font-medium">Bayar Melalui Virtual Account BCA</p>
                  <p className="text-gray-500 flex items-center gap-2">
                    11739 081234567890
                    <button 
                      className="text-orange-500 hover:text-orange-600 px-2 py-1 rounded"
                      onClick={handleUserAction}
                    >
                      Salin
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Video Learning: {courseData?.title}</span>
                  <span>Rp 767.500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Biaya Admin</span>
                  <span>Rp 7.000</span>
                </div>
                <div className="flex justify-between pt-3 border-t font-semibold">
                  <span>Total Pembayaran</span>
                  <span className="text-green-500">Rp 774.500</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button 
                  onClick={handleGantiMetode}
                  className="flex-1 py-3 border border-green-500 text-green-500 rounded-lg font-medium hover:bg-green-50 transition-colors duration-300"
                >
                  Ganti Metode Pembayaran
                </button>
                <button 
                  onClick={handleBayarSekarang}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>

            {/* Tata Cara Pembayaran */}
            <div className="bg-white rounded-lg p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Tata Cara Pembayaran</h2>
              
              {/* ATM BCA */}
              <div className="mb-4">
                <button 
                  className="w-full p-4 flex items-center justify-between"
                  onClick={() => setIsAtmOpen(!isAtmOpen)}
                >
                  <span className="font-medium">ATM BCA</span>
                  <svg className={`w-5 h-5 transform ${isAtmOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isAtmOpen && (
                  <div className="p-4 space-y-2 text-gray-600">
                    <p>1. Masukkan kartu ATM dan PIN BCA Anda</p>
                    <p>2. Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "ke BCA Virtual Account"</p>
                    <p>3. Masukkan nomor Virtual Account</p>
                    <p>4. Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"</p>
                    <p>5. Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah</p>
                    <p>6. Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain</p>
                  </div>
                )}
              </div>

              {/* Mobile Banking BCA */}
              <div className="mb-4">
                <button 
                  className="w-full p-4 flex items-center justify-between"
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                  <span className="font-medium">Mobile Banking BCA</span>
                  <svg className={`w-5 h-5 transform ${isMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileOpen && (
                  <div className="p-4 space-y-2 text-gray-600">
                    <p>1. Buka Aplikasi BCA Mobile</p>
                    <p>2. Pilih "m-BCA", kemudian pilih "m-Transfer"</p>
                    <p>3. Pilih "BCA Virtual Account"</p>
                    <p>4. Masukkan nomor Virtual Account, lalu pilih "OK"</p>
                    <p>5. Klik tombol "Send" yang berada di sudut kanan atas aplikasi untuk melakukan transfer</p>
                    <p>6. Klik "OK" untuk melanjutkan pembayaran</p>
                    <p>7. Masukkan PIN Anda untuk meng-otorisasi transaksi</p>
                    <p>8. Transaksi Anda telah selesai</p>
                  </div>
                )}
              </div>

              {/* Internet Banking BCA */}
              <div>
                <button 
                  className="w-full p-4 flex items-center justify-between"
                  onClick={() => setIsInternetOpen(!isInternetOpen)}
                >
                  <span className="font-medium">Internet Banking BCA</span>
                  <svg className={`w-5 h-5 transform ${isInternetOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isInternetOpen && (
                  <div className="p-4 space-y-2 text-gray-600">
                    <p>1. Login ke KlikBCA Individual</p>
                    <p>2. Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account"</p>
                    <p>3. Masukkan nomor Virtual Account</p>
                    <p>4. Pilih "Lanjutkan" untuk melanjutkan pembayaran</p>
                    <p>5. Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada Token BCA Anda, lalu klik tombol "Kirim"</p>
                    <p>6. Pembayaran telah selesai</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg p-6">
            <img 
              src="/img/Rectangle 22957 (5).png"
              alt="Course"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-4">
              {courseData?.title || "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager"}
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-600 font-bold">Rp 250K</span>
              <span className="text-gray-400 line-through">Rp 500K</span>
              <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded-full text-sm">
                Diskon 50%
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Kelas Ini Sudah Termasuk</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Ujian Akhir</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>49 Video</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Pretest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bayar; 