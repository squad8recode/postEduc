import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Deletar(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.fecharModal(false)
  }

  const delets = async (event) => {
    event.preventDefault()
    const url = 'http://52.67.245.155/php/deletar.php'
    const dados = new FormData(event.target)

    const cabecalho = {
      method:'POST',
      body:dados,
    }

    await fetch(url,cabecalho)
    alert('Evento deletado!')
    handleClose()
    props.redirecionamento(true)
  }

  return (
    <>
      <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Tem certeza que quer deletar esse evento? </Modal.Title>
        </Modal.Header>
        <div className='d-flex align-itens-center justify-content-center'>
          <form onSubmit={ delets }>  
            <input type='hidden' name='id_evento' defaultValue={ props.id } />
            <Button variant="danger mt-3 mb-3" type='submit'>
              Sim!
            </Button>
          </form>
          <Button variant="success mt-3 mb-3 ml-5" onClick={ handleClose } >
              Não
          </Button>
        </div>
      </Modal>
    </>
  );
}