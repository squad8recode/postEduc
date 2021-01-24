import Menu from './Componentes/Menu';
import Rodape from './Componentes/Rodape';
import Rotas from './Rotas';

import './App.css';

import {BrowserRouter} from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <div className="container-pagina">
            <Container fluid>
              <Rotas/>
            </Container>
          </div>
        </main>
        <footer>
          <Rodape />
        </footer>
      </div>
    </BrowserRouter>
)}

export default App;
