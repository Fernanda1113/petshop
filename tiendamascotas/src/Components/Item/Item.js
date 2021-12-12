import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <article className='ItemCard'>
            <header className='ItemContainer'>
            <h2 className='HeaderItem'>
                {producto.name}
            </h2>
            </header>
            <picture>
            <img src={producto.img} alt={producto.name} className='ImgItem'/>
            </picture>
            <section>
            <p className='Information'>
                Categoria: {producto.category}
            </p>
            <p className='Information'>
                Valor: {producto.price}
            </p>
            </section>
        <footer>
            <Link className='buttonSeeProduct' to={'/detail/${producto.id}'}>Ver el producto</Link>
        </footer>
            
        </article>
    )
}

export default Item
