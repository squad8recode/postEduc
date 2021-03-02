import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';


import { Form, Col, Button } from 'react-bootstrap';
import '../css/cadastro.css';
import '../css/login.css';

function EditarUsuario(props) {
	const [form, setForm] = useState({
		nome: '',
		sobrenome: '',
		genero: '',
		telefone: '',
		bairro: '',
		cidade: '',
		uf: '',
		escola: '',
		ano_letivo: '',
		tipo_escola: '',
		senha: '',
	});
	
	const [validated, setValidated] = useState(false);
	const [ verificado, setVerificado ] = useState(false)
	const field_required = { color: 'red' };
	const history = useHistory();
	const { novoId } = props;
	
	
	const alteracao = (evento) => {
		setForm({
			...form,
			[evento.target.id]: evento.target.value,
		});
	};
	
	const verificacao = async ( event ) => {
		event.preventDefault()
		const url = 'http://52.67.245.155/php/VerificaUsuario.php'
		const dados = {
			'id_usuario':novoId,
			'senha':event.target.senha.value
		}

		const header = {
			method:'POST',
			body:JSON.stringify(dados)
		}
			
		const resp = await fetch(url,header)
		const dadosbd = await resp.json();
		
		if (dadosbd.mensagem === 'erro') {
			alert('A senha não coincide');
		}else{
			setForm({
				...form,
				nome: dadosbd[0].nome,
				sobrenome: dadosbd[0].sobrenome,
				genero: dadosbd[0].genero,
				telefone: dadosbd[0].telefone,
				bairro: dadosbd[0].bairro,
				cidade: dadosbd[0].cidade,
				uf: dadosbd[0].uf,
				// escola: atob(dadosbd[0].escola),
				// ano_letivo: atob(dadosbd[0].ano_letivo),
				// tipo_escola: atob(dadosbd[0].tipo_escola),
				senha: dadosbd[0].senha,
			});
			setVerificado(true)

			// if(!dadosbd[0].escola && !dadosbd[0].ano_letivo && !dadosbd[0].tipo_escola){
			// 	setForm({
			// 		...form,
			// 		nome: dadosbd[0].nome,
			// 		sobrenome: dadosbd[0].sobrenome,
			// 		genero: dadosbd[0].genero,
			// 		telefone: dadosbd[0].telefone,
			// 		bairro: dadosbd[0].bairro,
			// 		cidade: dadosbd[0].cidade,
			// 		uf: dadosbd[0].uf,
			// 		senha: dadosbd[0].senha,
			// 	});
			// 	setVerificado(true)
			// }else if(!dadosbd[0].escola && !dadosbd[0].ano_letivo ){
			// 	setForm({
			// 		...form,
			// 		nome: dadosbd[0].nome,
			// 		sobrenome: dadosbd[0].sobrenome,
			// 		genero: dadosbd[0].genero,
			// 		telefone: dadosbd[0].telefone,
			// 		bairro: dadosbd[0].bairro,
			// 		cidade: dadosbd[0].cidade,
			// 		uf: dadosbd[0].uf,
			// 		tipo_escola: atob(dadosbd[0].tipo_escola),
			// 		senha: dadosbd[0].senha,
			// 	});
			// 	setVerificado(true)
			// }else if (!dadosbd[0].escola){
			// 	setForm({
			// 		...form,
			// 		nome: dadosbd[0].nome,
			// 		sobrenome: dadosbd[0].sobrenome,
			// 		genero: dadosbd[0].genero,
			// 		telefone: dadosbd[0].telefone,
			// 		bairro: dadosbd[0].bairro,
			// 		cidade: dadosbd[0].cidade,
			// 		uf: dadosbd[0].uf,
			// 		ano_letivo: atob(dadosbd[0].ano_letivo),
			// 		tipo_escola: atob(dadosbd[0].tipo_escola),
			// 		senha: dadosbd[0].senha,
			// 	});
			// 	setVerificado(true)
			// }else if(!dadosbd[0].ano_letivo){
			// 	setForm({
			// 		...form,
			// 		nome: dadosbd[0].nome,
			// 		sobrenome: dadosbd[0].sobrenome,
			// 		genero: dadosbd[0].genero,
			// 		telefone: dadosbd[0].telefone,
			// 		bairro: dadosbd[0].bairro,
			// 		cidade: dadosbd[0].cidade,
			// 		uf: dadosbd[0].uf,
			// 		escola: atob(dadosbd[0].escola),
			// 		tipo_escola: atob(dadosbd[0].tipo_escola),
			// 		senha: dadosbd[0].senha,
			// 	});
			// 	setVerificado(true)
			// }else if(!dadosbd[0].tipo_escola){
			// 	setForm({
			// 		...form,
			// 		nome: dadosbd[0].nome,
			// 		sobrenome: dadosbd[0].sobrenome,
			// 		genero: dadosbd[0].genero,
			// 		telefone: dadosbd[0].telefone,
			// 		bairro: dadosbd[0].bairro,
			// 		cidade: dadosbd[0].cidade,
			// 		uf: dadosbd[0].uf,
			// 		escola: atob(dadosbd[0].escola),
			// 		ano_letivo: atob(dadosbd[0].ano_letivo),
			// 		senha: dadosbd[0].senha,
			// 	});
			// 	setVerificado(true)
			// }else if(!dadosbd[0].escola && !dadosbd[0].tipo_escola){
			// 	setForm({
			// 		...form,
			// 		nome: dadosbd[0].nome,
			// 		sobrenome: dadosbd[0].sobrenome,
			// 		genero: dadosbd[0].genero,
			// 		telefone: dadosbd[0].telefone,
			// 		bairro: dadosbd[0].bairro,
			// 		cidade: dadosbd[0].cidade,
			// 		uf: dadosbd[0].uf,
			// 		ano_letivo: atob(dadosbd[0].ano_letivo),
			// 		senha: dadosbd[0].senha,
			// 	});
			// 	setVerificado(true)
			// }else if(!dadosbd[0].ano_letivo && !dadosbd[0].tipo_escola){
			// 	setForm({
			// 		...form,
			// 		nome: dadosbd[0].nome,
			// 		sobrenome: dadosbd[0].sobrenome,
			// 		genero: dadosbd[0].genero,
			// 		telefone: dadosbd[0].telefone,
			// 		bairro: dadosbd[0].bairro,
			// 		cidade: dadosbd[0].cidade,
			// 		uf: dadosbd[0].uf,
			// 		escola: atob(dadosbd[0].escola),
			// 		senha: dadosbd[0].senha,
			// 	});
			// 	setVerificado(true)
			// }else{
			// 	setForm({
			// 		...form,
			// 		nome: dadosbd[0].nome,
			// 		sobrenome: dadosbd[0].sobrenome,
			// 		genero: dadosbd[0].genero,
			// 		telefone: dadosbd[0].telefone,
			// 		bairro: dadosbd[0].bairro,
			// 		cidade: dadosbd[0].cidade,
			// 		uf: dadosbd[0].uf,
			// 		escola: atob(dadosbd[0].escola),
			// 		ano_letivo: atob(dadosbd[0].ano_letivo),
			// 		tipo_escola: atob(dadosbd[0].tipo_escola),
			// 		senha: dadosbd[0].senha,
			// 	});
			// 	setVerificado(true)
			// }
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

		if (
			evento.target.nome.value.length > 0 &&
			evento.target.sobrenome.value.length > 0 &&
			evento.target.genero.value.length > 0 &&
			evento.target.bairro.value.length > 0 &&
			evento.target.cidade.value.length > 0 &&
			evento.target.uf.value.length > 0 &&
			evento.target.senha.value.length > 0 &&
			evento.target.confirmesenha.value.length > 0
		) {
			const senhaform = evento.target.senha.value;
			const confirmesenha = evento.target.confirmesenha.value;

			if (senhaform !== confirmesenha) {
				alert('Senha não coincide, por favor tentar novamente. ');
			} else {
				fetch('http://52.67.245.155/php/EditarUsuario.php', {
					method: 'POST',
					body: new FormData(evento.target),
				});
				alert('Cadastro atualizado com sucesso!');
				history.push('/');
			}
		}
	};

	const alterapadrao = async (event) => {
		event.preventDefault();

		let padrao = event.target.value;
		let nome = event.target.name;

		switch (nome) {
			case 'nome':
				setForm({ ...form,nome: padrao });
				break;
			case 'sobrenome':
				setForm({ ...form,sobrenome: padrao });
				break;
			case 'telefone':
				setForm({ ...form,telefone: padrao });
				break;
			case 'bairro':
				setForm({ ...form,bairro: padrao });
				break;
			case 'cidade':
				setForm({ ...form,cidade: padrao });
				break;
			case 'escola':
				setForm({ ...form,escola: padrao });
				break;
			case 'ano_letivo':
				setForm({ ...form,ano_letivo: padrao });
				break;
			default:
				console.log('')
		}
	}


	if(!verificado){
		return(
			<div className='loginContainer'>
				<div className='login'>
					<Form onSubmit={verificacao}>
						<Col
							sm={12}
							md={{ span: 6, offset: 3 }}
							lg={{ offset: 4, span: 4 }}
						>
							<Form.Group>
								<Form.Label>Confirme sua Senha</Form.Label>
								<Form.Control
									type='password'
									id='senha'
									name='senha'
									placeholder='Digite sua senha'
									required
								/>
							</Form.Group>
	
							<Button variant='primary' type='submit'>
								Ok!
							</Button>
						</Col>
					</Form>
				</div>
			</div>
		)
	}else{
		return (
			<div className="cadastro"> 
				<h3>Atualize seu cadastro</h3> 
				<br/>     
					<Form noValidate validated={validated} onSubmit={Envio}>
						<input name='id_usuario' type='hidden' defaultValue={novoId}/>
						<Col sm={12} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>
									Nome <span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alterapadrao}
									type='text'
									id='nome'
									name='nome'
									placeholder='Insira seu nome'
									value={ form.nome }
								/>
								<Form.Control.Feedback type='invalid'>
									Por favor preencha esse campo.
								</Form.Control.Feedback>
							</Form.Group>
	
							<Form.Group as={Col}>
								<Form.Label>
									Sobrenome <span style={field_required}>*</span>
								</Form.Label>
								<Form.Control
									required
									onChange={alterapadrao}
									type='text'
									id='sobrenome'
									name='sobrenome'
									placeholder='Insira seu sobrenome'
									value={ form.sobrenome }
								/>
								<Form.Control.Feedback type='invalid'>
									Por favor preencha esse campo.
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
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
									<Form.Label>Celular</Form.Label>
									<Form.Control
										onChange={alterapadrao}
										type='text'
										id='telefone'
										name='telefone'
										placeholder='(XX) XXXXX-XXXX'
										value={ form.telefone }
									/>
								</Form.Group>
							</Form.Row>
	
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>
										Bairro <span style={field_required}>*</span>
									</Form.Label>
									<Form.Control
										required
										onChange={alterapadrao}
										type='text'
										id='bairro'
										name='bairro'
										placeholder='Insira o seu bairro'
										value={ form.bairro }
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
										onChange={alterapadrao}
										type='text'
										id='cidade'
										name='cidade'
										placeholder='Cidade'
										value={ form.cidade }
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
									onChange={alterapadrao}
									type='text'
									id='escola'
									name='escola'
									placeholder='Nome completo da escola'
									value={ form.escola }
								/>
							</Form.Group>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Está em qual ano/série?</Form.Label>
									<Form.Control
										onChange={alterapadrao}
										type='text'
										id='ano_letivo'
										name='ano_letivo'
										placeholder='série/ano/ciclo'
										value={ form.ano_letivo }
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
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>
										Digite uma nova senha <span style={field_required}>*</span>
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
										Repita a senha cadastrada
										<span style={field_required}> *</span>
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
							<Button variant='primary' type='submit' className='mb-4'>
								Atualizar
							</Button>
						</Col>
					</Form>
				</div>
		);
	}
}
const mapState = (store) => ({
	novoId: store.IdLogin.novoId,
});


export default connect(mapState)(EditarUsuario)