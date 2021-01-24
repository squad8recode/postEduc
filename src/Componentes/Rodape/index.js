import React from 'react';

import Facebook from '../../Img/icone_face.svg';
import Instagram from '../../Img/icone_insta.svg';
import Whatsapp from '../../Img/icone_whats.svg';

import {Link} from 'react-router-dom'


import './rodape.css';
import PoliticaPrivacidade from '../Modal/PoliticaPrivacidade';

export class Rodape extends React.Component{
    render(){
        return(
            <div className="rodape text-white-50 font-small">
                <div className="container-fluid">
                    <div className="row pt-3">
                        <div className="m-auto col-4" style={{fontSize: 30}}>
                            <Link to="/">
                                PostEduc
                            </Link>
                        </div>
                        <div className="col-4">
                            <h4>Menu</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/CadastroEvento">Criar Evento</Link></li>
                                {/* <li><a href="#!">Criar Grupo de Estudos</a></li> */}

                                <li><Link to="/Categorias">Categorias</Link></li>
                                <li><Link to="/TodosEventos">Eventos</Link></li>

                            </ul>
                        </div>
                        <div className="col-4">
                            <h4>O PostEduc</h4>
                            <ul className="list-unstyled list-inline">
                                <li><Link to="/Sobre">Sobre</Link></li>
                                {/* <li><a href="#!">Parcerias</a></li> */}
                                <PoliticaPrivacidade />
                                {/* <li><a href="#!">Ajuda</a></li> */}
                            </ul>
                        </div>                
                    </div>
                    <hr />
                    <div className="row">
                        <div className="m-auto">
                            <h6>Conecte-se | Compartilhe:</h6>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="#!" className="btn-floating btn-sm mx-1">
                                        <img src={Facebook} width="30" height="30" alt="Facebook" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="btn-floating btn-sm mx-1">
                                        <img src={Instagram} width="30" height="30" alt="Instagram" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="btn-floating btn-sm mx-1">
                                        <img src={Whatsapp} width="30" height="30" alt="Whatsapp" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rodape text-white-50 font-small">
                        <div className="footer-copyright text-center py-3" >
                            &copy; {(new Date().getFullYear())} PostEduc | Todos os direitos reservados
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Rodape;