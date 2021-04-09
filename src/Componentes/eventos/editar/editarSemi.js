import React from 'react'
import {Redirect} from 'react-router-dom'

import {Form,Col,Container} from 'react-bootstrap'

export default class EditaSemi extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      cep:'',
      redirect: false,
      nome_evento: this.props.nome,
      categoria: this.props.categoria,
      data_evento: this.props.data_evento,
      hora_evento: this.props.hora_evento,
      organizadores: this.props.organizadores,
      link: this.props.link,
      ceps: this.props.cep,
      estado: this.props.estado,
      cidade: this.props.cidade,
      bairro: this.props.bairro,
      logradouro: this.props.logradouro,
      numero: this.props.numero,
      complemento: this.props.complemento,
      descricao: this.props.descricao,
      carga_horaria: this.props.carga_horaria,
      telefone: this.props.telefone,
      valor:'imagem',
			category:[]

    }

    this.buscaCep = this.buscaCep.bind(this)
    this.editarEvento = this.editarEvento.bind(this)
    this.alterapadrao = this.alterapadrao.bind(this)
    this.mudaimagem = this.mudaimagem.bind(this)
  }

  mudaimagem(event){
    event.preventDefault()
    this.setState({
      'valor': 'Imagem carregada'
    })
  }

  alterapadrao(event){
    event.preventDefault()

    let padrao = event.target.value
    let nome = event.target.name

    switch(nome){
      case 'nome_evento':
        this.setState({'nome_evento': padrao})
        break
      case 'categoria':
        this.setState({'categoria': padrao})
        break
      case 'data_evento':
        this.setState({'data_evento': padrao})
        break
      case 'hora_evento':
        this.setState({'hora_evento': padrao})
        break
      case 'organizadores':
        this.setState({'organizadores': padrao})
        break
      case 'lin':
        this.setState({'link': padrao})
        break
      case 'ceps':
        this.setState({'ceps': padrao})
        break
      case 'estado':
        this.setState({'estado': padrao})
        break
      case 'cidade':
        this.setState({'cidade': padrao})
        break
      case 'bairro':
        this.setState({'bairro': padrao})
        break
      case 'logradouro':
        this.setState({'logradouro': padrao})
        break
      case 'numero':
        this.setState({'numero': padrao})
        break
      case 'complemento':
        this.setState({'complemento': padrao})
        break
      case 'descricao':
        this.setState({'descricao': padrao})
        break
      case 'carga_horaria':
        this.setState({'carga_horaria': padrao})
        break
      case 'telefone':
        this.setState({'telefone': padrao})
        break
      default:
        console.log('')
    }
  }

  async editarEvento(event){
    event.preventDefault()
    const url = "https://sarcastic-punch.000webhostapp.com/php/atualizaevento.php"
    const dados = new FormData(event.target)
    const cabecalho = {
      method:"POST",
      body:dados
    }
    const resposta = await fetch(url,cabecalho)
    await resposta

    this.setState({'redirect':true})

  }


  async buscaCep(event){
    event.preventDefault()   
    let ceps = this.state.ceps

    if(ceps.length === 8){
      await fetch(`https://viacep.com.br/ws/${ceps}/json/`)
      .then(resposta => resposta.json())
      .then(resposta => this.setState({'cep':resposta}))
    }
  }
  async componentDidMount (){
		const url = 'https://sarcastic-punch.000webhostapp.com/php/TodasCategorias.php'
		const resposta = await fetch(url)
		const resultado = await resposta.json()
		this.setState({category:resultado})
	}


  render(){
    let now     = new Date()
    let ano     = now.getFullYear() 
    let mes     = now.getMonth()+1
    let dia     = now.getDate()
    let hora    = now.getHours()
    let minuto  = now.getMinutes()
    let segundo = now.getSeconds()

    if(this.state.redirect){
      return <Redirect to={`/EventoEspecifico${this.props.id}`}/>
    }else {

      return(
        <Container >
          
          <Form onSubmit={this.editarEvento}>
            <Form.Control type="hidden" name="criador_evento" defaultValue={this.props.criador} />
            <Form.Control type="hidden" name="data_edicao" defaultValue={`${ano}-${mes}-${dia}`}/>
            <Form.Control type="hidden" name="hora_edicao" defaultValue={`${hora}:${minuto}:${segundo}`}/>
            <Form.Control type="hidden" name="modalidade" defaultValue={this.props.modalidade}/>
            <Form.Control type="hidden" name="data_postagem" defaultValue={this.props.data_postagem}/>
            <Form.Control type="hidden" name="hora_postagem" defaultValue={this.props.hora_postagem}/>
            <Form.Control type="hidden" name="verificado" defaultValue={this.props.verificado}/>
            <Form.Control type="hidden" name="id_evento" defaultValue={this.props.id}/>

            <Form.Row>
              <Col sm={12} md={6} lg={4}>
                <Form.Group>
                  <Form.Label > Digite o nome do evento: </Form.Label>
                    <Form.Control type="text" name="nome_evento" value={this.state.nome_evento} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>	

              <Col sm={12} md={6} lg={4}>
                <Form.Group>
                  <Form.Label>Categoria do evento: </Form.Label>
                    <Form.Control as="select" name="categoria" custom >
                      <option value=''> </option>
                      { this.state.category && this.state.category.map( item => (
                        <option key={ item.id_categoria } value={ item.id_categoria }>{ item.nome_categoria }</option>
                      )) }
                    </Form.Control>
                </Form.Group>
              </Col>

              <Col sm={12} md={12} lg={4}>
                <Form.Group>
                  <Form.Label>Coloque uma imagem para o curso:</Form.Label>
                    <Form.File 
                      onChange={this.mudaimagem}
                      name="imagem"
                      id="custom-file-tranlate-html"
                      label={this.state.valor}
                      accept=".jpg,.png,.jpeg"
                      custom
                    />
                </Form.Group>
              </Col>
            </Form.Row>	

            <Form.Row>
              <Col sm={12} md={6} lg={4}>
                <Form.Group>
                  <Form.Label  >Qual a carga horaria do curso: </Form.Label>
                    <Form.Control  type="text" name="carga_horaria" value={this.state.carga_horaria} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>

              <Col sm={12} md={6} lg={4}>
                <Form.Group>
                  <Form.Label>Telefone: </Form.Label>
                  <Form.Control type="number" name="telefone" maxLength="11" value={this.state.telefone} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>

              <Col sm={12} md={12} lg={4}>
                <Form.Group>
                  <Form.Label >Quem são os organizadores: </Form.Label>
                    <Form.Control  type="text" name="organizadores" value={this.state.organizadores} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label >Link do evento : </Form.Label>
                    <Form.Control type="url" name="lin" placeholder="https://" value={this.state.link} onChange={this.alterapadrao}/>
                </Form.Group>  
              </Col>
            </Form.Row>

            <Form.Row>
              <Col sm={12} md={6} lg={4}>
                <Form.Group>
                  <Form.Label  >Data: </Form.Label>
                    <Form.Control type="date" name="data_evento" value={this.state.data_evento} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>

              <Col sm={12} md={6} lg={4}>
                <Form.Group>
                  <Form.Label >Horario: </Form.Label>
                    <Form.Control type="time" name="hora_evento" value={this.state.hora_evento} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>

              <Col sm={12} md={12} lg={4}>
                <Form.Group>
                  <Form.Label >CEP: </Form.Label>
                    <Form.Control type="text" name="ceps" onChange={this.alterapadrao} onKeyUp={this.buscaCep} maxLength="8" value={this.state.ceps} />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col >
                <Form.Group>
                  <Form.Label >Estado(UF): </Form.Label>
                    <Form.Control type="text" name="estado" defaultValue={this.state.cep.uf} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label >Endereço: </Form.Label>
                    <Form.Control  type="text" name="logradouro" defaultValue={this.state.cep.logradouro} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label >Cidade: </Form.Label>
                    <Form.Control type="text" name="cidade" defaultValue={this.state.cep.localidade} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label >Numero: </Form.Label>
                    <Form.Control  type="text" name="num" defaultValue={this.state.numero} onChange={this.alterapadrao}/>
                </Form.Group>  
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label >Bairro: </Form.Label>
                    <Form.Control type="text" name="bairro" defaultValue={this.state.cep.bairro} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label  >Comple: </Form.Label>
                    <Form.Control  type="text" name="comple" defaultValue={this.state.complemento} onChange={this.alterapadrao}/>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label  > Descreva sua atividade: </Form.Label>
                    <textarea className=" form-control" name="descricao" cols="5" rows="10" value={this.state.descricao} onChange={this.alterapadrao}></textarea>
                </Form.Group>
              </Col>
            </Form.Row>

            <div className="form-row col-6 mx-auto mt-5 mb-5 ">
              <button className="btn btn-primary btn-block btn-lg" type="submit"> Enviar </button>
            </div>
            
          </Form>
        </Container>
      )
    }
  }
}