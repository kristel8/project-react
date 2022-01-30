import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/NavBar/NavBar';

function App() {
  return (
      <>
        <Navbar/>
        <ItemListContainer greeting={'Hola, te esperábamos!'}/>
      </>


  );
}

export default App;
