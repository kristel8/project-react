import './App.css';
import { NavbarContainer } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
      <>
        <NavbarContainer/>
        <ItemListContainer/>
      </>


  );
}

export default App;
