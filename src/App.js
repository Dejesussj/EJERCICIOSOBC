import logo from './logo.svg';
import './App.css';
import ComponentA from './componentes/componentA';
//import { Contacto } from './models/contacto.class';

function App() {
  const contacto1 = {
    nombre: 'Santiago',
    apellido: 'Castro',
    email: 'santiago@gmail',
    conectado: false,
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA contacto={contacto1}/>
      </header>
    </div>
  );
}

export default App;
