import React from 'react';
import { connect } from 'react-redux';

import NaoTemPermissao from '../../Componentes/Modal/naoTemPermissao';
import Denuncia from '../../Componentes/admin/denuncias/Denuncia';

class Denuncias extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			denuncias: [],
		};
	}

	componentDidMount() {
		fetch('https://sarcastic-punch.000webhostapp.com/php/infodenuncia.php')
			.then((resposta) => resposta.json())
			.then((resposta) => this.setState({ denuncias: resposta }));
	}

	render() {
		const { novoId } = this.props
		if (novoId !== '11') {
			return <NaoTemPermissao />;
		} else {
			return (
				<div>
					<div className='flex'>
						{this.state.denuncias &&
							this.state.denuncias.map((denuncia) => (
								<Denuncia
									key={denuncia.id_denuncia}
									data={denuncia.data_denuncia}
									id={denuncia.id_denuncia}
									id_pessoa={denuncia.id_usuario}
									id_evento={denuncia.id_evento}
									nome_pessoa={denuncia.nome}
									nome_evento={denuncia.nome_evento}
									denuncia={denuncia.denuncia}
									tipo_denuncia={denuncia.tipo_denuncia}
								/>
							))}
					</div>
				</div>
			);
		}
	}
}

const mapState = (store) => ({
	novoId: store.IdLogin.novoId,
});

export default connect(mapState)(Denuncias);
