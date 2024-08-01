import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateAdmin from "../Components/CreateAdmin";
import DeleteAdmin from "../Components/DeleteAdmin";
import SuperAdminSidebar from "../Components/SuperAdminSidebar";
import ChangePassword from "../Components/ChangePassword";
import ViewRestaurant from "../Components/ViewRestaurant";
import Navbar from "./Navbar";

function SuperAdminDashboard() {
  return (
    <div className="flex h-screen">
      <SuperAdminSidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="create-admin" element={<CreateAdmin />} />{" "}
            <Route path="delete-admin" element={<DeleteAdmin />} />{" "}
            <Route path="change-password-admin" element={<ChangePassword />} />{" "}
            <Route path="view-restaurants" element={<ViewRestaurant />} />{" "}
            <Route
              path="/superDashboard"
              element={<Navigate to="create-admin" />}
            />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default SuperAdminDashboard;
