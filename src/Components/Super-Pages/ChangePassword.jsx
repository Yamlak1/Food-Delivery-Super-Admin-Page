import React, { useState } from 'react';
import { handleChangePassword } from '../../services/adminServices';

export default function ChangePasswordofAdmin() {
  const [fullName, setFullName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Manage loading state

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when the form is submitted
    setMessage(''); // Clear previous message

    try {
      // Call the service and await its completion
      await handleChangePassword(fullName, newPassword, setMessage);
    } finally {
      setLoading(false); // Stop loading after the request is complete (whether successful or not)
    }

    setFullName(''); // Reset fullName input
    setNewPassword(''); // Reset password input
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Change Admin Password
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            disabled={loading} // Disable the button when loading
            className={`w-full p-2 ${
              loading
                ? 'bg-gray-500 cursor-not-allowed' // Gray out the button and prevent interactions
                : 'bg-neutral-900 hover:bg-neutral-600'
            } text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}>
            {loading ? 'Changing...' : 'Change Password'}
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
