import React from 'react';
import {Button, Modal, Form, Image} from 'react-bootstrap';

import Checkbox from '../../Componentes/Checkbox/Checkbox';
import { connect } from 'react-redux';

import denuncia from '../../Img/denuncia.png'

const itens = [
	' conteúdo sexual / impróprio',
	' conteúdo violento / repulsivo',
	' conteúdo abusivo',
	' conteúdo perigoso',
	' spam ou enganoso',
];

class Denuncia extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};

		this.enviarDenuncia = this.enviarDenuncia.bind(this)
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	//Componente Checkbox

	componentDidMount = () => {
		this.selecionadoCheckbox = new Set();
	}

	mudarCheckbox = label => {
		if(this.selecionadoCheckbox.has(label)){
			this.selecionadoCheckbox.delete(label);
		} else {
			this.selecionadoCheckbox.add(label);
		}
	}

	// handleFormSubmit = formSubmitEvent => {
	// 	formSubmitEvent.preventDefault();

	// 	for(const checkbox of this.selecionadoCheckbox){
	// 		console.log(checkbox, 'selecionado');
	// 	}
	// }

	criarCheckbox = label => (
		<Checkbox
			label={label}
			handleCheckboxChange={this.mudarCheckbox}
			key={label}
			name="tipo_denuncia"
		/>
	)

	criandoCheckboxes = () => (
		itens.map(this.criarCheckbox)
	)

	async enviarDenuncia(event){
    event.preventDefault()
    const url = "http://52.67.245.155/php/enviadenuncia.php"
    const dados = new FormData(event.target)
    const cabecalho = {
      method:"POST",
      body:dados,
    }
    
    const resposta = await fetch(url,cabecalho)
		await resposta
		
		alert('Sentimos muito que tenha ocorrido um problema, vamos avaliar a sua denuncia!')

		this.handleClose()
  }


	render() {
		let now = new Date()
    let ano = now.getFullYear() 
    let mes = now.getMonth()+1
		let dia = now.getDate()
		const { novoId } = this.props

		return (
			<>
				<Button variant="white" className="float-right" onClick={this.handleShow}>
					<Image src={denuncia}>
					</Image>
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Denunciar Evento</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={this.enviarDenuncia}>
							{this.criandoCheckboxes()}
							<br/>
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Informações adicionais:</Form.Label>
								<Form.Control as="textarea" name="denuncia" rows={3} placeholder="Relate aqui informações adicionais sobre a denuncia." />
								<input type="hidden" name="id_usuario" defaultValue={novoId}/>
								<input type="hidden" name="id_evento" defaultValue={this.props.id}/>
          			<input type="hidden" name="data_denuncia" defaultValue={`${ano}-${mes}-${dia}`}/>
							</Form.Group>
								<Button variant="secondary" onClick={this.handleClose}>
									Cancelar
								</Button>
								<Button variant="danger" type='submit' >
									Denunciar
								</Button>
						</Form>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}
const mapState = store =>({
  novoId: store.IdLogin.novoId
})

export default connect(mapState)(Denuncia)