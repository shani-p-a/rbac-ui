import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaUsers, FaKey } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container text-center">
        <h1>Welcome to the RBAC System</h1>
        <p>
          This is a Role-Based Access Control (RBAC) system where users are granted
          access based on their roles and permissions. You can manage users, assign roles,
          and define permissions to control access to different parts of the system.
        </p>
        
        <div className="features">
          <div className="feature">
            <FaShieldAlt size={50} />
            <h3>Role Management</h3>
            <p>Assign and manage roles for different users.</p>
          </div>
          <div className="feature">
            <FaUsers size={50} />
            <h3>User Management</h3>
            <p>Manage users, their roles, and permissions.</p>
          </div>
          <div className="feature">
            <FaKey size={50} />
            <h3>Permission Management</h3>
            <p>Set permissions for each role to control access.</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default HomePage;
