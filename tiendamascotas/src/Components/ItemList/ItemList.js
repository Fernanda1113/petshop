import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos =[]}) => {
    return (
        <ul className='ListItemList' onClick={() => console.log('click')} style={{backgroundColor: 'purple'}}>
            {productos.map(producto =><Item key={producto.id} producto={producto}/>)}
        </ul>
    )
}

export default ItemList
