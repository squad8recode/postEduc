import React from 'react'
import {Link} from 'react-router-dom'

import { Card, Button, Col, Row } from 'react-bootstrap'

export default class Minievento extends React.Component{
  render(){

    const css = {
      overflow:'auto'
    }

    return(
      <>
        <Card className="h my-2 mr-3 ml-3" style={css} >
          <Card.Title  >{this.props.modalidade}</Card.Title>
          <Card.Img variant="top" src={`http://18.228.15.53/php/img/${this.props.imagem}`} width="250" height="160"  />
            <Row className="mt-2">
              <Col md={8}>
                <Card.Title as={Col}  >{this.props.nome}</Card.Title>
              </Col>
              <Col md={3}>
                <Card.Link as={Link} to={{pathname:`/EventoEspecifico${this.props.id}`}} >
                  <Button variant="success" size="sm">+ Info</Button></Card.Link>
              </Col>
            </Row>
        </Card>
        
      </>
    )
  }
}