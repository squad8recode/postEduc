import React from 'react'
import Minievento from '../Componentes/eventos/minis/Minievento'
import { Container, Row, Badge, Col} from 'react-bootstrap'


export default class TodosEventos extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      eventos:[],
      filtrados:[]
    }

    this.filtro  = this.filtro.bind(this)
  }

  componentDidMount(){
    fetch(`http://52.67.245.155/php/selevento.php?`)
    .then( response => response.json())
    .then(responseJson => this.setState({'eventos': responseJson}));
  }


  filtro(evento){
    evento.preventDefault()
    let valor = evento.target.id
    let separados = []
    for(let i = 0 ; i < this.state.eventos.length ; i++){
      if(this.state.eventos[i].modalidade === valor){
        separados.push(this.state.eventos[i])
      }
    }
    this.setState({'filtrados':separados})
  }
  
  render(){
    
    const pills = {
      background: '#8650b3',
      paddingTop:5,
      paddingBottom:5,
      paddingLeft:15,
      paddingRight:15,
      color:'#fff',
      marginRight:20,
      cursor:'pointer',
      fontSize:'1rem',
    }
    return(
      <div>
       
        <Col className="mt-3 d-flex justify-content-center">
          <Badge pill style={pills} id='todos' onClick={this.filtro}>Todos</Badge>
          <Badge pill style={pills} id='online' onClick={this.filtro}>Online</Badge>
          <Badge pill style={pills} id='presencial' onClick={this.filtro}>Presencial</Badge>
          <Badge pill style={pills} id='semipresencial' onClick={this.filtro}>Semi-Presencial</Badge>
        </Col>
       
        <hr/>
        <Container fluid>
          <Row className="mx-5 my-4">
            {this.state.filtrados.length > 0 ? this.state.filtrados.map(even => (
              <Minievento  
                key={even.id_evento}
                id={even.id_evento}  
                imagem={even.imagem} 
                nome={even.nome_evento}
                modalidade = {even.modalidade}
              />
            )) : this.state.eventos.map(even => (
              <Minievento  
                key={even.id_evento}
                id={even.id_evento}  
                imagem={even.imagem} 
                nome={even.nome_evento}
                modalidade = {even.modalidade}
              />
            ))}
          </Row>
        </Container>
      </div>
      
    )
  }
}