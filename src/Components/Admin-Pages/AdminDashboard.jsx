import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ViewRestaurant from './ViewRestaurant';
import Navbar from '../Navbar';
import AdminSidebar from './AdminSidebar';
import AdminStatistics from './adminStatistics';
import About from './About';
import RestaurantAgents from './RestaurantAgents';
import Users from './Users';
import CreateRestaurant from './CreateRestaurant';
import CreateDriver from './CreateDriver';

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />{' '}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />{' '}
        <div className="flex-1 p-4 pt-20 overflow-y-auto no-scrollbar">
          {' '}
          {/* Add no-scrollbar */}{' '}
          <Routes>
            <Route path="view-restaurants" element={<ViewRestaurant />} />{' '}
            <Route path="about" element={<About />} />{' '}
            <Route path="users" element={<Users />} />{' '}
            <Route path="restaurant-agents" element={<RestaurantAgents />} />{' '}
            <Route path="statistics" element={<AdminStatistics />} />{' '}
            <Route path="createDriver" element={<CreateDriver />} />{' '}
            <Route path="create-restaurant" element={<CreateRestaurant />} />{' '}
            <Route path="*" element={<Navigate to="view-restaurants" />} />{' '}
          </Routes>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default AdminDashboard;
