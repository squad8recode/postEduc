import React from 'react';

import Pop from '../Popover/PopoverEventoEspecifico'
import {Container, Col} from 'react-bootstrap'
export default class InfosEvento extends React.Component{

    render(){
        if(this.props.verificado === '0'){
            return(
                <Container>
                    <Col className="d-flex flex-row-reverse">
                        <Pop/>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                    <img src={`http://52.67.245.155/php/img/${this.props.imagem}`} alt='imagem' title='titulo' width="100%" height="400px"/>
                    </Col>
                    <br />
                    <h8>Postado dia: {this.props.data} às {this.props.hora}</h8>
                </Container>
            );

        }else{
            return(
                <Container>
                    <Col className="d-flex flex-row-reverse text-success ">
                        Verificado
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                    <img src={`http://52.67.245.155/php/img/${this.props.imagem}`} alt='imagem' title='titulo' width="100%" height="400px"/>
                    </Col>
                    <br />
                    <h8>Postado dia: {this.props.data} às {this.props.hora}</h8>
                </Container>
            );
        }
    }
}