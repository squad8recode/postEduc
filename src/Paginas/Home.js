import React from 'react';

import '../css/index.css';

import Minievento from '../Componentes/eventos/minis/Minievento';
import Minicategoria from '../Componentes/eventos/minis/Minicategoria';
import Caroussel from '../Componentes/carrossel/Carousel';
import Sugestoes from '../Componentes/Modal/Sugestoes';
import Pessoa from '../Img/pessoa1.png';
export default class PaginaDeEvento extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			db: [],
		};
	}

	componentDidMount() {
		fetch('http://52.67.245.155/php/carrousel.php')
			.then((response) => response.json())
			.then((responseJson) => this.setState({ db: responseJson }));
	}

	render() {
		return (
			<div>
				<Caroussel />

				<div className='flex altura benef'>
					<p>Mais recentes</p>
					{/*<a href="http://localhost:3000/">+ Ver Todos</a>*/}
				</div>

				<div className='d-flex fwrap justify-content-center '>
					{this.state.db &&
						this.state.db.map((arrayevento) => (
							<Minievento
								key={arrayevento.id_evento}
								id={arrayevento.id_evento}
								imagem={arrayevento.imagem}
								nome={arrayevento.nome_evento}
								modalidade={arrayevento.modalidade}
							/>
						))}
				</div>

				{/*<div className="borda margin center informacoes">

          <h2 className="borda margin  info"> + Crie um Grupo de estudos</h2>
          <h3 className="cor">Area em fase de desenvolvimento</h3> 

        </div>*/}
				<div className='flex altura categ'>
					<p>Categorias</p>
				</div>

				<div className='d-flex fwrap justify-content-center'>
					<Minicategoria categoria='Musica' imagem='musica.jpg' />
					<Minicategoria categoria='Matematica' imagem='matematica.jpg' />
					<Minicategoria categoria='Desenho' imagem='desenho.jpg' />
					<Minicategoria categoria='Palestra' imagem='palestra.jpg' />
				</div>

				<div className='row bg-light'>
					<div className='col-12 col-sm-11 col-md-3'>
						<img
							src={Pessoa}
							width='100%'
							height='234'
							alt='login'
							className='pessoa mb-2'
						/>
					</div>
					<div className='margin center informacoes col-11 col-sm-11 col-md-8 col-lg-8 mt-6'>
						<h4 className='margin info'>
							Não encontrou um Curso ou Evento de seu interesse? Nos ajude a
							melhorar o postEduc
						</h4>
						<Sugestoes />
					</div>
				</div>
			</div>
		);
	}
}
