import React from 'react'
import {Link} from 'react-router-dom' 
import {Form, Button, Row} from 'react-bootstrap'

export default class Denuncia extends React.Component{
  constructor(props){
    super(props)

    this.Deletar = this.Deletar.bind(this)
  }

  async Deletar(event){
    event.preventDefault()

    const url = 'http://18.228.15.53/php/deletar.php'
    const dados = new FormData(event.target)

    const cabecalho = {
      method:'POST',
      body:dados,
    }

    await fetch(url,cabecalho)
    window.location.reload();
  }
  
  render(){
    return(
      <div className='cartao mt-5 mb-5'>
        <p>Denuncia n°{this.props.id}</p>
        <p>data denuncia: {this.props.data}</p>
        
        <p>Id denunciante: {this.props.id_pessoa}</p>
        
        <p>Id evento denunciado: {this.props.id_evento}</p>
        
        <p>Nome denunciante: {this.props.nome_pessoa} <Link to={{pathname:`${this.props.id_pessoa}`}}>(clique para informaçoes do usuario)</Link></p>
        
        <p>Nome evento denunciado: {this.props.nome_evento} <Link to={{pathname:`${this.props.id_evento}`}}>(clique para verificar o evento)</Link></p>
        
        <p>Tipo de denuncia: {this.props.tipo_denuncia}</p>
        
        <p>Denuncia: {this.props.denuncia}</p>
        <Row className="justify-content-md-center mb-2">

          <Form onSubmit={this.Deletar} className="mr-3" >
            <Form.Control type="hidden" name="id_evento" defaultValue={this.props.id_evento}/>
            <Button variant="danger" type="submit" >Deletar evento</Button>
          </Form >

          <Form>
            <Form.Control type="hidden" defaultValue={this.props.id_evento}/>
            <Button variant="warning" as={Link} to={`/EventoEspecifico${this.props.id_evento}`} >Olhar evento</Button>
          </Form>
        </Row>
      </div>
    )
  }

}

