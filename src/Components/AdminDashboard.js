import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ViewRestaurant from "../Components/ViewRestaurant";
import Navbar from "../Components/Navbar";
import AdminSidebar from "../Components/AdminSidebar";
import AdminStatistics from "./adminStatistics";
import About from "./About";
import UserReport from "./UserReport";
import RestaurantAgents from "./RestaurantAgents";
import Users from "./Users";

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />{" "}
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />{" "}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="view-restaurants" element={<ViewRestaurant />} />{" "}
            <Route path="about" element={<About />} />{" "}
            <Route path="user-report" element={<UserReport />} />{" "}
            <Route path="users" element={<Users />} />{" "}
            <Route path="restaurant-agents" element={<RestaurantAgents />} />{" "}
            <Route path="*" element={<Navigate to="view-restaurants" />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default AdminDashboard;
