import React, {useState} from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  const [links, setLinks] = useState([
      {nombre: 'Somos CanHijos', url: '/somosCanHijos'}, 
      {nombre: 'PerrHijos', url: '/category/perrhijos'},
      {nombre: 'GatHijos', url: '/category/gathijos'}
    ])
  
  return(
      <header>
          <nav className="itNavbar">
              <NavLink to='/' className="lgNavbar">
              <img src={'./logCanhijo96.png'} alt={'logo'}/>
              </NavLink> 
              <ul className="mnNavbar">
                  {links.map((link, i) => {
                  return (<li  key={i}><NavLink className="lkNavbar" to={link.url}>{link.nombre}</NavLink></li>)
                  })}
                  <CartWidget/>
              </ul>
          </nav>
      </header>      
  )
}
export default NavBar
