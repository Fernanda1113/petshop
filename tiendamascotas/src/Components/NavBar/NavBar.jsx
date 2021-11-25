import React from 'react'
import './NavBar.css'
import Button from '@mui/material/IconButton'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <ul className="navBar">
        <li className="CategoryName"><Button color="secondary" variant="contained">Home</Button></li>
        <li className="CategoryName"><Button color="secondary" variant="contained">Productos</Button></li>
        <li className="CategoryName"><Button color="secondary" variant="contained">Descuentos</Button></li>
        <li className="CategoryName"><Button color="secondary" variant="contained">Adopción</Button></li>
        <div className="CarritoContainer">
          <CartWidget />
          <Button color="secondary" variant="contained">Login</Button>
        </div>  
        
      </ul>
    )
}

export default NavBar
