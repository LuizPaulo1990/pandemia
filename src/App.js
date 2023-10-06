import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Itens from './components/pages/Itens';
import Pets from './components/pages/Pets';
import Lacaios from './components/pages/Lacaios';
import Contato from './components/pages/Contato';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exect path='/' element={<Home />}></Route>
          <Route exect path='/itens' element={<Itens />}></Route>
          <Route exect path='/pets' element={<Pets />}></Route>
          <Route exect path='/lacaios' element={<Lacaios />}></Route>
          <Route exect path='/contato' element={<Contato />}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
