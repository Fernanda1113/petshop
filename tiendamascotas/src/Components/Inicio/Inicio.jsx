import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Inicio= ({greeting}) => {
    return(
        <section className="inicio">
            <div>
            <h1>{greeting}</h1>
            <span>¡Bienvenido de nuevo!</span>
            </div>
            <ItemListContainer/>
        </section>       
    )    
}

export default Inicio
