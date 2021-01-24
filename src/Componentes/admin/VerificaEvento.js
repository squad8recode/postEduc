import React from 'react'
import Averificar from './Averificar'
import {Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import NaoTemPermissao from '../Modal/naoTemPermissao'

 class VerificaEvento extends React.Component{
  constructor(props){
    super(props)

    this.state = {

      eventos:[],

    }

  }

  componentDidMount(){
    fetch('http://52.67.245.155/php/verifica.php')
    .then(resposta => resposta.json())
    .then(resposta => this.setState({'eventos':resposta}))
  }

  render(){
    const { novoNome } = this.props
    if( novoNome !== 'admin'){
      return <NaoTemPermissao/>
    }else{
      return(
        <Row>
          
            {this.state.eventos && this.state.eventos.map(item => (
              <Col>
                <Averificar
                  key={item.id_evento}
                  id={item.id_evento}
                  nome_evento = {item.nome_evento}
                  data_postagem = {item.data_postagem}
                /> 
              </Col>
            ))}
          
        </Row>
      )
    }
  }
}

const mapState = store =>({
  novoNome: store.NomeLogin.novoNome
})


export default connect(mapState)(VerificaEvento)