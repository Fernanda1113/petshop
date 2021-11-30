import React from 'react'

const Item = ({product}) => {
    return (
        <div className='ItemCard'>
            <div className='ItemContainer'>
            <h2 className='HeaderItem'>
                {product.name}
            </h2>
            </div>
            <img src={product.img} alt={product.name} className='ImgItem'/>
            <p className='Information'>
                Categoria: {product.category}
            </p>
            <p className='Information'>
                Valor: {product.price}
            </p>
            <button>Ver el producto</button>
        </div>
    )
}

export default Item
