import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './assets/Login'; // Updated to correct casing
import Register from './assets/register.jsx';
import Home from './assets/home.jsx'; // Updated to correct casing
import SemuaProduk from './assets/SemuaProduk.jsx';
import DetailProduk from './assets/DetailProduk.jsx';
import MetodePembayaran from './assets/MetodePembayaran.jsx';
import UbahMetode from './assets/UbahMetode.jsx';
import Bayar from './assets/Bayar.jsx';
import Selesai from './assets/Selesai.jsx';
import Tertunda from './assets/Tertunda.jsx';
import Pesanan from './assets/Pesanan.jsx';
import Profil from './assets/Profil.jsx';
import Kelas from './assets/Kelas.jsx';
import Video from './assets/Video.jsx';
import Congrats from './assets/Congrats.jsx';
import Soal from './assets/Soal.jsx';
import Rules from './assets/rules.jsx';
import Tryagain from './assets/Tryagain.jsx';
import Sertifikat from './assets/Sertifikat.jsx';
import { Provider } from 'react-redux';
import store from './reducers/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/semua-produk" element={<SemuaProduk />} />
          <Route path="/detail-produk/:id" element={<DetailProduk />} />
          <Route path="/metode-pembayaran" element={<MetodePembayaran />} />
          <Route path="/ubah-metode" element={<UbahMetode />} />
          <Route path="/bayar" element={<Bayar />} />
          <Route path="/selesai" element={<Selesai />} />
          <Route path="/tertunda" element={<Tertunda />} />
          <Route path="/pesanan" element={<Pesanan />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/video" element={<Video />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<Home />} />
          <Route path="/soal" element={<Soal />} />
          <Route path="/Congrats" element={<Congrats />} />
          <Route path="/tryagain" element={<Tryagain />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
