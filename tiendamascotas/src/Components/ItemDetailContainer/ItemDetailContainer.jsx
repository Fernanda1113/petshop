import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Products from '../../productos';
import ItemDetail from '../ItemDetail/ItemDetail' ;

const getItem = (productId) => {
    return new Promise(result =>  setTimeout(() => 
        { result(Products.find(product =>
            product.id===parseInt(productId)))  
        },500)) 
} 

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    
    const {productId} = useParams();
    
    useEffect(() =>{
        setLoading(true);
        getItem(productId).then((product) => {
            setItem(product);
            setLoading(false)    
        });

    }, [productId])

    
    return(
        <>
        
        {loading ? "Cargando Información..." : <ItemDetail item={item} />}

        </>
        
)   
}
export default ItemDetailContainer;
{/*
const ItemDetailContainer = () => {
    
    const {loading, allProductos} = useContext()
    console.log(allProductos)
    const productoId = useParams()
    console.log(productoId)
                
    return(
        <>
            { loading ? 
                "Cargando Información..." : allProductos.map((producto)=>{
                    return(
                        producto.id ===productoId.id ? 
                        <ItemDetail 
                            key={producto.id}
                            item={{
                                    id: producto.id,
                                    name : producto.name,
                                    description : producto.description,
                                    price : producto.price,
                                    productId: productoId.id
                                }}
                        /> 
                        : "null"
                    )
                })
            }
        </>
    )   
}
export default ItemDetailContainer;*/}