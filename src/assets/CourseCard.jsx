import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ id, title, instructor, rating, price, originalPrice, image }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail-produk/${id}`, { state: { title, instructor, rating, price, image } });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden" onClick={handleDetailClick}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{instructor}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{rating} ★</span>
          <span className="ml-2 text-gray-600">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
