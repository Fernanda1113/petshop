import React, {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({onAdd, stock}) => {
    const[counter, setCounter] = useState(1);
const Incremento =() => {
    if(counter < 10)
    setCounter(counter + 1);
}
const Decremento =() => {
    if(counter > 1)
    setCounter(counter -1);
}

    return (
        <div>
            <span>{counter}</span>
            <button className='menos' onClick={Decremento}> - </button>
            <button className='mas' onClick={Incremento}> + </button>     
        <div>
            <button className='add' onClick={onAdd}>Agregrar Producto</button>
        </div>
        <span>Stock: {stock}</span>
        </div>
    )
}

export default ItemCount
