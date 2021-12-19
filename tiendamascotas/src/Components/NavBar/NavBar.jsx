import React from 'react'
import './NavBar.css'
import Button from '@mui/material/IconButton'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="navBar">
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
