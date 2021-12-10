import React from 'react'
import ItemDetail from './ItemDetail'
import { getItem } from '../../productos'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    useEffect(() =>{
        const list = getItem()
        list.then (list => {
            setProductos(list)
        })
        return (() =>{
            setProductos([])
            
        })        
    }, []);
    return (
        <div>
            <ItemDetail id= {1} description= 'Perfume para mascota' category='gato'/>
        </div>
    )
    
}

export default ItemDetailContainer