import ItemDetail from '../ItemDetail/ItemDetail'
import React from 'react'
import { getItem } from '../../productos'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    useEffect(() =>{
        const list = getItem()
        list.then (list => {
            setProducto(list)
        })
        return (() =>{
            setProducto([])
            
        })        
    }, []);
    return (
        <div>
            <ItemDetail id= {1} description= 'Perfume para mascota' category='gato' producto={producto}/>
        </div>
    )
    
}

export default ItemDetailContainer