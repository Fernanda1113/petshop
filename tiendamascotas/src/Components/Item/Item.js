import React from 'react'
import './Item.css'

const Item = ({producto}) => {
    return (
        <div className='ItemCard'>
            <div className='ItemContainer'>
            <h2 className='HeaderItem'>
                {producto.name}
            </h2>
            </div>
            <img src={producto.img} alt={producto.name} className='ImgItem'/>
            <p className='Information'>
                Categoria: {producto.category}
            </p>
            <p className='Information'>
                Valor: {producto.price}
            </p>
            <button className='ItemButton'>Ver el producto</button>
        </div>
    )
}

export default Item
