import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Welcome to the Certificate Retrieval System</h1>
      <div className="flex justify-center space-x-4">
        {!isAuthenticated ? (
          <>
            <Link to="/register" className="bg-green-500 text-white p-2 rounded">Register</Link>
            <Link to="/login" className="bg-yellow-500 text-white p-2 rounded">Login</Link>
          </>
        ) : (
          <Link to="/" className="bg-gray-500 text-white p-2 rounded">Home</Link>
        )}
      </div>
    </div>
  );
};

export default Home;
