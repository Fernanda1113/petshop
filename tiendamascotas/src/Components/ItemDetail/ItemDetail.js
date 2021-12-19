import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({producto}) => {
    const onAdd = () =>{
        console.log('Producto Agregado')
    }
    return(
        <article className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>
                    {producto?.name}
                </h2>
            </header>
            <picture>
                <img src={producto?.img} alt={producto?.name} className='imgItem'/>
            </picture>
            <section>
                <p className='info'>
                    Categoría: {producto?.category}
                </p>
                <p className='info'>
                    Descripción: {producto?.description}
                </p>
                <p className='info'>
                    Precio: {producto?.price}
                </p>

            </section>
            <ItemCount onAdd={onAdd}  />
        </article>
    )
}

export default ItemDetail