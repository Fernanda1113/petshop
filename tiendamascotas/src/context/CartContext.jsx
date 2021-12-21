import React, {createContext, useState, useEffect} from 'react'
import {productos} from '../productos'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [allProductos, setAllProductos] = useState([]);

    useEffect(() => {
        setTimeout(() =>{
            const promise = new Promise ((resolve, reject) => {
                resolve(productos);
            });
            promise.then(productos => {
                setAllProductos(productos);
                setLoading(false)
            })
        }, 500);
    }, [])
    
    const stocks = 10
    const inicial = 0
    const [stock, setStock] = useState(stocks)
    const [counter, setCounter] = useState(inicial)
    const [add, setAdd] = useState(false)
    const [toggleItem, setToggleItem] = useState(flase)
    const [cart, setCart] = useState([])

    const incrementar = () => {
        if(counter < stocks) {
            setCounter(counter + 1)
            setStock(stock -1)
        }
    }
    const decrementar = () => {
        if(counter > inicial) {
            setCounter(counter - 1)
            setStock(stock + 1)
        }
    }

    useEffect (() =>{
        setAdd(false)
    }, [toggleItem])

    const removeItem = (e) => {
        const itemDeleted = cart.filter(function(value, i, array){
            if (value.id !== e.target.id){
                return array
            }
        })
        setCart(itemDelete)
    }
    return (
        <CartContext.Provider value = {{
            allProductos: allProductos,
            loading: loading,
            setLoading: setLoading,
            toggleItem: toggleItem,
            inicial: inicial,
            stock: stock,
            stocks: stocks,
            setStock: setStock,
            incrementar: incrementar,
            decrementar: decrementar,
            add: add,
            setAdd: setAdd,
            cart: cart,
            setCart: setCart,
            removeItem: removeItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider    

