import React, { useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [certificateId, setCertificateId] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/search/${certificateId}`);
      setStudent(response.data);
      setError('');
    } catch (err) {
      setStudent(null);
      setError('Certificate not found');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {student && (
        <div className="card bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-2">Certificate Details</h2>
          <p><strong>Certificate ID:</strong> {student.certificateId}</p>
          <p><strong>Student Name:</strong> {student.studentName}</p>
          <p><strong>Internship Domain:</strong> {student.internshipDomain}</p>
          <p><strong>Start Date:</strong> {new Date(student.startDate).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(student.endDate).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
