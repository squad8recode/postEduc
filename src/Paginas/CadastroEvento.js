import React from 'react'

import Online from '../Componentes/eventos/criarEvento/Online'
import Presencial from '../Componentes/eventos/criarEvento/Presencial'
import SemiPresencial from '../Componentes/eventos/criarEvento/Semipresencial'

import {Container} from 'react-bootstrap'

import { connect } from 'react-redux'

import ErroEfetuarLogin from '../Componentes/Modal/ErroEfetuarLogin'


 class CadastroEvento extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      modalidade: []
    }

    this.muda = this.muda.bind(this)
    this.aparece = this.aparece.bind(this)
  }

  muda(a){
    a.preventDefault()
    let b = a.target.value
    this.setState({'modalidade':b})
  }

  aparece(){
    if(this.state.modalidade === 'online'){
      return <Online modalidade={this.state.modalidade}/>
    }else if(this.state.modalidade === 'presencial'){
      return <Presencial modalidade={this.state.modalidade}/>
    }else if(this.state.modalidade === 'semipresencial'){
      return <SemiPresencial modalidade={this.state.modalidade}/>
    }
  }

  render(){
    
    const { novoNome } = this.props

    if(!novoNome){

      return <ErroEfetuarLogin />

    }else{

      return(
        <>
          <Container>
            
            <p >Esse curso será ministrado de qual forma: </p>
            <div className="form-row mb-4 ml-1">
              <label className="form-check-label mr-3 " htmlFor="modalidade"><input type="radio" className="mr-2 " name="modalidade"  value="presencial" onMouseDown={this.muda}/>Presencial</label>

              <label className="form-check-label mr-3 " htmlFor="modalidade"><input type="radio" className="mr-2 " name="modalidade"  value="online" onMouseDown={this.muda} />Online</label>
                
              <label className="form-check-label mr-3 " htmlFor="modalidade"><input type="radio" className="mr-2" name="modalidade"  value="semipresencial" onMouseDown={this.muda} /> Semipresencial</label>
            </div>
          </Container>
          {this.aparece()}
        </>
      )
    }
  }
}

const mapear = store => ({
  novoNome: store.NomeLogin.novoNome
})

export default connect(mapear)(CadastroEvento)