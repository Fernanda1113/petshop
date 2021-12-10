import React from 'react'


const ItemDetail = (productos) => {
    return(
        <article className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>
                    {productos.name}
                </h2>
            </header>
            <picture>
                <img src={productos.img} alt={prodcut.name} className='imgItem'/>
            </picture>
            <section>
                <p className='info'>
                    Categoría: {productos.category}
                </p>
                <p className='info'>
                    Descripción: {productos.description}
                </p>
                <p className='info'>
                    Precio: {productos.price}
                </p>
            </section>
        </article>
    )
}

export default ItemDetail