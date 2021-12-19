import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
      <NavBar />
      <Switch>
        <Route exact path='/'>
        <ItemListContainer />
        </Route>
        <Route path='/category/:categoryId'>
        <ItemListContainer />
        </Route>
        <Route path='/detail/:paramId'>
        <ItemDetailContainer />
        </Route>
        <Route path='/count'>
        <ItemCount />
        </Route>
      </Switch>
        
      <img src='./logoCanhijo.png' alt='Logo de la pagina'/>
      <p>Fer_nandapp</p>
       
      </header>
      </BrowserRouter>

    </div>
  );
}

export default App;
