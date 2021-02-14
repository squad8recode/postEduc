import React from 'react';
import {Link} from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap';

import Logo from '../../Img/logo.png';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { NomeLogin, IdLogin} from '../../store/actions';


import './menu.css';

class Menu extends React.Component{
    constructor(){
        super()

        this.sair = this.sair.bind(this)
    }

    sair(){
        const { NomeLogin } = this.props
        const { IdLogin } = this.props
        NomeLogin('')
        IdLogin('')

        
    }

     render(){
         const { novoNome } = this.props

         if(!novoNome){
            return(
                <Navbar className="menu" expand="lg" variant="dark">
                    <Navbar.Brand >
                        <Link to="/"><img src={Logo} width="50" height="50" className="d-inline-block align-top" 
                        alt="PostEduc logo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/TodosEventos">Todos os Eventos</Nav.Link> 
                            </Nav.Item>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Item>
                                {/*as={Link} href="" to=""*/}
                                <Nav.Link as={Link} to="/Login">Entrar</Nav.Link> 
                            </Nav.Item>
                            
                            <Nav.Item>
                                {/*as={Link} href="" to=""*/}
                                <Nav.Link>|</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/CadastroUsuario">Cadastrar-se</Nav.Link> 
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        }else if(novoNome !== 'admin'){
            return(
                <Navbar className="menu" expand="lg" variant="dark">
                    <Navbar.Brand >
                        <Link to="/"><img src={Logo} width="30" height="30" className="d-inline-block align-top" 
                        alt="PostEduc logo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item>
                                {/*as={Link} href="" to=""*/}
                                <Nav.Link as={Link} to="/CadastroEvento">+ Criar Evento</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/TodosEventos">Todos os Eventos</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/EventosUser">Seus Eventos</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link > Bem vindo { novoNome }</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                        <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link onClick={this.sair} as={Link} to="/">Sair</Nav.Link>
                        </Nav.Item>
                            
                            <Nav.Item>
                                {/*as={Link} href="" to=""*/}
                                <Nav.Link>|</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/CadastroUsuario">Cadastrar-se</Nav.Link> 
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        }else if (novoNome === 'admin'){
            return(
                <Navbar className="menu" expand="lg" variant="dark">
                    <Navbar.Brand >
                        <Link to="/"><img src={Logo} width="50" height="50" className="d-inline-block align-top" 
                        alt="PostEduc logo" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item>
                                {/*as={Link} href="" to=""*/}
                                <Nav.Link as={Link} to="/CadastroEvento">+ Criar Evento</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/TodosEventos">Todos os Eventos</Nav.Link> 
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link as={Link} to="/Denuncias">Verificar denuncias</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/VerificaEvento">Autorizar eventos</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/EventosUser">Seus Eventos</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/VerificaSugestao">Verificar Sugestões</Nav.Link> 
                            </Nav.Item>
                        </Nav>
                        
                        <Nav className="ml-auto">
                        
                        <Nav.Item>
                            <Nav.Link onClick={this.sair} as={Link} to="/">Sair</Nav.Link>
                        </Nav.Item>
                            
                            <Nav.Item>
                                {/*as={Link} href="" to=""*/}
                                <Nav.Link>|</Nav.Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/CadastroUsuario">Cadastrar-se</Nav.Link> 
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }
}

const mapear = store => ({ 
    novoNome: store.NomeLogin.novoNome,
    novoId: store.IdLogin.novoId
    
})

const propss = dispatch => bindActionCreators({NomeLogin,IdLogin},dispatch)
export default connect(mapear,propss)(Menu);