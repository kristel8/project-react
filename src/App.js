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
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>

        <NavbarContainer />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/productos/:catId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path='/cart' element={ <Cart/> } />
          <Route path='/checkout' element={ <Checkout/> } />
          {/* <Route path='/404' element={ <Error404/> }/> */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
      </CartProvider>

    </>


  );
}

export default App;
