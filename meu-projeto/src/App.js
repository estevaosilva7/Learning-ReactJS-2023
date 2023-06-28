import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Ryan"

  return (
    <div className="App">


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
    </div>
  );
}

export default App;
