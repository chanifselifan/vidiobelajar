import { useState } from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './assets/login.jsx';
import Register from './assets/Register.jsx';
import Home from './assets/home.jsx';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
