import React from 'react';
import Pop from '../Popover/PopoverEventoEspecifico'

export default class InfosEvento extends React.Component{

    render(){
        if(this.props.verificado === '0'){
            return(
                <div>
    
                     <h6>Postado dia: {this.props.data} às {this.props.hora}</h6><Pop/>
                    <img src={`http://52.67.245.155/php/img/${this.props.imagem}`} alt='imagem' title='titulo' width="600px" height="400px"/>
    
                </div>
            );

        }    else{
            return(
                <div>

                    <b>Verificado</b><br/>
                    <img src={`http://52.67.245.155/php/img/${this.props.imagem}`} alt='imagem' title='titulo' width="600px" height="400px"/>

                </div>
            );
        }
    }
}