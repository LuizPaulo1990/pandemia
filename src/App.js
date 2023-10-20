import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/home/Home';
import TabelaPrecos from './components/pages/tabela_preços/TabelaPrecos';
import Itens from './components/pages/itens/Itens';
import Pets from './components/pages/pets/Pets';
import Lacaios from './components/pages/lacaios/Lacaios';
import Contato from './components/pages/contato/Contato';
import Adm from './components/pages/adm/Adm';
import MenuLateral from './components/layout/MenuLateral';
import BotaoMenuResponsivo from './components/layout/BotaoMenuResponsivo';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MenuLateral />
        <BotaoMenuResponsivo/>
          <Routes>
            <Route exect path='/' element={<Home />}></Route>
            <Route exect path='/precos' element={<TabelaPrecos />}></Route>
            <Route exect path='/itens' element={<Itens />}></Route>
            <Route exect path='/pets' element={<Pets />}></Route>
            <Route exect path='/lacaios' element={<Lacaios />}></Route>
            <Route exect path='/contato' element={<Contato />}></Route>
            <Route exect path='/adm' element={<Adm />}></Route>
          </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
