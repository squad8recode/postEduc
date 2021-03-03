import React from 'react';

import Pop from '../../Popover/PopoverEventoEspecifico';
import { Container, Col, Button, Row } from 'react-bootstrap';

import './infosevento.css'
import Facebook from '../../../Img/icone_face.png'
import Insta from '../../../Img/icone_insta.png'
import Whats from '../../../Img/icone_whats.png'

export default class InfosEvento extends React.Component {
	render() {
        return (
            <Container className='text-center'>
                { this.props.verificado === '0' ? (
                    <Col className='d-flex flex-row-reverse'>
                        <Pop />
                    </Col>
                ) : (
                    <Col className='d-flex flex-row-reverse text-success mt-2 mb-2'>
                        Evento verificado
                    </Col>
                ) }
                
                <Col xs={12} sm={12} md={12} lg={12} >
                    <img
                        src={`https://servidorposteduc.ddns.net/img/${this.props.imagem}`}
                        alt='imagem'
                        title='titulo'
                        width='100%'
                        className='foto'
                    />
                </Col>
                <p className='mt-3'>
                    Postado dia: {this.props.data} às {this.props.hora}
                </p>

                <Container >
                    <Row className="justify-content-center align-items-center">
                    <h6>Compartilhar: </h6>
                    <Button variant="white" className="float-right" >
                        <img src={Facebook} alt='Facebook'/>
                    </Button>
                    <Button variant="white" className="float-right" >
                        <img src={Insta} alt='Instagram'/>
                    </Button>
                    <Button variant="white" className="float-right" >
                        <img src={Whats} alt='Whatsapp'/>
                    </Button>
                    </Row> 
                </Container>
            </Container>
        );		
	}
}
