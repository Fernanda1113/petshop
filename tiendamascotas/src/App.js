import './App.css';
import { BrowserRouter} from 'react-router-dom'
import NavBar from "./Components/NavBar/NavBar"
import Principal from './Components/Principal/Principal'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
      <NavBar />
    <Principal />
        
      <img src='./logoCanhijo.png' alt='Logo de la pagina'/>
      <p>Fer_nandapp</p>
       
      </header>
      </BrowserRouter>

    </div>
  );
}

export default App;
