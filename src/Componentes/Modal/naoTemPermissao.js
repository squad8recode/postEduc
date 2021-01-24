import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NaoTemPermissao() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Você não Possui acesso a essa área!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Volte a home</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" as={Link} to="/">
              Home
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }