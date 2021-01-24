import React from 'react'
import Minievento from './Minievento'

import {Container,Col} from 'react-bootstrap'
import '../../css/index.css'

export default class TodosEventos extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      eventos:[]
    }
  }

  componentDidMount(){
    fetch(`http://52.67.245.155/php/selevento.php?`)
    .then( response => response.json())
    .then(responseJson => this.setState({'eventos': responseJson}));
  }

  render(){
    return(
      <Container fluid>
        <div className="flex bet margin fwrap">
          {this.state.eventos && this.state.eventos.map(even => (
            <Col key={even.id_evento}>
              <Minievento 
                
                id={even.id_evento}  
                imagem={even.imagem} 
                nome={even.nome_evento}
              />
            </Col>
            
            
          ))}
        </div>
      </Container>
    )
  }
}