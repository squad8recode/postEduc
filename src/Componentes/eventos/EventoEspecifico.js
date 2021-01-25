import React from 'react';

import {Container, Row, Col, Button, Image} from 'react-bootstrap'

import Detalhes from './Detalhes'
import InfosEvento from './InfosEvento'
import Descricao from './Descricao'
import Facebook from '../../Img/icone_face.png'
import Insta from '../../Img/icone_insta.png'
import Whats from '../../Img/icone_whats.png'

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
            <Col className="center column sm-auto xs-auto md-auto lg-auto xl-auto ">
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
                  <h8>Compartilhar: </h8>
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
                <br></br>
              </Container>
              </Col>
            
            <Col className="p-5">
 
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

                      nome={detalhes.nome_evento}
                      data={detalhes.data_evento}
                      hora={detalhes.hora_evento}
                      carga={detalhes.carga_horaria}
                      criador = {detalhes.criador_evento}
                      id = {detalhes.id_evento}
                    />
                  )
            )} 

              <br></br>
              <Button> Participar </Button>
              
              
            </Col>
          </Row>
        </Container>

        <Container >
               
          {this.state.db && this.state.db.map( 
            descricao => (
              <Descricao
                key={descricao.id_evento}
                descricao={descricao.descricao}
                organizadores={descricao.organizadores}
                telefone={descricao.telefone}
              />
            ))}
              
        </Container>
      </Container>
    )
  }
  }
}

