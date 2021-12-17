import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import Button from '@mui/material/Button'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './Components/ItemCount/ItemCount'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
        <ItemCount />
        <img src={'./logoCanhijo.png'}/>
        
       <Button>
         Aceptar
       </Button>
      </header>
    </div>
  );
}

export default App;
