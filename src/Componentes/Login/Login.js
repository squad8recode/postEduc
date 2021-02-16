import React from 'react';
import {Form,Button,Col}  from 'react-bootstrap';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NomeLogin, IdLogin } from '../../store/actions';
import Cadeado from '../../Img/icone_cadeado.png';
//import Pessoa from '../../Img/pessoa1.png';



import './login.css';

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            redirect: false,
            nome:'',
            id:'',
            nome_usuario:'',
            senha:''
        }

        this.Envio = this.Envio.bind(this)
        this.alteracao_user = this.alteracao_user.bind(this)
        this.alteracao_senha = this.alteracao_senha.bind(this)
    }

    alteracao_user(evento){
        evento.preventDefault()
        let valor = evento.target.value
        
        this.setState({
            'nome_usuario': valor
       })        
    };  

    alteracao_senha(evento){
        evento.preventDefault()
        let valor = evento.target.value
        
        this.setState({
            'senha': valor
       })  
    }

    async Envio(evento){
        evento.preventDefault()
    
        const url = "http://52.67.245.155/php/login.php"
        const dados = new FormData(evento.target)
        const cabecalho = {
            method: "POST", 
            body:dados,
        }    
        
        const resp = await fetch(url,cabecalho)
        const dadosbd = await resp.json()
        this.setState({ 
            'id':dadosbd[0].id_usuario,
            'nome':dadosbd[0].nome,
         })
        
         
        const { NomeLogin,IdLogin } = this.props
        
        // NomeLogin(this.state.nome)
        NomeLogin(this.state.nome)
        IdLogin(this.state.id)

        this.setState({'redirect': true})
    };

    render(){
        if(this.state.redirect){
            return <Redirect to="/" />
        }else{
            return(
                    <div className="login">
                        <img src={Cadeado} width="50" height="50" alt="login"/>
                        <Form onSubmit={this.Envio}>

                            <Col sm={12} md={{span: 6, offset: 3}} lg={{offset:4, span:4}}>
                            <Form.Group>
                                <Form.Label>Nome de usuário</Form.Label>
                                <Form.Control onChange={this.alteracao_user} type="text" id="nome_usuario" name="nome_usuario" placeholder="Digite seu nome de usuário" required/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Senha</Form.Label>
                                <Form.Control onChange={this.alteracao_senha} type="password" id="senha" name="senha" placeholder="Digite sua senha" required/>
                            </Form.Group>

                            <Button variant="primary" type="submit">Entrar</Button>

                            </Col>
                        </Form> 
                    </div>   
            )
    
        }
    }
};

const mapStateToProps = store => ({
    novoNome: store.NomeLogin.novoNome,
    novoId: store.IdLogin.novoId
})

const mapDispatchToProps = dispatch => bindActionCreators({NomeLogin,IdLogin}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
