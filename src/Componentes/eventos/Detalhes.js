import React from 'react'
import { connect } from 'react-redux';
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Detalhes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            criador:this.props.criador
        }
    }

    render(){
        const { novoId } = this.props

        const css = {'text-decoration': 'underline',color:'rgb(114, 8, 114)'}

        if(this.state.criador === novoId && this.props.modalidade === 'semipresencial'){
            return (
                <div>                
                    <h2>{this.props.nome}</h2>
                    <p className="pt-4">Modalidade: {this.props.modalidade}</p>
                    <p className="pt-1">Cidade:{this.props.cidade} | Estado:{this.props.estado} | Bairro {this.props.bairro}</p>
                    <p className="pt-1">Local: {this.props.logradouro}, {this.props.numero}, {this.props.complemento}</p>
                    <p>Quando: {this.props.data} - {this.props.hora}</p>
                    <p>Duração: {this.props.carga} horas</p>
                    <p>Link do evento: <a href={this.props.link} target="_blank" rel="noreferrer" style={css}>aqui</a> </p>

                    <Row>
                        <Button variant="outline-info" as={Link} to={`/EditarEvento${this.props.id}`} >Editar</Button>
                        <Button className="ml-5"> Participar </Button>
                    </Row>
                </div>
                )
        }else if(this.state.criador === novoId && this.props.modalidade === 'presencial'){
            
            return (
                <div>                
                    <h2>{this.props.nome}</h2>
                    <p className="pt-4">Modalidade: {this.props.modalidade}</p>
                    <p className="pt-1">Cidade:{this.props.cidade} | Estado:{this.props.estado} | Bairro {this.props.bairro}</p>
                    <p className="pt-1">Local: {this.props.logradouro}, {this.props.numero}, {this.props.complemento}</p>
                    <p>Quando: {this.props.data} - {this.props.hora}</p>
                    <p>Duração: {this.props.carga} horas</p>
                    <Row>
                        <Button variant="outline-info" as={Link} to={`/EditarEvento${this.props.id}`} >Editar</Button>
                        <Button className="ml-5"> Participar </Button>
                    </Row>
                </div>
            )
        }else if(this.state.criador === novoId && this.props.modalidade === 'online'){
            return (
                <div>                
                    <h2>{this.props.nome}</h2>
                    <p className="pt-4">Modalidade: {this.props.modalidade}</p>
                    <p>Quando: {this.props.data} - {this.props.hora}</p>
                    <p>Duração: {this.props.carga} horas</p>
                    <p>Link do evento: <a href={this.props.link} target="_blank" rel="noreferrer" style={css}>aqui</a> </p>

                    <Row>
                        <Button variant="outline-info" as={Link} to={`/EditarEvento${this.props.id}`} >Editar</Button>
                        <Button className="ml-5"> Participar </Button>
                    </Row>
                </div>
            )
        }else if (this.state.criador !== novoId && this.props.modalidade === 'semipresencial'){
            return (
                <div>                
                    <h2>{this.props.nome}</h2>
                    <p className="pt-4">Modalidade: {this.props.modalidade}</p>
                    <p className="pt-1">Cidade:{this.props.cidade} | Estado:{this.props.estado} | Bairro {this.props.bairro}</p>
                    <p className="pt-1">Local: {this.props.logradouro}, {this.props.numero}, {this.props.complemento}</p>
                    <p>Quando: {this.props.data} - {this.props.hora}</p>
                    <p>Duração: {this.props.carga} horas</p>
                    <p>Link do evento: <a href={this.props.link} target="_blank" rel="noreferrer" style={css}>aqui</a> </p>


                    <Button className="ml-5"> Participar </Button>
                </div>
                )

        }else if(this.state.criador !== novoId && this.props.modalidade === 'presencial'){
            return (
                <div>                
                    <h2>{this.props.nome}</h2>
                    <p className="pt-4">Modalidade: {this.props.modalidade}</p>
                    <p className="pt-1">Cidade:{this.props.cidade} | Estado:{this.props.estado} | Bairro {this.props.bairro}</p>
                    <p className="pt-1">Local: {this.props.logradouro}, {this.props.numero}, {this.props.complemento}</p>
                    <p>Quando: {this.props.data} - {this.props.hora}</p>
                    <p>Duração: {this.props.carga} horas</p>
                    
                    <Button className="ml-5"> Participar </Button>
                </div>
            )

        }else if(this.state.criador !== novoId && this.props.modalidade === 'online'){
            return (
                <div>                
                    <h2>{this.props.nome}</h2>
                    <p className="pt-4">Modalidade: {this.props.modalidade}</p>
                    <p>Quando: {this.props.data} - {this.props.hora}</p>
                    <p>Duração: {this.props.carga} horas</p>
                    <p>Link do evento: <a href={this.props.link} target="_blank" rel="noreferrer" style={css}>aqui</a> </p>

                    <Button className="ml-5"> Participar </Button>
                </div>
            )
        }
        

         
    }

}  

const mapState = store =>({
    novoId: store.IdLogin.novoId
})

export default connect(mapState)(Detalhes)
