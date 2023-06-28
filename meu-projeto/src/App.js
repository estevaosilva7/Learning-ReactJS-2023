import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Ryan"

  return (
    <div className="App">
      <h1> Testando CSS</h1>
      <Frase />
      <Frase />
      < HelloWord/>
      <SayMyName nome="Estevão"/>
      <SayMyName nome="Carlos"/>
      <SayMyName nome={nome}/>

      <Pessoa
      nome = "Estevão"
      idade = "24"
      profissao = "Programador"
      imagem ="https://via.placeholder.com/150"
      />

      <List/>
    </div>
  );
}

export default App;
