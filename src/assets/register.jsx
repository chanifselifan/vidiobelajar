import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogin from '../NavLogin';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    jenisKelamin: '',
    noHp: '',
    password: '',
    konfirmasiPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showKonfirmasiPassword, setShowKonfirmasiPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validasi
    if (!formData.namaLengkap || !formData.email || !formData.password || !formData.konfirmasiPassword) {
      setError('Semua field harus diisi');
      return;
    }

    if (formData.password !== formData.konfirmasiPassword) {
      setError('Password tidak cocok');
      return;
    }

    try {
      // Simpan data user ke Firestore
      const docRef = await addDoc(collection(db, "users"), {
        namaLengkap: formData.namaLengkap,
        email: formData.email,
        jenisKelamin: formData.jenisKelamin,
        noHp: formData.noHp
      });

      // Simpan data user ke localStorage
      localStorage.setItem('userData', JSON.stringify(formData));
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userId', docRef.id);

      // Redirect ke home
      navigate('/');
    } catch (err) {
      setError('Terjadi kesalahan saat mendaftar');
    }
  };

  return (
    <>
      <NavLogin />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-orange-500">videobelajar</h1>
          </div>

          {/* Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-2">Pendaftaran Akun</h2>
            <p className="text-center text-gray-600 mb-8">
              Yuk, daftarkan akunmu sekarang juga!
            </p>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                  required
                />
              </div>

              {/* Jenis Kelamin */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Jenis Kelamin <span className="text-red-500">*</span>
                </label>
                <select
                  name="jenisKelamin"
                  value={formData.jenisKelamin}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                  required
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Wanita">Wanita</option>
                  <option value="Pria">Pria</option>
                </select>
              </div>

              {/* No. HP */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  No. Hp <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <select className="mt-1 block w-24 rounded-l-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500">
                    <option value="+62">+62</option>
                  </select>
                  <input
                    type="tel"
                    name="noHp"
                    value={formData.noHp}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-r-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Kata Sandi <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              {/* Konfirmasi Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Konfirmasi Kata Sandi <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showKonfirmasiPassword ? "text" : "password"}
                    name="konfirmasiPassword"
                    value={formData.konfirmasiPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowKonfirmasiPassword(!showKonfirmasiPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showKonfirmasiPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              {/* Register  */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Daftar
              </button>

              {/* Login  */}
              <div className="text-center">
                <Link
                  to="/login"
                  className="text-green-500 hover:text-green-600"
                >
                  Masuk
                </Link>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">atau</span>
                </div>
              </div>

              {/* Google Register */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50"
              >
                <img
                  src="./img/logos_google-icon.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                Daftar dengan Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
