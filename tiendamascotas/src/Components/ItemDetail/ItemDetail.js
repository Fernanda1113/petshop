import React from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

const InputCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleChange = ({target}) => {
        if(target.value <= maxQuantity && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)} className='addCart'>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    const decremento = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
           <button onClick={decremento} className='addCart'>-</button>
            <button onClick={incrementar} className='addCart'>+</button>
            <button onClick={() => onConfirm(count)} className='addCart'>Agregar al carrito</button> 
            {/*<ItemCount />*/}
        </div>
    )
}

const ItemDetail = ({ producto, inputType = 'input' }) => {

    const Count = inputType === 'input' ? InputCount : ButtonCount

    const addToCart = (count) => {
        console.log(`Agregado al carrito ${count}`)
    }

    return (
        <article className="cardItem">
            <header className="header">
                <h2 className="itemHeader">
                    {producto?.name}
                </h2>
            </header>
            <picture>
                <img src={producto?.img} alt={producto?.name} className="imgItem"/>
            </picture>
            <section>
                <p className="Information">
                    Categoria: {producto?.category}
                </p>
                <p className="Information">
                    Descripción: {producto?.description}
                </p>
                <p className="Information">
                    Precio: {producto?.price}
                </p>
            </section>           
            <footer>
             <Count onConfirm={addToCart} maxQuantity={producto?.stock}/>
            </footer>
        </article>
    )
}

export default ItemDetail