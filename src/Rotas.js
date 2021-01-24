import React from 'react';
import {Switch, Route} from 'react-router-dom';

import PaginaDeEvento from './Componentes/eventos/PaginaDeEventos'
import EventoEspecifico from './Componentes/eventos/EventoEspecifico'
import CadastroEvento from './Componentes/eventos/criarEvento/CadastroEvento'
import CadastroUsuario from './Componentes/CadastroUsuario/CadastroUsuario'
import Login from './Componentes/Login/Login'
import Sobre from './Paginas/Sobre'
import VerificaEvento from './Componentes/admin/aprovar/VerificaEvento'
import Denuncias from './Componentes/admin/denuncias/Denuncias'
import TodosEventos from './Componentes/eventos/Todos'
import Categorias from './Componentes/eventos/categorias'

import VerificaSugestao from './Componentes/admin/sugestoes/VerificaSugestao'
import EventosUser from './Componentes/eventos/editar/EventosUser'
import EditarEvento from './Componentes/eventos/editar/editarEvento/edicao'



export class Rotas extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={PaginaDeEvento} />
    
                {/* Crie as Rotas Aqui */}
                <Route exact path="/EventoEspecifico:id" component={EventoEspecifico}/>
                <Route exact path="/CadastroEvento" component={CadastroEvento}/>
                <Route exact path="/CadastroUsuario" component={CadastroUsuario}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Sobre" component={Sobre}/>
                <Route exact path="/Denuncias" component={Denuncias}/>
                <Route exact path="/VerificaEvento" component={VerificaEvento}/>
                <Route exact path="/TodosEventos" component={TodosEventos}/>

                <Route exact path="/Categorias" component={Categorias}/>

                <Route exact path="/EventosUser" component={EventosUser}/>
                <Route exact path="/EditarEvento:id" component={EditarEvento}/>
                <Route exact path="/VerificaSugestao" component={VerificaSugestao}/>
                

            
            </Switch>
        )    
    }
}

export default Rotas;
