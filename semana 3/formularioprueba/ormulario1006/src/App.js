import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">

  
<h1>Formulario2</h1>

          
<Button type="submit">Enviar</Button>



          <h1>Formulario1</h1>

          <Formulario />



      <header className="App-header">


      
   



        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
