import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import Sugestao from '../../Componentes/admin/sugestoes/sugestao'
import NaoTemPermissao from '../../Componentes/Modal/naoTemPermissao';

class VerificaSugestao extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      sugestoes: [],

    }
  }

  componentDidMount(){
    fetch('https://sarcastic-punch.000webhostapp.com/php/selectsugestoes.php')
    .then(resposta => resposta.json())
    .then(resposta => this.setState({'sugestoes':resposta}))
  }

  render(){
		const { novoId } = this.props
		if (novoId !== '11') {
			return <NaoTemPermissao />;
    } else {
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
}
const mapState = (store) => ({
	novoId: store.IdLogin.novoId,
});

export default connect(mapState)(VerificaSugestao)