import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const UbahMetode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseData } = location.state || {};
  
  const [selectedPayment, setSelectedPayment] = useState('bca');
  const [isTransferOpen, setIsTransferOpen] = useState(true);
  const [isEWalletOpen, setIsEWalletOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  // Fungsi untuk handle tombol Bayar Sekarang
  const handleBayarSekarang = () => {
    navigate('/bayar', {
      state: {
        courseData,
        paymentMethod: selectedPayment
      }
    });
  };

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

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Ubah Metode Pembayaran</h2>

        {/* Transfer Bank */}
        <div className="bg-white rounded-lg shadow-sm mb-4">
          <button 
            className="w-full p-4 flex items-center justify-between"
            onClick={() => setIsTransferOpen(!isTransferOpen)}
          >
            <span>Transfer Bank</span>
            <svg className={`w-5 h-5 transform ${isTransferOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isTransferOpen && (
            <div className="p-4 border-t">
              <div className="space-y-4">
                <button 
                  className={`w-full p-4 flex items-center justify-between border rounded-lg hover:border-green-500 transition-colors ${
                    selectedPayment === 'bca' ? 'border-green-500 bg-green-50' : ''
                  }`}
                  onClick={() => setSelectedPayment('bca')}
                >
                  <div className="flex items-center gap-4">
                    <img src="/img/bca.png" alt="BCA" className="h-6 w-6" />
                    <span>Bank BCA</span>
                  </div>
                  {selectedPayment === 'bca' && (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                <button 
                  className={`w-full p-4 flex items-center justify-between border rounded-lg hover:border-green-500 transition-colors ${
                    selectedPayment === 'bni' ? 'border-green-500 bg-green-50' : ''
                  }`}
                  onClick={() => setSelectedPayment('bni')}
                >
                  <div className="flex items-center gap-4">
                    <img src="/img/bni.png" alt="BNI" className="h-6 w-6" />
                    <span>Bank BNI</span>
                  </div>
                  {selectedPayment === 'bni' && (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                <button 
                  className={`w-full p-4 flex items-center justify-between border rounded-lg hover:border-green-500 transition-colors ${
                    selectedPayment === 'bri' ? 'border-green-500 bg-green-50' : ''
                  }`}
                  onClick={() => setSelectedPayment('bri')}
                >
                  <div className="flex items-center gap-4">
                    <img src="/img/bri.png" alt="BRI" className="h-6 w-6" />
                    <span>Bank BRI</span>
                  </div>
                  {selectedPayment === 'bri' && (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                <button 
                  className={`w-full p-4 flex items-center justify-between border rounded-lg hover:border-green-500 transition-colors ${
                    selectedPayment === 'mandiri' ? 'border-green-500 bg-green-50' : ''
                  }`}
                  onClick={() => setSelectedPayment('mandiri')}
                >
                  <div className="flex items-center gap-4">
                    <img src="/img/mandiri.png" alt="Mandiri" className="h-6 w-6" />
                    <span>Bank Mandiri</span>
                  </div>
                  {selectedPayment === 'mandiri' && (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* E-Wallet */}
        <div className="bg-white rounded-lg shadow-sm mb-4">
          <button 
            className="w-full p-4 flex items-center justify-between"
            onClick={() => setIsEWalletOpen(!isEWalletOpen)}
          >
            <span>E-Wallet</span>
            <svg className={`w-5 h-5 transform ${isEWalletOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isEWalletOpen && (
            <div className="p-4 border-t">
              <div className="space-y-4">
                <button 
                  className={`w-full p-4 flex items-center justify-between border rounded-lg hover:border-green-500 transition-colors ${
                    selectedPayment === 'dana' ? 'border-green-500 bg-green-50' : ''
                  }`}
                  onClick={() => setSelectedPayment('dana')}
                >
                  <div className="flex items-center gap-4">
                    <img src="/img/DANA.png" alt="Dana" className="h-6 w-6" />
                    <span>Dana</span>
                  </div>
                  {selectedPayment === 'dana' && (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                <button 
                  className={`w-full p-4 flex items-center justify-between border rounded-lg hover:border-green-500 transition-colors ${
                    selectedPayment === 'ovo' ? 'border-green-500 bg-green-50' : ''
                  }`}
                  onClick={() => setSelectedPayment('ovo')}
                >
                  <div className="flex items-center gap-4">
                    <img src="/img/OVO.png" alt="OVO" className="h-6 w-6" />
                    <span>OVO</span>
                  </div>
                  {selectedPayment === 'ovo' && (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                <button 
                  className={`w-full p-4 flex items-center justify-between border rounded-lg hover:border-green-500 transition-colors ${
                    selectedPayment === 'shopeepay' ? 'border-green-500 bg-green-50' : ''
                  }`}
                  onClick={() => setSelectedPayment('shopeepay')}
                >
                  <div className="flex items-center gap-4">
                    <img src="/img/SHOPEE.png" alt="ShopeePay" className="h-6 w-6" />
                    <span>Shopee Pay</span>
                  </div>
                  {selectedPayment === 'shopeepay' && (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Kartu Kredit/Debit */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <button 
            className="w-full p-4 flex items-center justify-between"
            onClick={() => setIsCardOpen(!isCardOpen)}
          >
            <span>Kartu Kredit/Debit</span>
            <svg className={`w-5 h-5 transform ${isCardOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isCardOpen && (
            <div className="p-4 border-t">
              <div className="flex items-center gap-4">
                <img src="/img/visa.png" alt="Visa" className="h-6 w-auto" />
                <img src="/img/mastercard.png" alt="Mastercard" className="h-6 w-auto" />
                <img src="/img/jcb.png" alt="JCB" className="h-6 w-auto" />
              </div>
            </div>
          )}
        </div>

        {/* Tombol Bayar Sekarang */}
        <button 
          onClick={handleBayarSekarang}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300"
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default UbahMetode; 