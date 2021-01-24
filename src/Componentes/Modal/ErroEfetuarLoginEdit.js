import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function ErroEfetuarLoginEdit() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Efetuar o login</Modal.Title>
          </Modal.Header>
          <Modal.Body>É necessário efetuar o Login para Editar seus eventos</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" as={Link} to="/Login">
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }