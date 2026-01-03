import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login';
import Booking from './pages/Booking';
import History from './pages/History';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/booking/:id" element={<MainLayout><Booking /></MainLayout>} />
        <Route path="/history" element={<MainLayout><History /></MainLayout>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
