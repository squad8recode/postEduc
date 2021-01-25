import React from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Denuncia from '../Modal/Denuncia';


class Detalhes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            criador:this.props.criador
        }
    }

    render(){
        const { novoId } = this.props

        if(this.state.criador === novoId){
            return (
                <div>                
                <h2>{this.props.nome}</h2>
                <p className="pt-5">Local: {this.props.logradouro},{this.props.numero},{this.props.bairro}</p>
                <p className="pt-5">{this.props.complemento},{this.props.cidade},{this.props.estado}</p>

                <p>Quando: {this.props.data} - {this.props.hora_evento}</p>
                <p>Duração: {this.props.carga_horaria}</p>
                <Button variant="outline-info" as={Link} to={`/EditarEvento${this.props.id}`} >Editar</Button>
                {/*<Denuncia id={this.props.id}/> */}
                <br></br>
                </div>
                )
        }
        return(
            <div>                
            <h2>{this.props.nome}</h2>
            <p className="pt-5">Local: {this.props.logradouro},{this.props.numero},{this.props.bairro}</p>
            <p className="pt-5">{this.props.complemento},{this.props.cidade},{this.props.estado}</p>

            <p>Quando: {this.props.data} - {this.props.hora_evento}</p>
            <p>Duração: {this.props.carga_horaria}</p>
            {/*<Denuncia id={this.props.id}/>*/}
            <br></br>
            </div>
        )
    }

}  

const mapState = store =>({
    novoId: store.IdLogin.novoId
})

export default connect(mapState)(Detalhes)
