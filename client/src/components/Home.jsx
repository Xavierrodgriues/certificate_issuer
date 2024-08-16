import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Welcome to the Certificate Retrieval System</h1>
      <div className="flex justify-center space-x-4">
        <a href="/login" className="bg-blue-500 text-white p-2 rounded">Admin Login</a>
        <a href="/register" className="bg-green-500 text-white p-2 rounded">Register</a>
        <a href="/login" className="bg-yellow-500 text-white p-2 rounded">User Login</a>
      </div>
    </div>
  );
};

export default Home;
