import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MetodePembayaran = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const courseData = location.state?.courseData || {
    title: "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager",
    price: "Rp 250K",
    originalPrice: "Rp 500K",
    image: "/img/Rectangle 22957 (5).png"
  };

  const [selectedBank, setSelectedBank] = useState('');
  const [isTransferOpen, setIsTransferOpen] = useState(true);
  const [isEWalletOpen, setIsEWalletOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('bca');

  const handleBayarClick = () => {
    if (!selectedPayment) {
      alert('Silakan pilih metode pembayaran terlebih dahulu');
      return;
    }

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <img 
              src="/img/Frame 3.png" 
              alt="logo vidiobelajar" 
              className="h-8 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-2">Pilih Metode</div>
          </div>
          <div className="h-1 flex-1 mx-4 bg-gray-200">
            <div className="h-full w-1/3 bg-green-500"></div>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center text-gray-500">2</div>
            <div className="ml-2">Bayar</div>
          </div>
          <div className="h-1 flex-1 mx-4 bg-gray-200"></div>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center text-gray-500">3</div>
            <div className="ml-2">Selesai</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Payment Methods */}
          <div>
            <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
            
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
                        selectedPayment === 'linkaja' ? 'border-green-500 bg-green-50' : ''
                      }`}
                      onClick={() => setSelectedPayment('linkaja')}
                    >
                      <div className="flex items-center gap-4">
                        <span>LinkAja</span>
                      </div>
                      {selectedPayment === 'linkaja' && (
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
            <div className="bg-white rounded-lg shadow-sm">
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
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start gap-6 mb-4">
                <img 
                  src="/img/Rectangle 22957 (5).png"
                  alt="Course"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-bold mb-2">{courseData.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">{courseData.price}</span>
                    <span className="text-gray-400 line-through">{courseData.originalPrice}</span>
                    <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded-full text-sm">
                      Diskon 50%
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Kelas Ini Sudah Termasuk</h3>
                <div className="space-y-2">
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

              {/* Ringkasan Pesanan */}
              <div className="border-t mt-6 pt-6">
                <h3 className="font-medium mb-4">Ringkasan Pesanan</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Video Learning</span>
                    <span>Rp 767.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Biaya Admin</span>
                    <span>Rp 7.000</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t">
                    <span>Total Pembayaran</span>
                    <span className="text-green-600">Rp 774.500</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleBayarClick}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 mt-6"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodePembayaran; 