import React from 'react';

import { Form, Container, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class Presencial extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cep: '',
			redirect: false,
			valor: 'imagem',
			validate: false,
			categoria:[]

		};

		this.enviarEvento = this.enviarEvento.bind(this);
		this.buscaCep = this.buscaCep.bind(this);
		this.mudaimagem = this.mudaimagem.bind(this);
	}

	mudaimagem(event) {
		event.preventDefault();
		this.setState({
			valor: 'Imagem carregada',
		});
	}

	async enviarEvento(event) {
		event.preventDefault();
		const forms = event.currentTarget;
		if (forms.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		this.setState({ validate: true });

		if (
			event.target.nome_evento.value.length > 0 &&
			event.target.organizadores.value.length > 0 &&
			event.target.data_evento.value.length > 0 &&
			event.target.cep.value.length > 0 &&
			event.target.estado.value.length > 0 &&
			event.target.logradouro.value.length > 0 &&
			event.target.cidade.value.length > 0 &&
			event.target.num.value.length > 0 &&
			event.target.bairro.value.length > 0 &&
			event.target.comple.value.length > 0 &&
			event.target.descricao.value.length > 0
		) {
			const url = 'http://52.67.245.155/php/cadaseven.php';
			const dados = new FormData(event.target);
			const cabecalho = {
				method: 'POST',
				body: dados,
			};
			const resposta = await fetch(url, cabecalho);
			await resposta;

			alert('Evento Cadastrado agora é só aguardar nossa Avaliação.')

			this.setState({
				redirect: true,
			});
		}
	}

	async buscaCep(event) {
		event.preventDefault();
		let ceps = event.target.value;

		if (ceps.length === 8) {
			await fetch(`https://viacep.com.br/ws/${ceps}/json/`)
				.then((resposta) => resposta.json())
				.then((resposta) => this.setState({ cep: resposta }));
		}
	}

	async componentDidMount (){
		const url = 'http://52.67.245.155/php/TodasCategorias.php'
		const resposta = await fetch(url)
		const resultado = await resposta.json()
		this.setState({categoria:resultado})
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to='/' />;
		} else {
      const field_required = { color: 'red' };

			const { novoId } = this.props;

			let now = new Date();
			let ano = now.getFullYear();
			let mes = now.getMonth() + 1;
			let dia = now.getDate();
			let hora = now.getHours();
			let minuto = now.getMinutes();
			let segundo = now.getSeconds();

			return (
				<Container>
					<Form 	noValidate
						validated={this.state.validate} onSubmit={this.enviarEvento}>
						<Form.Control
							type='hidden'
							name='criador_evento'
							defaultValue={novoId}
						/>
						<Form.Control
							type='hidden'
							name='data_postagem'
							defaultValue={`${ano}-${mes}-${dia}`}
						/>
						<Form.Control
							type='hidden'
							name='hora_postagem'
							defaultValue={`${hora}:${minuto}:${segundo}`}
						/>
						<Form.Control
							type='hidden'
							name='modalidade'
							defaultValue={this.props.modalidade}
						/>

						<Form.Row>
							<Col sm={12} md={6} lg={4}>
								<Form.Group>
									<Form.Label> Digite o nome do evento <span style={field_required}>*</span></Form.Label>
									<Form.Control type='text' name='nome_evento' required/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>

							<Col sm={12} md={6} lg={4}>
								<Form.Group>
									<Form.Label>Categoria do evento </Form.Label>
									<Form.Control as='select' name='categoria' custom>
										<option value=''> </option>
										{ this.state.categoria && this.state.categoria.map( item => (
											<option key={ item.id_categoria } value={ item.id_categoria }>{ item.nome_categoria }</option>
										)) }
									</Form.Control>
								</Form.Group>
							</Col>

							<Col sm={12} md={12} lg={4}>
								<Form.Group>
									<Form.Label>Coloque uma imagem para o curso <span style={field_required}>*</span></Form.Label>
									<Form.File
										onChange={this.mudaimagem}
										name='imagem'
										id='custom-file-tranlate-html'
										label={this.state.valor}
										accept='.jpg,.png,.jpeg'
										custom
										required
									/>
								</Form.Group>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col sm={12} md={6} lg={4}>
								<Form.Group>
									<Form.Label>Qual a carga horária do curso </Form.Label>

									<Form.Control type='text' name='carga_horaria' />
								</Form.Group>
							</Col>

							<Col sm={12} md={6} lg={4}>
								<Form.Group>
									<Form.Label>Telefone </Form.Label>
									<Form.Control type='number' name='telefone' maxLength='11' />
								</Form.Group>
							</Col>

							<Col sm={12} md={12} lg={4}>
								<Form.Group>
									<Form.Label>Quem são os organizadores <span style={field_required}>*</span> </Form.Label>
									<Form.Control type='text' name='organizadores' required/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col sm={12} md={6} lg={4}>
								<Form.Group>
									<Form.Label>Data de início <span style={field_required}>*</span></Form.Label>
									<Form.Control type='date' name='data_evento' required/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>

							<Col sm={12} md={6} lg={4}>
								<Form.Group>
									<Form.Label>Horário </Form.Label>
									<Form.Control type='time' name='hora_evento' />
								</Form.Group>
							</Col>

							<Col sm={12} md={12} lg={4}>
								<Form.Group>
									<Form.Label>CEP  <span style={field_required}>*</span></Form.Label>
									<Form.Control
										type='text'
										name='cep'
										onChange={this.buscaCep}
										maxLength='8'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Group>
									<Form.Label>Estado(UF) <span style={field_required}>*</span></Form.Label>
									<Form.Control
										type='text'
										name='estado'
										defaultValue={this.state.cep.uf}
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>

							<Col>
								<Form.Group>
									<Form.Label>Endereço <span style={field_required}>*</span></Form.Label>
									<Form.Control
										type='text'
										name='logradouro'
										defaultValue={this.state.cep.logradouro}
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Group>
									<Form.Label>Cidade <span style={field_required}>*</span></Form.Label>
									<Form.Control
										type='text'
										name='cidade'
										defaultValue={this.state.cep.localidade}
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>

							<Col>
								<Form.Group>
									<Form.Label>Número <span style={field_required}>*</span> </Form.Label>
									<Form.Control type='text' name='num' required/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Group>
									<Form.Label>Bairro <span style={field_required}>*</span></Form.Label>
									<Form.Control
										type='text'
										name='bairro'
										defaultValue={this.state.cep.bairro}
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>

							<Col>
								<Form.Group>
									<Form.Label>Complemento <span style={field_required}>*</span></Form.Label>
									<Form.Control type='text' name='comple' required />
									<Form.Control.Feedback type='invalid'>
										Por favor preencha esse campo.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
						</Form.Row>

						<Form.Row>
							<Col>
								<Form.Group>
									<Form.Label>Descreva sua atividade <span style={field_required}>*</span></Form.Label>
									<textarea
										className=' form-control'
										name='descricao'
										cols='5'
										rows='10'
										required
									></textarea>
								</Form.Group>
							</Col>
						</Form.Row>

						<div className='form-row col-6 mx-auto mt-5 mb-5 '>
							<button
								className='btn btn-primary btn-block btn-lg'
								type='submit'
							>
								{' '}
								Enviar{' '}
							</button>
						</div>
					</Form>
				</Container>
			);
		}
	}
}

const mapState = (store) => ({
	novoId: store.IdLogin.novoId,
});

export default connect(mapState)(Presencial);
