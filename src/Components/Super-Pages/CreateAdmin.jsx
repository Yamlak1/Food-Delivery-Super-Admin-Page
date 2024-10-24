import React, { useState } from 'react';
import axios from 'axios';

export default function CreateAdminForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validatePhone = (phone) => {
    const phoneRegex = /^09\d{8}$/; // 10 digits and starts with "09"
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!validatePhone(phone)) {
      setMessage('Invalid phone number. Must be 10 digits and start with 09.');
      return;
    }

    if (!validatePassword(password)) {
      setMessage(
        'Password must be at least 8 characters long, with uppercase, lowercase, a number, and a special character.'
      );
      return;
    }

    if (!validateEmail(email)) {
      setMessage(
        'Invalid email. Only Gmail, Outlook, and Yahoo are allowed, and it must end with .com.'
      );
      return;
    }

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    if (profilePic) {
      formData.append('image', profilePic);
    }

    try {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:7000/superAdmin/createAdmin',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage('Admin created successfully!');
    } catch (error) {
      setMessage('Failed to create admin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Create Admin</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {loading ? 'Creating...' : 'Create Admin'}
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
