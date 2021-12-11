import React from 'react'
import ItemDetail from './ItemDetail'
import { getItem, getProductos } from '../../productos'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState()
    const {paramId} = useParams()
        console.log(paramId)
    useEffect(() =>{
        getProductos(paramId)= thenItem =>{
            setProductos(item)
        }).catch(err =>{
            console.log(err)
        })
        return (() =>{
            setProductos()
        })
        },[paramId])
        return(
            <div className='ItemDetailContainer'>
                <ItemDetail product={productos}/>
            </div>
        )
}

export default ItemDetailContainer
