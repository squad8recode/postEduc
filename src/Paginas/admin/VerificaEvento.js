import React from 'react'
import { connect } from 'react-redux';

import NaoTemPermissao from '../../Componentes/Modal/naoTemPermissao'
import Averificar from '../../Componentes/admin/aprovar/Averificar'

import {Container, Col,Row} from 'react-bootstrap'

class VerificaEvento extends React.Component{
  constructor(props){
    super(props)

    this.state = {

      eventos:[],

    }

  }

  componentDidMount(){
    fetch('https://servidorposteduc.ddns.net/verifica.php')
    .then(resposta => resposta.json())
    .then(resposta => this.setState({'eventos':resposta}))
  }

  render(){
    const { novoId } = this.props
    
    if( novoId !== '11'){
      return <NaoTemPermissao/>
    }else{
      return(
        <Container>
          <Row>
            {this.state.eventos && this.state.eventos.map(item => (
              <Col key={item.id_evento}>
                <Averificar
                  id={item.id_evento}
                  nome_evento = {item.nome_evento}
                  data_postagem = {item.data_postagem}
                  imagem  = {item.imagem}
                  modalidade = {item.modalidade}
                /> 
              </Col>
            ))}
          </Row>
        </Container>
      )
    }
  }
}

const mapState = store =>({
  novoId: store.IdLogin.novoId,
})


export default connect(mapState)(VerificaEvento)