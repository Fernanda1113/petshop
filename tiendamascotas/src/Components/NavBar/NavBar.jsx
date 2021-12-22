import React, {useState} from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  const [links, setLinks] = useState([
      {nombre: 'Somos CanHijos', url: '/somosCanHijos'}, 
      {nombre: 'Juguetes', url: '/juguetes/perro'}, 
      {nombre: 'Contacto', url: '/contacto'}
    ])
  
  return(
      <header >
          <nav className="itNavbar">
              <NavLink to='/' className="lgNavbar">
              <img src={'./logCanhijo96.png'}/></NavLink>
 
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


{/*const NavBar = () => {
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
}*/}

export default NavBar
