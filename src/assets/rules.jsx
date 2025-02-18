import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Rules = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState([false, false, false, false, false]); // Array to manage multiple checkboxes
  const [activeModule, setActiveModule] = useState('introduction-to-hr');

  const modules = [
    {
      id: "introduction-to-hr",
      title: "Introduction to HR",
      content: [
        { type: "video", title: "Video 1", duration: "12 menit" },
        { type: "video", title: "Video 2", duration: "12 menit" },
      ]
    },
    // Add more modules as needed
  ];

  const handleCheckboxChange = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
  };

  const handleModuleClick = (id) => {
    setActiveModule(id);
  };

  return (
    <div className="min-h-full bg-gray-50 overflow-y-auto">
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
              <img src="../img/profile.png" alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      </header>
      {/* Rules */}
      <div className='container mx-auto gap-0 flex flex-col md:flex-row flex-1 overflow-hidden'>
        <div className='col-span-9'>
                  
          <img src="../img/rules.png" alt="" className="'w-full style={{flex: '1 1 auto '}} md:w-full '" />
          <div className='sm:px-8 py-10 sm: gap-4 md:gap-8'> 
            <h3 className='text-xl font-semibold mb-4'>Aturan</h3>
            <p className='mb-4'>Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman awalmu terkait materi yang akan kamu pelajari</p>
            <p className='mb-4'>Syarat Nilai Kelulusan: - <br />
            Durasi Ujian: 5 Menit</p>
            <p className='mb-8'>Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan penilaian akhirmu dalam rangkaian kelas ini</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded sm:items-center" onClick={() => navigate('/Soal')}>Mulai Pre-Test</button>
          </div>
        </div>
          
        {/* Aside */}
        <aside className="w-full md:w-1/4 bg-white p-4 border-l border-gray-200 my-0">
          <h2 className="text-gray-600 mb-4 font-bold">Daftar Modul</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-600 mb-2 font-bold">Introduction to HR</h3>
              <div className="space-y-2">
                {isChecked.map((checked, index) => (
                  <div key={index} className="flex items-center p-2 border rounded-lg hover:bg-green-200">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <div className="items-center">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleCheckboxChange(index)}
                        className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                      />
                      <p className="font-medium">Video: Introduction to HR</p>
                      <p className="text-sm text-gray-500">12 Menit</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center p-2 border rounded-lg hover:bg-green-200">
                <i className="fas fa-file-alt text-gray-600 mr-2"></i>
                <img src="../img/File_Check.png" alt="" />
                <span className="text-gray-600">Quiz: Introduction to HR</span>
                <span className="ml-auto text-gray-400">10 Pertanyaan</span>
              </div>
            </div>
            <div>
              <h3 className="text-gray-600 mb-2">Introduction to HR</h3>
              <div className="space-y-2">
                <button className="w-full py-2 bg-yellow-500 text-white rounded">
                  <img src="../img/start.png" alt="" />
                  Beri Review & Rating
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <Link to='/Rules' className="flex items-center gap-1 text-white hover:text-gray-100">
            <span className="text-sm">Foundations of User Experience Design</span>
          </Link>

          <button className="flex items-center gap-1 text-white hover:text-gray-100">
            <span className="text-sm">Foundations of User Experience Design</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
