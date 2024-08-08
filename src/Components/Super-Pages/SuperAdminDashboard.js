import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateAdminForm from "../../Components/Super-Pages/CreateAdmin";
import DeleteAdmin from "../../Components/Super-Pages/DeleteAdmin";
import SuperSidebar from "../../Components/Super-Pages/SuperSidebar";
import ChangePassword from "../../Components/Super-Pages/ChangePassword";
import Navbar from "../Navbar";
import SuperAbout from "../Super-Pages/SuperAbout";
import SuperStatistics from "../Super-Pages/SuperStatistics";
import AdminInfo from "./AdminInfo";

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
      />{" "}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />{" "}
        <div className="flex-1 p-4 pt-20 overflow-y-auto no-scrollbar">
          <Routes>
            <Route path="/create-admin" element={<CreateAdminForm />} />{" "}
            <Route path="delete-admin" element={<DeleteAdmin />} />{" "}
            <Route path="about-super" element={<SuperAbout />} />{" "}
            <Route path="emp-info" element={<AdminInfo />} />{" "}
            <Route path="change-password-admin" element={<ChangePassword />} />{" "}
            <Route path="*" element={<Navigate to="about-super" />} />{" "}
            <Route path="statistics" element={<SuperStatistics />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default SuperAdminDashboard;
