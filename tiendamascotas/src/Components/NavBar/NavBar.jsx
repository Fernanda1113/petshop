import React from 'react'
import {useState, useEffect} from 'react'
import './NavBar.css'
import Button from '@mui/material/IconButton'
import CartWidget from '../CartWidget/CartWidget'
import {getCategorias} from '../../productos'


const NavBar = () => {
  const[categorias, setCategorias] = useState([])
  useEffect(() =>{
    const listaCategorias = getCategorias()
    listaCategorias.then(cat => {
      setCategorias(cat)
    })
    return () => {
      setCategorias([])
    }
  }, [])
    return (
        <nav className="navBar">
          <div>
            <h3>CanHijos</h3>
          </div>
        <div className="CarritoContainer">
        {categorias.map(c => <button key={c.id} className='CategoryName'>{c.description}</button>)}
        </div> 
          <CartWidget /> 
        <Button color="secondary" variant="contained">Login</Button>        
      </nav>
    )
}

export default NavBar
