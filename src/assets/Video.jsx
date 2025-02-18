import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Video = () => {
  const navigate = useNavigate();
  const [isModuleOpen, setIsModuleOpen] = useState(true);
  const [isCertificateAvailable, setIsCertificateAvailable] = useState(false);

  useEffect(() => {
    const certificateStatus = localStorage.getItem('certificateAvailable');
    if (certificateStatus === 'true') {
      setIsCertificateAvailable(true);
    }
  }, []);

  const handleCertificateClick = () => {
    if (isCertificateAvailable) {
      navigate('/Sertifikat');
    }
  };

  const courseData = {
    title: 'Praktikkan Skill dengan Technical Book',
    description: 'Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book Riselearn',
    instructor: {
      name: 'Jenna Ortega',
      role: 'Senior Accountant di Gojek'
    },
    rating: 3.5,
    reviews: 86,
    progress: {
      current: 10,
      total: 12
    }
  };

  const moduleData = {
    title: 'Introduction to HR',
    videos: [
      {
        id: 1,
        title: 'Video: Introduction to HR',
        duration: '12 Menit',
        isActive: true,
        isCompleted: true,
        type: 'video'
      },
      {
        id: 2,
        title: 'Video: Introduction to HR',
        duration: '12 Menit',
        type: 'video'
      },
      {
        id: 3,
        title: 'Video: Introduction to HR',
        duration: '12 Menit',
        type: 'video'
      },
      {
        id: 4,
        title: 'Video: Introduction to HR',
        duration: '12 Menit',
        type: 'video'
      },
      {
        id: 5,
        title: 'Rangkuman: Introduction to HR',
        duration: '12 Menit',
        type: 'document'
      },
      {
        id: 6,
        title: 'Quiz: Introduction to HR',
        duration: '10 Pertanyaan',
        type: 'quiz'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/kelas" className="text-gray-600 hover:text-gray-800">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h1 className="text-sm">Foundations of User Experience Design</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="h-2 w-32 bg-gray-200 rounded-full">
                  <div className="h-full w-10/12 bg-yellow-400 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-600 ml-2">10/12</span>
              </div>
              <img src="/img/profile.png" alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Video Player */}
        <div className="col-span-3">
          <div className="bg-gray-800">
            <div className="aspect-w-16 aspect-h-9 container mx-auto">
              <div className="w-full h-[250px] md:h-[500px] flex items-center justify-center">
                <button className="w-84 h-84 bg-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all">
                  <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Video Info */}
          <div className="p-4">
            <h2 className="text-lg font-medium mb-3">{courseData.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{courseData.description}</p>
            <div className="flex items-center gap-3">
              <img 
                src="/img/instructor.png" 
                alt={courseData.instructor.name} 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{courseData.instructor.name}</p>
                <p className="text-xs text-gray-500">{courseData.instructor.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${star <= Math.floor(courseData.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-gray-600 ml-1">{courseData.rating}</span>
              <span className="text-sm text-gray-500">({courseData.reviews})</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-1 bg-white h-[calc(100vh-48px)] overflow-y-auto">
          <div className="p-3">
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <h2 className="text-sm font-semibold mb-1">25% Modul Telah Selesai</h2>
              <p className="text-xs text-gray-600 mb-3">Selesaikan Semua Modul Untuk Mendapatkan Sertifikat</p>
              <button 
                className={`w-full py-1.5 rounded-lg text-sm ${isCertificateAvailable ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
                onClick={handleCertificateClick}
              >
                Ambil Sertifikat
              </button>
            </div>

            <div className="mb-4">
              <div 
                className="flex items-center justify-between mb-2 cursor-pointer"
                onClick={() => setIsModuleOpen(!isModuleOpen)}
              >
                <h3 className="text-sm font-semibold">{moduleData.title}</h3>
                <button className="p-0.5">
                  <svg className={`w-4 h-4 text-gray-600 transform ${isModuleOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {isModuleOpen && (
                <div className="space-y-1">
                  {moduleData.videos.map((item) => (
                    <div 
                      key={item.id}
                      className={`p-2 rounded-lg flex items-start gap-2 cursor-pointer ${
                        item.isActive ? 'bg-green-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="mt-0.5">
                        {item.type === 'document' ? (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        ) : item.type === 'quiz' ? (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.duration}</p>
                      </div>
                      {item.isCompleted && (
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <button className="flex items-center gap-1 text-white hover:text-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Foundations of User Experience Design</span>
          </button>
          <button className="flex items-center gap-1 text-white hover:text-gray-100" onClick={() => navigate('/Rules')}>
            
            <span className="text-sm">Foundations of User Experience Design</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;