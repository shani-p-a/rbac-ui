import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} to="/">
      RBAC System
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/users">User Management</Nav.Link>
      <Nav.Link as={Link} to="/roles">Role Management</Nav.Link>
      <Nav.Link as={Link} to="/permissions">Permission Management</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
