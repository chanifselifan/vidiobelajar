import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogin from '../NavLogin';
import Frame3 from '../../img/Frame 3.png';
import GoogleIcon from '../../img/logos_google-icon.png';
import axios from 'axios';

const Login = () => {
  const API_URL = "/api/users";
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.get(`${API_URL}/${email}`);
      if (response.status === 404) {
        throw new Error('User not found');
      }
      const userData = response.data;

      if (userData && userData.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        navigate('/');
      } else {
        setError('Email atau password salah');
      }
    } catch (error) {
      setError('User belum terdaftar');
    }
  };

  return (
    <>
      <NavLogin />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 sm:space-y-8 p-6 sm:p-8 bg-white rounded-lg shadow-md">
          <div className="flex justify-center">
            <Link to="/" className="block">
              <img
                className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300"
                src={Frame3}
                alt="videobelajar"
              />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">Masuk ke Akun</h2>
            <p className="text-sm sm:text-base text-center text-gray-600 mb-6 sm:mb-8">
              Yuk, lanjutin belajarmu di videobelajar
            </p>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm sm:text-base">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm sm:text-base focus:border-green-500 focus:outline-none focus:ring-green-500 transition-colors duration-300"
                  placeholder="user@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700">
                  Kata Sandi <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm sm:text-base focus:border-green-500 focus:outline-none focus:ring-green-500 transition-colors duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                <div className="text-right mt-1">
                  <Link to="/forgot-password" className="text-xs sm:text-sm text-gray-600 hover:text-green-500 transition-colors duration-300">
                    Lupa Password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
              >
                Masuk
              </button>

              <div className="text-center text-sm sm:text-base">
                <Link to="/register" className="text-green-500 hover:text-green-600 transition-colors duration-300">
                  Daftar
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm sm:text-base">
                  <span className="px-2 bg-white text-gray-500">atau</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm sm:text-base hover:bg-gray-50 transition-colors duration-300"
              >
                <img src={GoogleIcon} alt="Google" className="w-4 h-4 sm:w-5 sm:h-5" />
                Masuk dengan Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
