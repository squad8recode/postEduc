import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class CadastroRealizado extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<Button variant="outline-light" onClick={this.handleShow}>
					Deixe aqui seu interesse e/ou sugestão
        		</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header className="bg-success" closeButton>
						<Modal.Title>Sucesso</Modal.Title>
					</Modal.Header>
					<Modal.Body>
                        Cadastro realizado com sucesso!
					</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={this.handleClose}>
								Fechar
							</Button>
						</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default CadastroRealizado