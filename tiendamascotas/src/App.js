import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import Button from '@mui/material/Button'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//import { makeStyles, AppBar, Toolbar, Typography } from '@mui/material'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
        <img src={'./logoCanhijo.png'}/>
        
       <Button>
         Aceptar
       </Button>
      </header>
    </div>
  );
}

export default App;
