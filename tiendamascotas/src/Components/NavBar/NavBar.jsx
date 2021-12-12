import React from 'react'
import './NavBar.css'
import Button from '@mui/material/IconButton'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="navBar">
        {/*<li className="CategoryName"><Button color="secondary" variant="contained">Home</Button></li>
        <li className="CategoryName"><Button color="secondary" variant="contained">Productos</Button></li>
        <li className="CategoryName"><Button color="secondary" variant="contained">Descuentos</Button></li>
        <li className="CategoryName"><Button color="secondary" variant="contained">Adopción</Button></li>
        <div className="CarritoContainer">
          
          <Button color="secondary" variant="contained">Login</Button>
    </div>  */}
    <Link to='/'><img src={'./logCanhijo96.png'}/></Link>
    
        <div>
          <h3>CanHijos</h3>
        </div>
        <div className='categorias'>
          <Link to='/' className="CategoryName"><Button color="secondary">Productos</Button></Link>
          <Link to='/detail/:detailId' className="CategoryName"><Button color="secondary">Detalles</Button></Link>
          <Link to='/count/:countId' className="CategoryName"><Button color="secondary">Contador</Button></Link>
        </div>
        <CartWidget /> 
      </div>
    )
}

export default NavBar
