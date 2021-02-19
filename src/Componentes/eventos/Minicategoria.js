import React from 'react'

import {Card, Row, Col, Button} from 'react-bootstrap'

import foto from '../../fotos/ideia.jpg'

import '../../css/index.css'

export default class Minicategoria extends React.Component{
  render(){
    return(
      <Card className="card h my-2">
        <Card.Img variant="top" src={foto} width="250" height="160" />
        <Row>
          <Card.Body as={Row}>
            <Card.Title as={Col}>Categoria</Card.Title>
            <Card.Link href="#" className="ini">
              <Button variant="primary" size="sm">+ Info</Button>
            </Card.Link>
          </Card.Body>
        </Row>
      </Card>
    )
  }
}