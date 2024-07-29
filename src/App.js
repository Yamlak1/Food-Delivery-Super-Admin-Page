import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboard";
import SuperDashboard from "./Components/SuperAdminDashboard";
import Login from "./Components/Login";
import CreateAdmin from "./Components/CreateAdmin";
import DeleteAdmin from "./Components/DeleteAdmin";
import ChangePassword from "./Components/ChangePassword";
import ViewRestaurant from "./Components/ViewRestaurant";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />{" "}
            <Route path="/login" element={<Login />} />{" "}
            <Route path="/adminDashboard/*" element={<AdminDashboard />} />{" "}
            <Route path="/superDashboard/*" element={<SuperDashboard />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
