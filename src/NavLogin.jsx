import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLogin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300"
                src="./img/Frame 3.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop  */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4 md:space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm md:text-base font-medium transition-colors duration-300"
            >
              Beranda
            </Link>
            <Link
              to="/courses"
              className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm md:text-base font-medium transition-colors duration-300"
            >
              Kursus
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  localStorage.removeItem('isLoggedIn');
                  window.location.reload();
                }}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Keluar
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Masuk
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-300"
          >
            Beranda
          </Link>
          <Link
            to="/courses"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-300"
          >
            Kursus
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                window.location.reload();
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-300"
            >
              Keluar
            </button>
          ) : (
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-300"
            >
              Masuk
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavLogin;
