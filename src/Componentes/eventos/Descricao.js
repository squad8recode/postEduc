import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import '../eventos/descricao.css'

export default class Descricao extends React.Component{

    render(){
        return(
            <Tabs defaultActiveKey="home" >
                <Tab eventKey="home" title="Descrição" style={{color:'black'}}>    
                    <p>{this.props.descricao}</p>
                </Tab>
                <Tab eventKey="Organizadores" title="Organizadores" style={{color:'black'}}>
                    <p>{this.props.organizadores} - {this.props.telefone}</p>
                </Tab>
            </Tabs>

           
        );
    }
}


