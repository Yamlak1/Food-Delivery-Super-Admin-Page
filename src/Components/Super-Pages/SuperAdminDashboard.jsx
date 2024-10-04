import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreateAdminForm from './CreateAdmin';
import DeleteAdmin from './DeleteAdmin';
import SuperSidebar from './SuperSidebar';
import ChangePassword from './ChangePassword';
import Navbar from '../Navbar';
import Reports from './Reports';
import SuperStatistics from './SuperStatistics';
import AdminInfo from './AdminInfo';
import Popup from './PopupPage';

function SuperAdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <SuperSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />{' '}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />{' '}
        <div className="flex-1 p-4 pt-20 overflow-y-auto no-scrollbar">
          <Routes>
            <Route path="/create-admin" element={<CreateAdminForm />} />{' '}
            <Route path="/reports" element={<Reports />} />{' '}
            <Route path="delete-admin" element={<DeleteAdmin />} />{' '}
            <Route path="/top-up/:employeeId" element={<Popup />} />{' '}
            <Route path="emp-info" element={<AdminInfo />} />{' '}
            <Route path="change-password-admin" element={<ChangePassword />} />{' '}
            <Route path="*" element={<Navigate to="statistics" />} />{' '}
            <Route path="statistics" element={<SuperStatistics />} />{' '}
          </Routes>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}

export default SuperAdminDashboard;
