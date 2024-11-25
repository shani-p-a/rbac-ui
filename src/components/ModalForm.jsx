import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalForm = ({ show, onClose, title, children, onSubmit }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>{children}</Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>Cancel</Button>
      <Button variant="primary" onClick={onSubmit}>Save</Button>
    </Modal.Footer>
  </Modal>
);

export default ModalForm;
