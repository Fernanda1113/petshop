import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar"
import Principal from './Components/Principal/Principal'
import {StoreProvider} from './Context/CartContext'


const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
      <header className="App-header">
      <NavBar />
    <Principal />
        
      <img  className='logo' src='./logoCanhijo.png' alt='Logo de la pagina'/>
      <p>Fer_nandapp</p>
       
      </header>
      </BrowserRouter>

    </StoreProvider>
  );
}

export default App;
