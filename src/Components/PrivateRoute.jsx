import React from 'react';
import { Navigate } from 'react-router-dom';

// Utility functionto get cookies
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

const PrivateRoute = ({ children }) => {
  const userType = getCookie('user_type');

  // Check if the user type exists in cookies (indicating login)
  return userType ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
