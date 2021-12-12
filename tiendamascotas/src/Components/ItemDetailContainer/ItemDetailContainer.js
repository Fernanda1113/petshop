import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductosById } from '../../productos'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
        const [productos, setProductos] = useState()
        const { paramId } = useParams()
        console.log(paramId)
        useEffect(() => {
            getProductosById(paramId).then(item => {
                setProductos(item)
            }).catch(err  => {
                console.log(err)
            })
    
            return (() => {
                setProductos()
            })
    
        }, [paramId])
    
    
        return (
            <div className="ItemDetailContainer" >
                <ItemDetail  productos={productos}/>
            </div>
        )    
        
    }


export default ItemDetailContainer
