import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
//import { makeStyles, AppBar, Toolbar, Typography } from '@mui/material'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
      <NavBar />
      <Switch>
        
        <ItemListContainer />
        <ItemDetailContainer />
        <ItemCount />
        </Switch>
        
                
       
      </header>
      </BrowserRouter>
      <img src={'./logoCanhijo.png'}/>
    </div>
  );
}

export default App;
