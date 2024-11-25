import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import ModalForm from "./ModalForm";

const PermissionManagement = () => {
  // Load permissions from localStorage or default to an empty array
  const loadPermissions = () => {
    const permissions = localStorage.getItem('permissions');
    return permissions ? JSON.parse(permissions) : [];
  };

  const [permissions, setPermissions] = useState(loadPermissions);
  const [showModal, setShowModal] = useState(false);
  const [currentPermission, setCurrentPermission] = useState(null);

  // Save permissions to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }, [permissions]);

  const handleSave = () => {
    if (currentPermission?.id) {
      // If it's an existing permission, update it
      setPermissions((prev) =>
        prev.map((permission) =>
          permission.id === currentPermission.id ? currentPermission : permission
        )
      );
    } else {
      // If it's a new permission, add it
      setPermissions((prev) => [
        ...prev,
        { ...currentPermission, id: Date.now() },
      ]);
    }
    setShowModal(false);
    setCurrentPermission(null);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-primary">Permission Management</h3>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <FaPlus /> Add Permission
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          
       
          <thead className="table-dark">
            <tr>
              <th>Permission Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.id}>
                <td>{permission.name}</td>
                <td>{permission.description}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm mx-1"
                    onClick={() => {
                      setCurrentPermission(permission);
                      setShowModal(true);
                    }}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() =>
                      setPermissions((prev) => prev.filter((p) => p.id !== permission.id))
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
        title={currentPermission ? "Edit Permission" : "Add Permission"}
        onSubmit={handleSave}
      >
        <div className="form-group">
          <label>Permission Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter permission name"
            value={currentPermission?.name || ""}
            onChange={(e) =>
              setCurrentPermission((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
            value={currentPermission?.description || ""}
            onChange={(e) =>
              setCurrentPermission((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>
      </ModalForm>
    </div>
  );
};

export default PermissionManagement;
