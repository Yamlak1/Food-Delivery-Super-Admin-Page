import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ViewRestaurant from "../Components/ViewRestaurant";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import AdminSidebar from "../Components/AdminSidebar";
import Statistics from "./Statistics";
import About from "./About";
import UserReport from "./UserReport";
import RestaurantAgents from "./RestaurantAgents";
import ActiveUsers from "./ActiveUsers";

function AdminDashboard() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="view-restaurants" element={<ViewRestaurant />} />{" "}
            <Route path="dashboard" element={<Statistics />} />{" "}
            <Route path="about" element={<About />} />{" "}
            <Route path="user-report" element={<UserReport />} />{" "}
            <Route path="restaurant-agents" element={<RestaurantAgents />} />{" "}
            <Route path="active-users" element={<ActiveUsers />} />{" "}
            <Route path="*" element={<Navigate to="view-restaurants" />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
{
  /* <div className="flex h-screen">
                        <SuperAdminSidebar />
                        <div className="flex flex-col flex-1">
                          <Navbar />
                          <div className="flex-1 p-4">
                            <Routes>
                              <Route path="create-admin" element={<CreateAdmin />} />{" "}
                              <Route path="delete-admin" element={<DeleteAdmin />} />{" "}
                              <Route path="change-password-admin" element={<ChangePassword />} />{" "}
                              <Route path="view-restaurants" element={<ViewRestaurant />} />{" "}
                              <Route path="*" element={<Navigate to="create-admin" />} />{" "}
                            </Routes>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>; */
}

export default AdminDashboard;
