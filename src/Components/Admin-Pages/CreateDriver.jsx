import React, { useState } from 'react';
import { createDriver } from '../../services/adminServices'; // Adjust the path to where your service file is located

function CreateDriver() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    // Validate phone, email, and password
    if (!validatePhone(phone)) {
      setMessage(
        "Invalid phone number. Must be 10 digits and start with '09'."
      );
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Invalid email. Only Gmail, Yahoo, and Outlook are allowed.');
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setMessage(
        'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.'
      );
      setLoading(false);
      return;
    }

    const driverData = {
      fullName,
      phone,
      email,
      password,
    };

    try {
      const newDriver = await createDriver(driverData);
      setMessage('Driver created successfully!');
    } catch (error) {
      setMessage('Failed to create driver: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Create Delivery Driver
        </h2>
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
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {loading ? 'Creating...' : 'Create Driver'}
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateDriver;
