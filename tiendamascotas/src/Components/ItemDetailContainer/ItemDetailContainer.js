import React, {useContext} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail' ;
import {CartContext} from '../../context/CartContext';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const {loading, allProductos} = useContext(CartContext)
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
export default ItemDetailContainer;