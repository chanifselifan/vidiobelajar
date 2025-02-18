import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Soalselesai from './Soalselesai';

const Soal = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const correctAnswer = "1"; // Correct answer for all questions

  const handleAnswerChange = (event) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion - 1] = event.target.value;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleQuestionClick = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };

  const handleFinishQuiz = () => {
    let score = 0;
    selectedAnswers.forEach((answer) => {
      if (answer === correctAnswer) {
        score += 10;
      }
    });

    if (score >= 80) {
      navigate('/congrats', { state: { score } });
    } else {
      navigate('/tryagain', { state: { score } });
    }
  };

  const handleSelesaiClick = () => {
    setShowModal(true);
  };

  return (
    <div className="container mx-auto py-2.5 relative overflow-auto">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Soalselesai onClose={() => setShowModal(false)} onFinish={handleFinishQuiz} />
          </div>
        </div>
      )}
      <header className="bg-white border-b">
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
       {/*list soal*/}
      <div className={`flex flex-col md:flex-row flex-1 overflow-hidden ${showModal ? 'filter blur-sm' : ''}`}>
        <aside className="w-full md:w-1/4 bg-white p-4 border-r border-gray-200">
          <h2 className="text-gray-600 mb-4">List Soal</h2>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handleQuestionClick(number)}
                className={`bg-gray-200 rounded-md border border-gray-300 hover:border-gray-500 ${
                  currentQuestion === number ? 'bg-gray-300 text-white' : ''
                }`}
              >
                {number}
              </button>
            ))}
          </div>
          <button className="w-full py-2 bg-blue-100 text-blue-600 rounded">
            Selesaikan semua soal untuk mengakhiri quiz
          </button>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 bg-white">
          <h1 className="text-2xl font-semibold mb-4">
            Pertanyaan {currentQuestion}
          </h1>
          <p className="text-gray-600 mb-6">
            Memikirkan dan mengantisipasi secara teliti adanya user secara tidak
            sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat
            default yang mengurangi kepanikan pada user adalah pengertian dari ...
          </p>
          <div className="space-y-4">
            <div className="p-4 border border-gray-300 rounded flex items-center">
              <input
                type="radio"
                name="answer"
                value="1"
                checked={selectedAnswers[currentQuestion - 1] === "1"}
                onChange={handleAnswerChange}
                className="form-radio text-green-500 mr-2"
              />
              <label htmlFor="answer1" className="text-gray-600">
                Memikirkan tentang default
              </label>
            </div>
            <div className="p-4 border border-gray-300 rounded flex items-center">
              <input
                type="radio"
                id="answer2"
                name="answer"
                value="2"
                checked={selectedAnswers[currentQuestion - 1] === "2"}
                onChange={handleAnswerChange}
                className="form-radio text-gray-500 mr-2"
              />
              <label htmlFor="answer2" className="text-gray-600">
                Mempertimbangkan tata letak halaman berdasarkan suatu tujuan
                tertentu
              </label>
            </div>
            <div className="p-4 border border-gray-300 rounded flex items-center">
              <input
                type="radio"
                id="answer3"
                name="answer"
                value="3"
                checked={selectedAnswers[currentQuestion - 1] === "3"}
                onChange={handleAnswerChange}
                className="form-radio text-gray-500 mr-2"
              />
              <label htmlFor="answer3" className="text-gray-600">
                Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi
                saat itu juga
              </label>
            </div>
            <div className="p-4 border border-gray-300 rounded flex items-center">
              <input
                type="radio"
                id="answer4"
                name="answer"
                value="4"
                checked={selectedAnswers[currentQuestion - 1] === "4"}
                onChange={handleAnswerChange}
                className="form-radio text-gray-500 mr-2"
              />
              <label htmlFor="answer4" className="text-gray-600">
                Menciptakan konsistensi dan menggunakan elemen UI umum
              </label>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              className="flex items-center text-green-500 border border-green-500 p-4 rounded"
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 1}
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Sebelumnya
            </button>
            {currentQuestion < 10 ? (
              <button
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleNextQuestion}
              >
                Selanjutnya
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            ) : (
              <button
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleSelesaiClick}
              >
                Selesai
                <i className="fas fa-arrow-left mr-2"></i>
              </button>
            )}
          </div>
        </main>
        {/* Aside */}
        <aside className="w-full md:w-1/4 bg-white p-4 border-l border-gray-200">
          <h2 className="text-gray-600 mb-4 font-bold">Daftar Modul</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-600 mb-2 font-bold">Introduction to HR</h3>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center p-2 border rounded-lg hover:bg-green-200">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <div className="items-center">
                      <input
                        type="checkbox"
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
                <img src="img\File_Check.png" alt="" />
                <span className="text-gray-600">Quiz: Introduction to HR</span>
                <span className="ml-auto text-gray-400">10 Pertanyaan</span>
              </div>
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
        </aside>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-white">
          <span className="text-sm">Foundations of User Experience Design</span>
          <button className="flex items-center gap-1 text-white hover:text-gray-100">
            <span className="text-sm">Foundations of User Experience Design</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
};

export default Soal;
