import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import Logo from '../../Img/novologo.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NomeLogin, IdLogin } from '../../store/actions';

import './menu.css';

class Menu extends React.Component {
	constructor() {
		super();

		this.sair = this.sair.bind(this);
	}

	sair() {
		const { NomeLogin } = this.props;
		const { IdLogin } = this.props;
		NomeLogin('');
		IdLogin('');
	}

	render() {
		const { novoNome, novoId } = this.props;

		return (
			<Navbar className='menu' expand='lg' variant='dark'>
				<Navbar.Brand>
					<Link to='/'>
						<img
							src={Logo}
							width='70'
							height='50'
							className='d-inline-block align-top'
							alt='PostEduc logo'
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Item>
							<Nav.Link as={Link} to='/TodosEventos'>
								Todos os Eventos
							</Nav.Link>
						</Nav.Item>
						{novoNome && (
							<>
								<Nav.Item>
									<Nav.Link as={Link} to='/EventosUser'>
										Seus Eventos
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link as={Link} to='/CadastroEvento'>
										+ Criar Evento
									</Nav.Link>
								</Nav.Item>
							</>
						)}

						{ novoId === '11' && (
							<>
								<Nav.Item>
									<Nav.Link as={Link} to='/Denuncias'>
										Verificar denuncias
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link as={Link} to='/VerificaEvento'>
										Autorizar eventos
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link as={Link} to='/VerificaSugestao'>
										Verificar Sugestões
									</Nav.Link>
								</Nav.Item>
							</>
						)}
					</Nav>

					<Nav className='ml-auto'>
						{novoNome ? (
							<>
							
								<Nav.Item>
									<Nav.Link as={Link} to='/EditarCadastro' className='separadorMenu'>
										Editar Cadastro
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link onClick={this.sair} as={Link} to='/' className='mr-3'>
										Sair
									</Nav.Link>
								</Nav.Item>
							</>
						) : (
							<>
								<Nav.Item>
									<Nav.Link as={Link} to='/Login' className='separadorMenu'>
										Entrar
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link as={Link} to='/CadastroUsuario' className='mr-3'>
										Cadastrar-se
									</Nav.Link>
								</Nav.Item>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

const mapear = (store) => ({
	novoNome: store.NomeLogin.novoNome,
	novoId: store.IdLogin.novoId,
});

const propss = (dispatch) =>
	bindActionCreators({ NomeLogin, IdLogin }, dispatch);
export default connect(mapear, propss)(Menu);
