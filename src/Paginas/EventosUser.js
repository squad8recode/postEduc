import React from 'react'
import { connect } from 'react-redux'
import ErroEfetuarLoginEdit from '../Componentes/Modal/ErroEfetuarLoginEdit'
import MiniEvento from '../Componentes/eventos/minis/Minievento'
import NaoPossuiEvento from '../Componentes/Modal/naoPossui'


class EventosUser extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      eventUser:''
    }
  }


  componentDidMount(){
    const { novoId } = this.props
    fetch(`https://sarcastic-punch.000webhostapp.com/php/eventoUser.php?id=${novoId}`)
    .then(resp => resp.json())
    .then(resp => this.setState({'eventUser':resp}))

  }

  render(){
    const { novoId } = this.props

    if(novoId && this.state.eventUser.length !== 0){
      return(
        <>
        <div className="flex bet margin fwrap">
          {this.state.eventUser && this.state.eventUser.map(event => (
            <MiniEvento 
              key={event.id_evento}
              id={event.id_evento}  
              imagem={event.imagem} 
              nome={event.nome_evento}
              modalidade = {event.modalidade}
            />
          ))}
          </div>
        </>
      )

    }else if(novoId && this.state.eventUser.length === 0){
      return <NaoPossuiEvento/>
      
    }else{
      return <ErroEfetuarLoginEdit />
    }
    
  }
}

const mapState = store =>({
  novoId: store.IdLogin.novoId
})

export default connect(mapState)(EventosUser)