import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateAdminForm from "../../Components/Super-Pages/CreateAdmin";
import DeleteAdmin from "../../Components/Super-Pages/DeleteAdmin";
import SuperSidebar from "../../Components/Super-Pages/SuperSidebar";
import ChangePassword from "../../Components/Super-Pages/ChangePassword";
import Navbar from "../Navbar";
import SuperAbout from "../Super-Pages/SuperAbout";
import SuperStatistics from "../Super-Pages/SuperStatistics";

function SuperAdminDashboard() {
  return (
    <div className="flex h-screen">
      <SuperSidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/create-admin" element={<CreateAdminForm />} />{" "}
            <Route path="delete-admin" element={<DeleteAdmin />} />{" "}
            <Route path="about-super" element={<SuperAbout />} />{" "}
            <Route path="change-password-admin" element={<ChangePassword />} />{" "}
            <Route
              path="/superDashboard"
              element={<Navigate to="about-super" />}
            />{" "}
            <Route path="statistics-super" element={<SuperStatistics />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default SuperAdminDashboard;
