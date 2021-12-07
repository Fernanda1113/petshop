import React from 'react'


const ItemDetail = (productos) => {
    return(
        <div>
            <h2>{productos.id}</h2>
            <p>{productos.description}</p>
            <p>{productos.category}</p>
        </div>
    )
}

export default ItemDetail