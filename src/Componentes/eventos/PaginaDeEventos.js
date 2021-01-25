import React  from 'react';

import '../../css/index.css'

import Minievento from './Minievento'
import Minicategoria from './Minicategoria'
import Caroussel from '../carrossel/Carousel'
import Sugestoes from '../Modal/Sugestoes'

export default class PaginaDeEvento extends React.Component{

constructor(props){
  super(props);
  this.state = {
    db: []
  };
}

componentDidMount(){
  fetch("http://52.67.245.155/php/carrousel.php")
  .then( response => response.json())
  .then(responseJson => this.setState({'db': responseJson}));
}

  render(){
    return(
      <div>
        
          <Caroussel/>

        <div className="flex altura">
          <p>Populares</p>
          <a href="http://localhost:3000/">+ Ver Todos</a>
        </div>

        <div className="flex bet margin fwrap">
            
            {this.state.db && this.state.db.map(arrayevento => (
                <Minievento key={arrayevento.id_evento}
                            id={arrayevento.id_evento}  
                            imagem={arrayevento.imagem} 
                            nome={arrayevento.nome_evento}
                            modalidade = {arrayevento.modalidade}
                />
            ))}
         
        </div>

        <div className="borda margin center informacoes">

          {/* <h2 className="borda margin  info"> + Crie um Grupo de estudos</h2>
          <h3 className="cor">Area em fase de desenvolvimento</h3> */}

        </div>

        <div className="flex altura">
          <p>Categorias</p>
          <a href="http://localhost:3000/">+ Ver Mais</a>
        </div>

        <div className="flex bet margin fwrap">
        
          <Minicategoria/>
          <Minicategoria/>
          <Minicategoria/>
          <Minicategoria/>
          
        </div>


        <div className="margin center informacoes">

          <h2 className="margin  info">Não encontrou um Curso ou Evento de seu interesse? Nos ajude a melhorar o postEduc</h2>
          <Sugestoes />

        </div>

      </div>
    )
  }
}