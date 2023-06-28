import './App.css';
import HelloWord from './components/HelloWord';

function App() {

  const name = "Estevão" 
  const newName = name.toUpperCase()

  function soma(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1> Olá React</h1>
      <p> Meu primeiro App</p>
      <p> Meu nome é {newName}</p>
      <p> Soma: {1 + 2} </p>
      <p> Soma: {soma(7,7)} </p>
      <img src={url} alt="Minha imagem"/>
      < HelloWord/>
    </div>
  );
}

export default App;
