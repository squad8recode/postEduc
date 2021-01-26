import React from 'react'

import {Carousel, Container} from 'react-bootstrap'

import { Link } from 'react-router-dom'


export default class Caroussel extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      events:''
    }
  }

  componentDidMount(){
    
    fetch('http://52.67.245.155/php/carrousel.php')
    .then(res => res.json())
    .then(resJson => this.setState({'events':resJson}))
   
  }
  

  render(){
    
    return(
      <Container fluid className="my-3">
          <Carousel>
            {this.state.events && this.state.events.map(events => (
              
              <Carousel.Item key={events.id_evento}>
                <Link to={`/EventoEspecifico${events.id_evento}`}>
                  <img
                  
                  className="d-block w-100"
                  src={`http://52.67.245.155/php/img/${events.imagem}`}
                  alt="First slide"
                  height="500px"
                  />
                </Link>
                <Carousel.Caption>
                <h3>{events.nome_evento}</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
            
            ))}
          </Carousel>
        </Container>
    )
  }
}