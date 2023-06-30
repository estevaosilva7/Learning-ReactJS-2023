import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


function App() {
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} > </Route>
      </Routes>
      <Routes>
        <Route path="/empresa" element={<Empresa />} > </Route>
      </Routes>
      <Routes>
        <Route path="/contato" element={<Contato />} > </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;
