import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";
import './App.css';


const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/users" element={<UserManagement />} />
      <Route path="/roles" element={<RoleManagement />} />
      <Route path="/permissions" element={<PermissionManagement />} />
    </Routes>
  </Router>
);

export default App;
