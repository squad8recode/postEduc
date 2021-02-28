import React, { Component } from 'react';
import {Tab, Row, Col, Nav, Badge} from 'react-bootstrap';
import Minievento from './minis/Minievento';
import './categorias.css';

export default class Categorias extends Component {

  render() {
    return (
        <Tab.Container id="categorias" defaultActiveKey="first" className="flex">
            <br />
        <Row className="categorias">
            <br />
            <br />
            <Nav>
            <Col>
                <Badge pill>
                    <Nav.Item>
                    <Nav.Link eventKey="vestibular">Vestibular</Nav.Link>
                    </Nav.Item>
                </Badge>
            </Col>

            <Col>
                <Badge pill>
                    <Nav.Item>
                        <Nav.Link eventKey="matematica">Matemática</Nav.Link>
                    </Nav.Item>
                </Badge>
            </Col>

            <Col>    
                <Badge pill>
                    <Nav.Item>
                        <Nav.Link eventKey="ciencias">Ciências</Nav.Link>
                    </Nav.Item>
                </Badge>
            </Col>

            <Col>
                <Badge pill>
                    <Nav.Item>
                        <Nav.Link eventKey="tecnologia">Tecnologia</Nav.Link>
                    </Nav.Item>
                </Badge>
            </Col>
            
            </Nav>
        </Row>

        <Row className="flex">  
            <Tab.Content>
                <h3>Pesquisa por categoria</h3>
                <Tab.Pane eventKey="vestibular"><h5 className="pesquisaCategoria">Vestibular:</h5>
                    <Minievento />
                </Tab.Pane>

                <Tab.Pane eventKey="matematica"><h5 className="pesquisaCategoria">Matemática:</h5>
                    <Minievento />
                </Tab.Pane>

                <Tab.Pane eventKey="ciencias"><h5 className="pesquisaCategoria">Ciências:</h5>
                    <Minievento />
                </Tab.Pane>

                <Tab.Pane eventKey="tecnologia"><h5 className="pesquisaCategoria">Tecnologia:</h5>
                    <Minievento />
                </Tab.Pane>
            </Tab.Content>
        </Row>

      </Tab.Container>
    );
  }
}