import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ id, title, instructor, rating, price, originalPrice, image }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail-produk/${id}`);
  };

  const handleBuyNowClick = () => {
    navigate(`/detail-produk/${id}`, { state: { title, instructor, rating, price, image } });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
      {/* Card Image dengan overlay gradient */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-xs sm:text-sm text-gray-600 mb-2">
          {instructor}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600 ml-2">
            ({rating})
          </span>
        </div>

        {/* Price & Action */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-green-600 whitespace-nowrap">
              {price}
            </span>
            <span className="text-gray-500 line-through ml-2">{originalPrice}</span>
          </div>
         
          <button 
            onClick={handleBuyNowClick}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
