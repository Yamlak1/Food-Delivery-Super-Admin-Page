import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AdminDashboard from './Components/Admin-Pages/AdminDashboard';
import SuperDashboard from './Components/Super-Pages/SuperAdminDashboard';
import Login from './Components/Admin-Pages/Login';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
        <div className="content flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />{' '}
            <Route path="/login" element={<Login />} />{' '}
            <Route
              path="/adminDashboard/*"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />{' '}
            <Route
              path="/superDashboard/*"
              element={
                <PrivateRoute>
                  <SuperDashboard />
                </PrivateRoute>
              }
            />{' '}
          </Routes>{' '}
        </div>{' '}
      </div>{' '}
    </Router>
  );
}

export default App;
