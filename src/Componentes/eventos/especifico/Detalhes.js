import React from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Detalhes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			criador: this.props.criador,
		};
	}

	render() {
		const { novoId } = this.props;
		const css = { textDecoration: 'underline', color: 'rgb(114, 8, 114)' };

		
        return (
            <div>

                { this.props.modalidade === 'semipresencial' || this.props.modalidade === 'presencial' ? (
                    <>
                        <h2>{this.props.nome}</h2>
                        <p className='pt-4'>Modalidade: {this.props.modalidade}</p>
                        <p className='pt-1'>
                            Cidade:{this.props.cidade} | Estado:{this.props.estado} | Bairro{' '}
                            {this.props.bairro}
                        </p>
                        <p className='pt-1'>
                            Local: {this.props.logradouro}, {this.props.numero},{' '}
                            {this.props.complemento}
                        </p>
                        <p>
                            Quando: {this.props.data} - {this.props.hora}
                        </p>
                        <p>Duração: {this.props.carga} horas</p>
                    </>
                ) : (
                    <>
                        <h2>{this.props.nome}</h2>
                        <p className='pt-4'>Modalidade: {this.props.modalidade}</p>
                        <p>
                            Quando: {this.props.data} - {this.props.hora}
                        </p>
                        <p>Duração: {this.props.carga} horas</p>
                    </>
                )}


                { this.props.modalidade === 'semipresencial' || this.props.modalidade === 'online' ? (
                    <p>
                        Link do evento:{' '}
                        <a
                            href={this.props.link}
                            target='_blank'
                            rel='noreferrer'
                            style={css}
                        >
                            aqui
                        </a>{' '}
                    </p>
                ):(<></>)}

                <Row>
                { this.state.criador === novoId && (
                    <Button
                        variant='outline-info'
                        as={Link}
                        to={`/EditarEvento${this.props.id}`}
                    >
                        Editar
                    </Button>
                )}
                    <Button className='ml-5'> Participar </Button>
                </Row>
            </div>
        );
    }
}

const mapState = (store) => ({
	novoId: store.IdLogin.novoId,
});

export default connect(mapState)(Detalhes);
