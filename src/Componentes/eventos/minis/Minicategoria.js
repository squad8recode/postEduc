import React from 'react'

import {Card, Row, Col, Button} from 'react-bootstrap'

import '../../../css/index.css'

export default class Minicategoria extends React.Component{
  render(){
    return(
      <Card className="card hei my-2">
        <Card.Img variant="top" src={require(`../../../fotos/${this.props.imagem}`).default} width="250" height="160" />
        <Row>
          <Card.Body as={Row}>
            <Card.Title as={Col}>{this.props.categoria}</Card.Title>
            <Card.Link href="#" className="ini">
              <Button variant="primary" size="sm">+ Info</Button>
            </Card.Link>
          </Card.Body>
        </Row>
      </Card>
    )
  }
}