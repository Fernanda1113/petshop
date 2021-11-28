import React from 'react'
//import Typography from '@mui/material/Typography'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({name}) => {
    const onAdd = () =>{
        console.log('Producto agregado');
    }
    return (
        <div>
            <p>{name}</p>
            <ItemCount onAdd={onAdd} stock='10'/>
        </div>
    )
}

export default ItemListContainer
