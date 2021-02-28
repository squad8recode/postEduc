import React from 'react';
import { connect } from 'react-redux';

import EditaOnline from '../Componentes/eventos/editar/editarOnline';
import EditaPresencial from '../Componentes/eventos/editar/editarPresencial';
import EditaSemi from '../Componentes/eventos/editar/editarSemi';
import NaoTemPermissao from '../Componentes/Modal/naoTemPermissao';

import { Container } from 'react-bootstrap';

class Edicao extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalidade: '',
			dados: [],
			criador: '',
		};

		this.apareceformulario = this.apareceformulario.bind(this);
		this.muda = this.muda.bind(this);
	}

	muda(a) {
		a.preventDefault();
		let b = a.target.value;
		this.setState({ modalidade: b });
	}

	async componentDidMount() {
		const url = await fetch(
			`http://52.67.245.155/php/select.php?id=${this.props.match.params.id}`
		);
		const resposta = await url.json();

		this.setState({ dados: resposta });
		this.setState({ criador: resposta[0].criador_evento });
	}

	apareceformulario() {
		if (this.state.modalidade === 'online') {
			return (
				this.state.dados &&
				this.state.dados.map((info) => (
					<EditaOnline
						key={info.id_evento}
						id={info.id_evento}
						modalidade={this.state.modalidade}
						nome={info.nome_evento}
						categoria={info.categoria}
						data_postagem={info.data_postagem}
						hora_postagem={info.hora_postagem}
						data_evento={info.data_evento}
						hora_evento={info.hora_evento}
						criador={info.criador_evento}
						organizadores={info.organizadores}
						descricao={info.descricao}
						link={info.link}
						estado={info.estado}
						cidade={info.cidade}
						bairro={info.bairro}
						logradouro={info.logradouro}
						numero={info.numero}
						complemento={info.complemento}
						cep={info.cep}
						carga_horaria={info.carga_horaria}
						imagem={info.imagem}
						verificado={info.verificado}
						telefone={info.telefone}
					/>
				))
			);
		} else if (this.state.modalidade === 'presencial') {
			return (
				this.state.dados &&
				this.state.dados.map((info) => (
					<EditaPresencial
						key={info.id_evento}
						id={info.id_evento}
						modalidade={this.state.modalidade}
						nome={info.nome_evento}
						categoria={info.categoria}
						data_postagem={info.data_postagem}
						hora_postagem={info.hora_postagem}
						data_evento={info.data_evento}
						hora_evento={info.hora_evento}
						criador={info.criador_evento}
						organizadores={info.organizadores}
						descricao={info.descricao}
						link={info.link}
						estado={info.estado}
						cidade={info.cidade}
						bairro={info.bairro}
						logradouro={info.logradouro}
						numero={info.numero}
						complemento={info.complemento}
						cep={info.cep}
						carga_horaria={info.carga_horaria}
						imagem={info.imagem}
						verificado={info.verificado}
						telefone={info.telefone}
					/>
				))
			);
		} else if (this.state.modalidade === 'semipresencial') {
			return (
				this.state.dados &&
				this.state.dados.map((info) => (
					<EditaSemi
						key={info.id_evento}
						id={info.id_evento}
						modalidade={this.state.modalidade}
						nome={info.nome_evento}
						categoria={info.categoria}
						data_postagem={info.data_postagem}
						hora_postagem={info.hora_postagem}
						data_evento={info.data_evento}
						hora_evento={info.hora_evento}
						criador={info.criador_evento}
						organizadores={info.organizadores}
						descricao={info.descricao}
						link={info.link}
						estado={info.estado}
						cidade={info.cidade}
						bairro={info.bairro}
						logradouro={info.logradouro}
						numero={info.numero}
						complemento={info.complemento}
						cep={info.cep}
						carga_horaria={info.carga_horaria}
						imagem={info.imagem}
						verificado={info.verificado}
						telefone={info.telefone}
					/>
				))
			);
		}
	}

	render() {
		const { novoId } = this.props;
		if (this.state.criador === novoId) {
			return (
				<>
					<Container>
						<p>Esse curso será ministrado de qual forma agora? </p>
						<div className='form-row mb-4 ml-1'>
							<label className='form-check-label mr-3 ' htmlFor='modalidade'>
								<input
									type='radio'
									className='mr-2 '
									name='modalidade'
									value='presencial'
									onMouseDown={this.muda}
								/>
								Presencial
							</label>

							<label className='form-check-label mr-3 ' htmlFor='modalidade'>
								<input
									type='radio'
									className='mr-2 '
									name='modalidade'
									value='online'
									onMouseDown={this.muda}
								/>
								Online
							</label>

							<label className='form-check-label mr-3 ' htmlFor='modalidade'>
								<input
									type='radio'
									className='mr-2'
									name='modalidade'
									value='semipresencial'
									onMouseDown={this.muda}
								/>{' '}
								Semipresencial
							</label>
						</div>
					</Container>

					{this.apareceformulario()}
				</>
			);
		} else {
			return <NaoTemPermissao />;
		}
	}
}

const mapState = (store) => ({
	novoId: store.IdLogin.novoId,
});

export default connect(mapState)(Edicao);