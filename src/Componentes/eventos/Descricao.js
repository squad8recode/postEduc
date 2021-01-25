import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import Denuncia from '../Modal/Denuncia'
import '../eventos/descricao.css'

export default class Descricao extends React.Component{

    render(){
        return(
            <Tabs defaultActiveKey="home" >
                <Tab eventKey="home" title="Descrição" style={{color:'black'}}>    
                    <p>{this.props.descricao}</p>
                </Tab>
                <Tab eventKey="Organizadores" title="Organizadores" style={{color:'black'}}>
                    <p>Organizadores: {this.props.organizadores}</p> 
                    <p>Telefone: {this.props.telefone}</p>
                </Tab>
                <Tab eventKey="Denuncica" title="..." style={{color:'black'}}>
                    <Denuncia id={this.props.id}/>
                </Tab>
            </Tabs>

           
        );
    }
}


