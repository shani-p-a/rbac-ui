import React, { useState } from "react";
import { roles as initialRoles } from "../data/roles";
import ModalForm from "./ModalForm";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const RoleManagement = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [showModal, setShowModal] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const handleSave = () => {
    if (currentRole?.id) {
      setRoles((prev) =>
        prev.map((role) => (role.id === currentRole.id ? currentRole : role))
      );
    } else {
      setRoles((prev) => [...prev, { ...currentRole, id: Date.now() }]);
    }
    setShowModal(false);
    setCurrentRole(null);
  };

  return (
    <div className="container my-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Role Management</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="me-2" />
          Add Role
        </button>
      </div>

      {/* Role Table */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Role Name</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>{role.permissions.join(", ")}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      setCurrentRole(role);
                      setShowModal(true);
                    }}
                  >
                    <FaEdit className="me-1" /> Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      setRoles((prev) => prev.filter((r) => r.id !== role.id))
                    }
                  >
                    <FaTrash className="me-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      <ModalForm
        show={showModal}
        onClose={() => setShowModal(false)}
        title={currentRole ? "Edit Role" : "Add Role"}
        onSubmit={handleSave}
      >
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Role Name"
          value={currentRole?.name || ""}
          onChange={(e) =>
            setCurrentRole((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Permissions (comma separated)"
          value={currentRole?.permissions.join(", ") || ""}
          onChange={(e) =>
            setCurrentRole((prev) => ({
              ...prev,
              permissions: e.target.value.split(",").map((perm) => perm.trim()),
            }))
          }
        />
      </ModalForm>
    </div>
  );
};

export default RoleManagement;
