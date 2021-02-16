import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import Denuncia from '../Modal/Denuncia'
import '../eventos/descricao.css'

export default class Descricao extends React.Component{

    render(){
        return(
            <Tabs defaultActiveKey="home" >
                <Tab eventKey="home" title="Descrição" style={{color:'black'}}>    
                    <pre className='mt-3'>{this.props.descricao}</pre>
                </Tab>
                <Tab eventKey="Organizadores" title="Organizadores" style={{color:'black'}}>
                    <pre className='mt-3'>Organizadores: {this.props.organizadores}</pre> 
                    <pre>Telefone: {this.props.telefone}</pre>
                </Tab>
                <Tab eventKey="Denuncica" title="..." className='mb-3' style={{color:'black'}}>
                    <p> </p>
                    <Denuncia  id={this.props.id}/>
                </Tab>
            </Tabs>

           
        );
    }
}


