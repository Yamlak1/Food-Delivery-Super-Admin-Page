import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreateAdmin from "./Components/CreateAdmin";
import DeleteAdmin from "./Components/DeleteAdmin";
import Sidebar from "./Components/Sidebar";
import ChangePassword from "./Components/ChangePassword";
import ViewRestaurant from "./Components/ViewRestaurant";
import Statistics from "./Components/Statistics";

function App() {
  return (
    <Router>
      <div className="App flex">
        <Sidebar />
        <div className="content flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/create-admin" />} />{" "}
            <Route path="/create-admin" element={<CreateAdmin />} />{" "}
            <Route path="/delete-admin" element={<DeleteAdmin />} />{" "}
            <Route path="/change-password-admin" element={<ChangePassword />} />{" "}
            <Route path="/view-restaurants" element={<ViewRestaurant />} />{" "}
            <Route path="/view-statistics" element={<Statistics />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
