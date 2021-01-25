import React from 'react'
import {Link} from 'react-router-dom'

import { Card, Button, Col, Row } from 'react-bootstrap'

export default class Minievento extends React.Component{
  render(){
    return(
      <>
        <Card className="card h my-2">
          <Card.Img variant="top" src={`http://52.67.245.155/php/img/${this.props.imagem}`} width="250" height="160" />
            <Row>
              <Card.Body as={Row}>
                <Card.Title as={Col}>{this.props.nome}</Card.Title>
                <Card.Link as={Link} to={{pathname:`/EventoEspecifico${this.props.id}`}} className="ini">
                  <Button variant="success" size="sm">+ Info</Button></Card.Link>
              </Card.Body>
            </Row>
        </Card>
        
      </>
    )
  }
}