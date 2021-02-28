import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home             from './Paginas/Home'
import EventoEspecifico from './Paginas/EventoEspecifico'
import CadastroEvento   from './Paginas/CadastroEvento'
import Sobre            from './Paginas/Sobre'
import TodosEventos     from './Paginas/TodosEventos'
import EventosUser      from './Paginas/EventosUser'
import EditarEvento     from './Paginas/EditarEvento'
import Login            from './Paginas/Login'
import CadastroUsuario  from './Paginas/CadastroUsuario'
import VerificaEvento   from './Paginas/admin/VerificaEvento'
import Denuncias        from './Paginas/admin/Denuncias'
import VerificaSugestao from './Paginas/admin/VerificaSugestao'
import EditarUsuario    from './Paginas/EditarUsuario'
import Categorias       from './Componentes/eventos/categorias'

export class Rotas extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/"                    component={Home} />
                <Route exact path="/EventoEspecifico:id" component={EventoEspecifico}/>
                <Route exact path="/CadastroEvento"      component={CadastroEvento}/>
                <Route exact path="/Sobre"               component={Sobre}/>
                <Route exact path="/TodosEventos"        component={TodosEventos}/>
                <Route exact path="/EventosUser"         component={EventosUser}/>
                <Route exact path="/EditarEvento:id"     component={EditarEvento}/>
                <Route exact path="/Login"               component={Login}/>
                <Route exact path="/CadastroUsuario"     component={CadastroUsuario}/>
                <Route exact path="/VerificaEvento"      component={VerificaEvento}/>
                <Route exact path="/Denuncias"           component={Denuncias}/>
                <Route exact path="/VerificaSugestao"    component={VerificaSugestao}/>
                <Route exact path="/EditarCadastro"      component={EditarUsuario}/>
                <Route exact path="/Categorias"          component={Categorias}/>
            </Switch>
        )    
    }
}

export default Rotas;
