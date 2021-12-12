import React from 'react'


const ItemDetail = ({producto}) => {
    return(
        <article className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>
                    {producto.name}
                </h2>
            </header>
            <picture>
                <img src={producto.img} alt={producto.name} className='imgItem'/>
            </picture>
            <section>
                <p className='info'>
                    Categoría: {producto.category}
                </p>
                <p className='info'>
                    Descripción: {producto.description}
                </p>
                <p className='info'>
                    Precio: {producto.price}
                </p>
            </section>
        </article>
    )
}

export default ItemDetail