import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProductos } from '../../productos'

const ItemListContainer = ()=> {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const list = getProductos()
        
        list.then(item => {
            setProductos(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProductos([])
        })

    }, [])

    return (
        <div className="ItemListContainer" onClick={() => console.log('Click en ILC')} >
            <ItemList  productos={productos}/>
        </div>
    )    
    
}

export default ItemListContainer