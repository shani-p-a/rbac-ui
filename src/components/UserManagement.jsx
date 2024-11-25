import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import ModalForm from "./ModalForm"; // Modal Form for Add/Edit User

const UserManagement = () => {
  const loadUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  const [users, setUsers] = useState(loadUsers);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Save users to localStorage
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleSave = () => {
    if (currentUser?.id) {
      setUsers((prev) =>
        prev.map((user) => (user.id === currentUser.id ? currentUser : user))
      );
    } else {
      setUsers((prev) => [...prev, { ...currentUser, id: Date.now() }]);
    }
    setShowModal(false);
    setCurrentUser(null);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-primary">User Management</h3>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <FaPlus /> Add User
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm mx-1"
                    onClick={() => {
                      setCurrentUser(user);
                      setShowModal(true);
                    }}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() =>
                      setUsers((prev) => prev.filter((u) => u.id !== user.id))
                    }
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalForm
        show={showModal}
        onClose={() => setShowModal(false)}
        title={currentUser ? "Edit User" : "Add User"}
        onSubmit={handleSave}
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter user name"
            value={currentUser?.name || ""}
            onChange={(e) =>
              setCurrentUser((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter user role"
            value={currentUser?.role || ""}
            onChange={(e) =>
              setCurrentUser((prev) => ({ ...prev, role: e.target.value }))
            }
          />
        </div>
      </ModalForm>
    </div>
  );
};

export default UserManagement;
