import React from 'react';

import {Container, Row, Col, Button, Image} from 'react-bootstrap'

import Detalhes from '../Componentes/eventos/especifico/Detalhes'
import InfosEvento from '../Componentes/eventos/especifico/InfosEvento'
import Descricao from '../Componentes/eventos/especifico/Descricao'
import Facebook from '../Img/icone_face.png'
import Insta from '../Img/icone_insta.png'
import Whats from '../Img/icone_whats.png'

export default class EventoEspecifico extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      db: [],
    };
  }


  componentDidMount(){
    fetch(`http://52.67.245.155/php/select.php?id=${this.props.match.params.id}`)
    .then( response => response.json())
    .then(responseJson => this.setState({'db': responseJson}));

    
  }

  render(){ 
  if(this.state.db){
    return(
      <Container fluid>
        <Container fluid>
          <Row>
            <Col  sm={12} md={8}  lg={8} xl={6}className="center column sm-auto xs-auto md-auto lg-auto xl-auto ">
            {this.state.db && this.state.db.map( 
                  infosEvento => (
              <InfosEvento 
                key={infosEvento.id_evento}
                verificado={infosEvento.verificado}
                imagem={infosEvento.imagem}  
                data = {infosEvento.data_postagem}
                hora = {infosEvento.hora_postagem}          
              />
                  )
              )}
              <Container >
                <Row className="justify-content-center">
                  <h6>Compartilhar: </h6>
                  <Button variant="white" className="float-right" >
                  <Image src={Facebook}>
                  </Image>
                  </Button>
                  <Button variant="white" className="float-right" >
                  <Image src={Insta}>
                  </Image>
                  </Button>
                  <Button variant="white" className="float-right" >
                  <Image src={Whats}>
                  </Image>
                  </Button>
                </Row>
                
              </Container>
              </Col>
            
            <Col sm={12} md={4} lg={4} xl={6}className="p-5">
 
            {this.state.db && this.state.db.map( 
                  detalhes => (
                    <Detalhes
                      key={detalhes.id_evento}
                      logradouro={detalhes.logradouro}
                      numero={detalhes.numero}
                      bairro={detalhes.bairro}
                      complemento={detalhes.complemento}
                      cep={detalhes.cep}
                      estado={detalhes.estado}
                      cidade={detalhes.cidade}
                      modalidade={detalhes.modalidade}
                      nome={detalhes.nome_evento}
                      data={detalhes.data_evento}
                      hora={detalhes.hora_evento}
                      carga={detalhes.carga_horaria}
                      criador = {detalhes.criador_evento}
                      link = {detalhes.link}
                      id={detalhes.id_evento}
                    />
                  )
            )} 
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
               
          {this.state.db && this.state.db.map( 
            descricao => (
              <Descricao
                key={descricao.id_evento}
                descricao={descricao.descricao}
                organizadores={descricao.organizadores}
                telefone={descricao.telefone}
                id = {descricao.id_evento}
              />
            ))}
              
        </Container>
      </Container>
    )
  }
  }
}

