import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Selesai = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <img src="/img/Frame 3.png" alt="logo vidiobelajar" className="h-8 w-auto" />
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
            <div className="h-full bg-green-500"></div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <span className="ml-2 text-sm text-gray-600">Bayar</span>
          </div>
          <div className="h-0.5 flex-1 mx-4 bg-gray-200">
            <div className="h-full bg-green-500"></div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <span className="ml-2 text-sm text-gray-600">Selesai</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-8 text-center">
          <img 
            src="/img/selesai.png"
            alt="Payment Success"
            className="w-64 h-64 mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Pembayaran Berhasil!</h2>
          <p className="text-gray-600 mb-8">
            Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.
          </p>
          <button 
            onClick={() => navigate('/pesanan')}
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300"
          >
            Lihat Detail Pesanan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selesai; 