import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import LoginModal from './components/LoginModal';
// import RegisterModal from './components/RegisterModal';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        {/* Admin Panel Route (only accessible after admin login) */}
        <Route path="/admin/upload" element={<AdminPanel />} />
        {/* Login Page Route */}
        <Route path="/login" element={<LoginModal />} />
        {/* Register Page Route */}
        {/* <Route path="/register" element={<RegisterModal />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
