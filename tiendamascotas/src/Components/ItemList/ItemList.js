import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <ul className='ListItemList'>
            {productos.map(producto =><Item key={producto.id} producto={producto}/>)}
        </ul>
    )
}

export default ItemList
