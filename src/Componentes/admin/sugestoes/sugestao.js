import React from 'react'

export default class Sugestao extends React.Component{
  render(){
    return(
      <>
        <tr>
          <td>
            {this.props.id}
          </td>
          <td>
            {this.props.nome}
          </td>
          <td>
            {this.props.email}
          </td>
          <td>
            {this.props.sugestao}
          </td>
        </tr>
      </>
      
    )
  }
}