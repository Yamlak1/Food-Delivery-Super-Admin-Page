import React, { useState } from 'react';
import axios from 'axios';
import { handleGetUser } from '../../services/userServices'; // Make sure the path is correct
import { handleCreateRestaurant } from '../../services/restaurantServices'; // Make sure the path is correct

function CreateRestaurant() {
  const [name, setName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const getCookie = (name) => {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    if (match) return match[2];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Fetch user ID using fullName
      console.log('Full Name:', fullName);
      console.log('image: ', image);
      const userId = await handleGetUser(fullName, setMessage);
      if (!userId) {
        setMessage('User not found or error occurred.');
        setLoading(false);
        return;
      }

      // Get admin ID from cookies
      const adminId = getCookie('id');
      console.log('Admin id: ', adminId);

      // Create formData for image upload
      const formData = new FormData();
      formData.append('name', name);
      formData.append('streetName', streetName);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('phone', phone);
      formData.append('url', url);
      formData.append('imagefile', image); // Update key to 'imagefile'
      formData.append('description', description);
      formData.append('password', password);
      formData.append('userId', userId);
      formData.append('adminId', adminId);

      try {
        const response = await axios.post(
          'http://localhost:7000/admin/createRestaurant',
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
      }

      setMessage('Restaurant created successfully!');
    } catch (error) {
      setMessage('Failed to create restaurant: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {' '}
          Create Restaurant{' '}
        </h2>{' '}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Restaurant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Street Name"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Representative Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          <input
            type="text"
            placeholder="Representative Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {loading ? 'Creating...' : 'Create Restaurant'}{' '}
          </button>{' '}
          {message && (
            <p className="mt-4 text-center text-red-500"> {message} </p>
          )}{' '}
        </form>{' '}
      </div>{' '}
    </div>
  );
}

export default CreateRestaurant;
