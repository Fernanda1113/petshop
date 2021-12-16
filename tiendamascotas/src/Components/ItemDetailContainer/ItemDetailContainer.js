import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductosById } from '../../productos'
import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
        const [productos, setProductos] = useState()
        const [inputType, setInputType] = useState('input')
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
                <button onClick={() => setInputType('input')} className='btnInput'>Input</button>
                <button onClick={() => setInputType('button')} className='btnInput'>Button</button>
                <ItemDetail  productos={productos} inputType={inputType}/>
            </div>
        )    
        
    }


export default ItemDetailContainer
