import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tryagain = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState([false, false, false, false, false]); // Array to manage multiple checkboxes
    const [modules, setModules] = useState(['Video: Introduction to HR', 'Video: Another Module']); // Array to manage modules
    const [newModule, setNewModule] = useState(''); // State to manage new module input

    const handleCheckboxChange = (index) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    };

    const handleAddModule = () => {
        if (newModule.trim() !== '') {
            setModules([...modules, newModule]);
            setIsChecked([...isChecked, false]);
            setNewModule('');
        }
    };

    return (
        <div className='container py-2.5 px-4 sm:px-6 lg:px-8 overflow-y-auto'>
            {/* Header */}
            <header className="bg-white border-b py-2">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
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
            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <img src="/img/Tryagain.png" alt="Tryagain" className='w-full' />
                    <div className="max-w-2xl py-10 p-4">
                        <div className="border-b-2 pb-4 mb-4">
                            <h2 className="text-xl font-bold">Tanggal Quiz:</h2>
                            <p className="text-gray-600">23 September 2022, 10:20 AM</p>
                        </div>
                        <div className="border-2 p-4 mb-2">
                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-orange-500 text-white text-center p-4">
                                    <p className="font-bold">Nilai</p>
                                    <p className="text-3xl">20</p>
                                </div>
                                <div className="text-center p-4">
                                    <p className="font-bold">Soal</p>
                                    <p className="text-3xl">10</p>
                                </div>
                                <div className="text-center p-4">
                                    <p className="font-bold">Benar</p>
                                    <p className="text-3xl text-green-500"><i className="fas fa-check-circle"></i> 2</p>
                                </div>
                                <div className="text-center p-4">
                                    <p className="font-bold">Salah</p>
                                    <p className="text-3xl text-red-500"><i className="fas fa-times-circle"></i> 8</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-2 pb-4 mb-4">
                            <h2 className="text-xl font-bold">Sedikit Lagi!</h2>
                            <p className="text-gray-600">Kamu sudah menyelesaikan quiz dengan baik namun nilaimu belum cukup untuk melanjutkan materi.</p>
                            <p className="text-gray-600">Pelajari kembali modul sebelumnya dan kerjakan kembali quiz ini!</p>
                        </div>
                        <div className="text-center">
                            <button 
                                className="bg-green-100 text-green-600 font-bold py-2 px-4 rounded-full border-2 border-green-600"
                                onClick={() => navigate('/Soal')}
                            >
                                <i className="fas fa-redo"></i> Ulangi Quiz
                            </button>
                        </div>
                    </div>
                </div>
                {/* Aside */}
                <aside className="w-full md:w-1/3 bg-white rounded shadow mt-4 md:mt-0 md:ml-4 lg:w-fit">
                    <div className='container flex flex-col space-y-2'>
                        <h2 className="text-gray-600 mb-4 font-bold text-center">Daftar Modul</h2>
                        <div className="space-y-2 flex flex-col py-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className="flex items-center p-2 border rounded-lg hover:bg-gray-100 container">
                                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                    <div className="items-center border-b">
                                        <input
                                            type="checkbox"
                                            checked={isChecked[index]}
                                            onChange={() => handleCheckboxChange(index)}
                                            className="peer h-5 w-5 rounded-full border-gray-300 focus:ring-green-500"
                                        />
                                        <label className="font-medium">Video: Introduction to HR</label>
                                        <p className="text-sm text-gray-500">12 Menit</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center p-2 border rounded-lg hover:bg-gray-100 container">
                                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                <div className="items-center border-b">
                                    <input
                                        type="checkbox"
                                        checked={isChecked[5]}
                                        onChange={() => handleCheckboxChange(5)}
                                        className="peer h-5 w-5 rounded-full border-gray-300 focus:ring-green-500"
                                    />
                                    <label className="font-medium">Rangkuman: Introduction to HR</label>
                                    <p className="text-sm text-gray-500">10 module</p>
                                </div>
                            </div>
                            <div className='flex items-center p-2 border rounded-lg hover:bg-green-200'>
                                <i className="fas fa-file-alt text-gray-600 mr-2"></i>
                                <img src="img\File_Check.png" alt="" />
                                <span className="text-gray-600">Quiz: Introduction to HR</span>
                                <span className="ml-auto text-gray-400">10 Pertanyaan</span>
                            </div>
                            <div>
                                <h3 className="text-gray-600 mb-2">Introduction to HR</h3>
                                <div className="space-y-2">
                                    <button className="w-full py-2 bg-yellow-500 text-white rounded">
                                        <img src="./img/start.png" alt="" />
                                        Beri Review & Rating
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            {/* Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-green-500 py-2">
                <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-white">
                    <span className="text-sm">Foundations of User Experience Design</span>
                    <button className="flex items-center gap-1 text-white hover:text-gray-100">
                        <span className="text-sm">Foundations of User Experience Design</span>
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Tryagain;
