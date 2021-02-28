import React from 'react';

import Pop from '../../Popover/PopoverEventoEspecifico';
import { Container, Col } from 'react-bootstrap';

import './infosevento.css'

export default class InfosEvento extends React.Component {
	render() {
        return (
            <Container>
                { this.props.verificado === '0' ? (
                    <Col className='d-flex flex-row-reverse'>
                        <Pop />
                    </Col>
                ) : (
                    <Col className='d-flex flex-row-reverse text-success mt-2 mb-2'>
                        Evento verificado
                    </Col>
                ) }
                <Col xs={12} sm={12} md={12} lg={12}>
                    <img
                        src={`http://52.67.245.155/php/img/${this.props.imagem}`}
                        alt='imagem'
                        title='titulo'
                        width='100%'
                        className='foto'
                    />
                </Col>
                <br />
                <h6>
                    Postado dia: {this.props.data} às {this.props.hora}
                </h6>
            </Container>
        );		
	}
}
