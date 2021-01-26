import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

class Sugestoes extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};

		this.enviarSugestao = this.enviarSugestao.bind(this);
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	async enviarSugestao(event){
		event.preventDefault()
		const url = "http://18.228.15.53/php/sugestoes.php"
		const dados = new FormData(event.target)
		const cabecalho = {
		  method:"POST",
		  body:dados,
		}
		console.log(cabecalho)
		
		const resposta = await fetch(url,cabecalho)
		await resposta
		alert("Sua sugestão foi enviada com sucesso!");
		
	}

	render() {
		return (
			<>
				<Button variant="outline-light" onClick={this.handleShow}>
					Deixe aqui seu interesse e/ou sugestão
        		</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Formulário de Interesses / Sugestões</Modal.Title>
					</Modal.Header>
					<Form onSubmit={this.enviarSugestao}>
						<Modal.Body>
							<Form.Group >
								<Form.Label>Nome completo</Form.Label>
								<Form.Control type="text" id="nome" name="nome" placeholder="Digite seu nome completo" />
							</Form.Group>
							<Form.Group >
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" id="email" name="email" placeholder="Seu melhor e-mail aqui" />
							</Form.Group>
							<Form.Group >
								<Form.Label>Interesses / Sugestões</Form.Label>
								<Form.Control as="textarea" id="sugestao" name="sugestao" rows={3} placeholder="Escreva aqui seus interesses ou sugestões" />
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={this.handleClose}>
								Fechar
							</Button>
							<Button variant="primary" type="submit" onClick={this.handleClose}>
								Enviar
							</Button>
						</Modal.Footer>	
					</Form>
				</Modal>
			</>
		);
	}
}

export default Sugestoes