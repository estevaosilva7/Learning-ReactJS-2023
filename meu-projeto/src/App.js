import './App.css';
import OutraLista from './OutraLista';



function App() {
  const meusItens = ["React", "Vue", "Anguar"]

  

  return (
    <div className="App">
      <h1> Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    
  
    </div>
  );
}

export default App;
