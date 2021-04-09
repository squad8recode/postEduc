import React from 'react'
import { Form, Button, Row, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Averificar extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      redirect:false
    }

    this.darCertificacao = this.darCertificacao.bind(this)
    
  }
  
  async darCertificacao(event){
    event.preventDefault()
    const url = "https://sarcastic-punch.000webhostapp.com/php/verificado.php"
    const dados = new FormData(event.target)
    const cabecalho = {
      method:"POST",
      body:dados
    }
    const resposta = await fetch(url,cabecalho)
    await resposta
    window.location.reload();
  }

  render(){
    const css = {
      width: '18rem', height:'20rem', overflow:'auto'
    }
    return(
      <Card className="mt-5 mb-5" style={css}>
        <Card.Body>
          <Card.Title>{this.props.modalidade}</Card.Title>
            <Card.Img variant="top" src={`https://sarcastic-punch.000webhostapp.com/php/img/${this.props.imagem}`} height="100px"/>
            <Card.Title className="mt-2"> {this.props.nome_evento}</Card.Title>
              <p>postado em: {this.props.data_postagem}</p>
            <Row className="mt-2">
              <Form onSubmit={this.darCertificacao} className="mr-3">
                <Form.Control type="hidden" name="id" defaultValue={this.props.id}/>
                <Button variant="success" type="submit">Aprovar</Button>
              </Form>
                <Button variant="warning" as={Link} to={`EventoEspecifico${this.props.id}`}>Ver detalhes</Button>
            </Row>
        </Card.Body>
      </Card>
    )
  } 
}
