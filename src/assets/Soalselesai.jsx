import React from 'react';
import { useNavigate } from 'react-router-dom';

const Soalselesai = ({ onClose, onFinish }) => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/congrats');
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
      <img
        alt="Illustration of two people discussing in an office setting"
        className="mx-auto mb-6"
        height="300"
        src="https://storage.googleapis.com/a1aa/image/hAdVgHpN1IJXtrrvlLRpi5pqlXygazOTEW8MphHt3FY.jpg"
        width="400"
      />
      <h2 className="text-2xl font-semibold mb-2">Selesaikan Quiz</h2>
      <p className="text-gray-600 mb-6">Apakah kamu yakin untuk menyelesaikan quiz ini?</p>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-white text-green-500 border border-green-500 rounded-full px-6 py-2 font-semibold hover:bg-green-50"
          onClick={onClose}
        >
          Batal
        </button>
        <button
          className="bg-green-500 text-white rounded-full px-6 py-2 font-semibold hover:bg-green-600"
          onClick={handleFinish}
        >
          Selesai
        </button>
      </div>
    </div>
  );
};

export default Soalselesai;