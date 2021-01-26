import React from 'react'
import Minievento from './Minievento'
import { Container, Row} from 'react-bootstrap'


export default class TodosEventos extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      eventos:[]
    }
  }

  componentDidMount(){
    fetch(`http://18.228.15.53/php/selevento.php?`)
    .then( response => response.json())
    .then(responseJson => this.setState({'eventos': responseJson}));
  }

  render(){
    return(
      
      <Container fluid>
        <Row className="mx-5">
          {this.state.eventos && this.state.eventos.map(even => (
            
              <Minievento  
                key={even.id_evento}
                id={even.id_evento}  
                imagem={even.imagem} 
                nome={even.nome_evento}
              />
            
          ))}
        </Row>
      </Container>
    )
  }
}