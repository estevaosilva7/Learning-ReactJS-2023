import './App.css';
import Eventos from './components/Evento';
import Form from './components/Form';
function App() {

  

  return (
    <div className="App">
      <h1> Testando Eventos</h1>
      <Eventos numero ="1"/>
      <Eventos numero ="2"/>
      <Form/>
    </div>
  );
}

export default App;
