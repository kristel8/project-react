import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.scss';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Nosotros } from './components/Nosotros';
import { NavbarContainer } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>

        <NavbarContainer />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/productos/:catId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />

          {/* <Route path='/404' element={ <Error404/> }/> */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

        <Footer/>
      </BrowserRouter>

    </>


  );
}

export default App;
