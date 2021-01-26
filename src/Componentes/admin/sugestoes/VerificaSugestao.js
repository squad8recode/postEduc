import React from 'react'
import Sugestao from './sugestao'
import { Container, Table } from 'react-bootstrap'

export default class VerificaSugestao extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      sugestoes: [],

    }
  }

  componentDidMount(){
    fetch('https://phpback.ddns.net/selectsugestoes.php')
    .then(resposta => resposta.json())
    .then(resposta => this.setState({'sugestoes':resposta}))
  }

  render(){
    return(
      <Container>
        <Table responsive striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>
                id
              </th>
              <th>
                nome
              </th>
              <th>
                email
              </th>
              <th>
                sugestao
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.sugestoes && this.state.sugestoes.map(sugestao => (
              <Sugestao
                key={sugestao.id_sugestao}
                id={sugestao.id_sugestao}
                nome={sugestao.nome}
                email={sugestao.email}
                sugestao={sugestao.sugestao}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    )
  }
}