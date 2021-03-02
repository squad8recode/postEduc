import React from 'react';

import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import '../css/cadastro.css';
import PoliticaPrivacidade from '../Componentes/Modal/PoliticaPrivacidade';

export default function CadastroUsuario() {
	const [form, setForm] = useState({
		nome: '',
		sobrenome: '',
		nascimento: '',
		genero: '',
		email: '',
		telefone: '',
		bairro: '',
		cidade: '',
		uf: '',
		escola: '',
		ano_letivo: '',
		tipo_escola: '',
		nome_usuario: '',
		senha: '',
	});
	const [nomeDisponivel, setNomeDisponivel] = useState(false)

	const [validated, setValidated] = useState(false);
	const field_required = { color: 'red' };
	const history = useHistory();
	
	const alteracao = (evento) => {
		setForm({
			...form,
			[evento.target.id]: evento.target.value,
		});
	};
	

	async function verificaNomeUsuario( event ){
		event.preventDefault()
		//nome_usuario
		const url = 'http://52.67.245.155/php/verificaNomeUsuario.php'
		const nomeUsuario = event.target.value
		const header = {
			method:'POST',
			body:JSON.stringify(nomeUsuario)
		}
		const resposta = await fetch(url, header)
		const resultado = await resposta.json()

		if(resultado.mensagem === 'nao existe'){
			setNomeDisponivel(true)
		}else{
			setNomeDisponivel(false)
			setTimeout(() => {alert('Nome de usuario indisponivel')},1500)
		}
	}


	const Envio = async (evento) => {
		evento.preventDefault()
		const forms = evento.currentTarget;
		
		if (forms.checkValidity() === false) {
			evento.preventDefault();
			evento.stopPropagation();
		}

		setValidated(true);

		if(nomeDisponivel){
			if (
				evento.target.nome.value.length > 0 &&
				evento.target.sobrenome.value.length > 0 &&
				evento.target.genero.value.length > 0 &&
				evento.target.nascimento.value.length > 0 &&
				evento.target.email.value.length > 0 &&
				evento.target.bairro.value.length > 0 &&
				evento.target.cidade.value.length > 0 &&
				evento.target.uf.value.length > 0 &&
				evento.target.nome_usuario.value.length > 0 &&
				evento.target.senha.value.length > 0 &&
				evento.target.confirmesenha.value.length > 0
			) {
				const senhaform = evento.target.senha.value;
				const confirmesenha = evento.target.confirmesenha.value;
	
				if (senhaform !== confirmesenha) {
					alert('Senha não coincide, por favor tentar novamente. ');
				} else {
					fetch('http://52.67.245.155/php/cadastrousuario.php', {
						method: 'POST',
						body: new FormData(evento.target),
					});
					alert('Cadastro realizado com sucesso!');
					history.push('/Login');
				}
			}
		}else{
			alert('Por favor escolha um novo nome de usuario')
		}
	};

	return (
		<div className="cadastro">       
				<h3>Olá! Faça aqui seu Cadastro</h3>
				<br />

				<Form noValidate validated={validated} onSubmit={Envio}>
					<Col sm={12} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
						<Form.Group>
							<Form.Label>
								Nome <span style={field_required}>*</span>
							</Form.Label>
							<Form.Control
								required
								onChange={alteracao}
								type='text'
								id='nome'
								name='nome'
								placeholder='Insira seu nome'
							/>
							<Form.Control.Feedback type='invalid'>
								Por favor preencha esse campo.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>
								Sobrenome <span style={field_required}>*</span>
							</Form.Label>
							<Form.Control
								required
								onChange={alteracao}
								type='text'
								id='sobrenome'
								name='sobrenome'
								placeholder='Insira seu sobrenome'
							/>
							<Form.Control.Feedback type='invalid'>
								Por favor preencha esse campo.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>
									Gênero <span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alteracao}
									as='select'
									id='genero'
									name='genero'
								>
									<option value='Masculino'>Masculino</option>
									<option value='Feminino'>Feminino</option>
									<option value='Outro'>Outro / não desejo informar</option>
								</Form.Control>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Label>
									Data de Nascimento <span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alteracao}
									type='date'
									id='nascimento'
									name='nascimento'
									placeholder='DD/MM/AAAA'
								/>
								<Form.Control.Feedback type='invalid'>
									Por favor preencha esse campo.
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Group>
							<Form.Label>
								Email <span style={field_required}>*</span>
							</Form.Label>
							<Form.Control
								required
								onChange={alteracao}
								type='email'
								id='email'
								name='email'
								placeholder='Insira seu Email'
							/>
							<Form.Control.Feedback type='invalid'>
								Por favor preencha esse campo.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>Celular</Form.Label>
							<Form.Control
								onChange={alteracao}
								type='text'
								id='telefone'
								name='telefone'
								placeholder='(XX) XXXXX-XXXX'
							/>
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>
									Bairro <span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alteracao}
									type='text'
									id='bairro'
									name='bairro'
									placeholder='Insira o seu bairro'
								/>
								<Form.Control.Feedback type='invalid'>
									Por favor preencha esse campo.
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>
									Cidade <span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alteracao}
									type='text'
									id='cidade'
									name='cidade'
									placeholder='Cidade'
								/>
								<Form.Control.Feedback type='invalid'>
									Por favor preencha esse campo.
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>
									Estado <span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alteracao}
									as='select'
									id='uf'
									name='uf'
								>
									<option value='AC'>Acre</option>
									<option value='AL'>Alagoas</option>
									<option value='AP'>Amapá</option>
									<option value='AM'>Amazonas</option>
									<option value='BA'>Bahia</option>
									<option value='CE'>Ceará</option>
									<option value='DF'>Distrito Federal</option>
									<option value='ES'>Espírito Santo</option>
									<option value='GO'>Goiás</option>
									<option value='MA'>Maranhão</option>
									<option value='MT'>Mato Grosso</option>
									<option value='MS'>Mato Grosso do Sul</option>
									<option value='MG'>Minas Gerais</option>
									<option value='PA'>Pará</option>
									<option value='PB'>Paraíba</option>
									<option value='PR'>Paraná</option>
									<option value='PE'>Pernambuco</option>
									<option value='PI'>Piauí</option>
									<option value='RJ'>Rio de Janeiro</option>
									<option value='RN'>Rio Grande do Norte</option>
									<option value='RS'>Rio Grande do Sul</option>
									<option value='RO'>Rondônia</option>
									<option value='RR'>Roraima</option>
									<option value='SC'>Santa Catarina</option>
									<option value='SP'>São Paulo</option>
									<option value='SE'>Sergipe</option>
									<option value='TO'>Tocantins</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Form.Group>
							<Form.Label>Estuda em qual escola?</Form.Label>
							<Form.Control
								onChange={alteracao}
								type='text'
								id='escola'
								name='escola'
								placeholder='Nome completo da escola'
							/>
						</Form.Group>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Está em qual ano/série?</Form.Label>
								<Form.Control
									onChange={alteracao}
									type='text'
									id='ano_letivo'
									name='ano_letivo'
									placeholder='série/ano/ciclo'
								/>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Sua escola é</Form.Label>
								<Form.Control
									onChange={alteracao}
									as='select'
									id='tipo_escola'
									name='tipo_escola'
								>
									<option value='Municipal'>Municipal</option>
									<option value='Estadual'>Estadual</option>
									<option value='Federal'>Federal</option>
									<option value='Privada'>Privada</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Form.Group>
							<Form.Label>
								Escolha um nome de usuário <span style={field_required}>*</span>
							</Form.Label>
							<Form.Control
								required
								onChange={ verificaNomeUsuario }
								type='text'
								id='nome_usuario'
								name='nome_usuario'
								placeholder='Um apelido para fazer login'
							/>
							<Form.Control.Feedback type='invalid'>
								Por favor preencha esse campo.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>
									Escolha uma senha <span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alteracao}
									type='password'
									id='senha'
									name='senha'
									placeholder='Sua senha de acesso'
								/>
								<Form.Control.Feedback type='invalid'>
									Por favor preencha esse campo.
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>
									Repita a senha cadastrada{' '}
									<span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alteracao}
									type='password'
									id='confirmesenha'
									name='confirmesenha'
									placeholder='Repetir senha fornecida'
								/>
								<Form.Control.Feedback type='invalid'>
									Por favor preencha esse campo.
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} xs='auto'>
								<Form.Check
									required
									type='checkbox'
									onChange={alteracao}
									id='polpriv'
									name='polpriv'
									label='Li e concordo com a Política de Privacidade do PostEduc. '
								/>

								<Form.Control.Feedback type='invalid'>
									Leia nossa Política de Privacidade.
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group as={Col} xs='auto'>
								<Button variant='secondary' size='sm'>
									<PoliticaPrivacidade />
								</Button>
							</Form.Group>
						</Form.Row>
						<Button variant='primary' type='submit' className='mb-5'>
							Cadastrar
						</Button>
					</Col>
				</Form>
			</div>
	);
}
