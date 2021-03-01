import React from 'react';
import { connect } from 'react-redux';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Deletar from '../../Modal/Deletar'

class Detalhes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			criador: this.props.criador,
            modal: false,
			redirect: false,
		};

        this.deletar = this.deletar.bind(this)
        this.fecharModal = this.fecharModal.bind(this)
        this.redirecionamento = this.redirecionamento.bind(this)

	}

    deletar(){
        this.setState({modal:true})
    }
    fecharModal(parametro){
        this.setState({modal:parametro})
    }
    redirecionamento(parametro){
        this.setState({redirect:parametro})
    }


	render() {
		const { novoId } = this.props;
		const css = { textDecoration: 'underline', color: 'rgb(114, 8, 114)' };

        if (this.state.redirect) {
			return <Redirect to='/EventosUser' />;
		} else {
            return (

                <div>
                    { this.state.modal && <Deletar redirecionamento={this.redirecionamento} fecharModal={this.fecharModal} id={this.props.id}/> }

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
                        { this.state.criador === novoId ? (
                            <>
                            <Button
                                variant='outline-info'
                                as={ Link }
                                to={ `/EditarEvento${this.props.id}` }
                                className='ml-3'
                            >
                                Editar
                            </Button>
                            <Button
                            variant='danger'
                            onClick={ this.deletar }
                            className='ml-3'
                            >
                                Deletar
                            </Button>
                        </>
                        ) : ( 
                            <Button className='ml-3'> Participar </Button>
                        )}
                    </Row>
                </div>
            );
        }
    }
}

const mapState = (store) => ({
	novoId: store.IdLogin.novoId,
});

export default connect(mapState)(Detalhes);
