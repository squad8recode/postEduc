import React from 'react'
import {Link} from 'react-router-dom'

import { Card, Button, Col, Row } from 'react-bootstrap'

import './minievento.css'

export default class Minievento extends React.Component{
  render(){
    const css = {
      overflow:'auto',
      overflowX:'hidden'
    }
    return(
      <div className='col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center' >
        <Card className="card h my-2 mr-3 ml-3" style={css}>
        <Card.Title  >{this.props.modalidade}</Card.Title>
          <Card.Img variant="top" src={`https://servidorposteduc.ddns.net/img/${this.props.imagem}`} width="250" height="160" />
            <Row>
              <Card.Body as={Row}>
                <Card.Title as={Col}>{this.props.nome}</Card.Title>
                <Card.Link as={Link} to={{pathname:`/EventoEspecifico${this.props.id}`}} className="ini">
                  <Button variant="primary" size="sm">+ Info</Button></Card.Link>
              </Card.Body>
            </Row>
        </Card> 
      </div>
    )
  }
}