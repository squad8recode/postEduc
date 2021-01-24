import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NaoPossuiEvento() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Voce ainda não possui eventos cadastrados</Modal.Title>
          </Modal.Header>
          <Modal.Body>Quer cadastrar um?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" as={Link} to="/CadastroEvento">
              Cadastre um evento
            </Button>
            <Button variant="secondary" as={Link} to="/">
              Home
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }