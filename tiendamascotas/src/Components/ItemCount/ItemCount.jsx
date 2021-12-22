import React from 'react';
import './ItemCount.css'

const ItemCount = ({stock, initial, count, increase, decrease, onAdd}) =>{

    return(
        <div className="cardCount">
            <h5>Cantidad:</h5>
            <div className="cardBajo">
              <button className="menos" onClick={decrease} abled={count === initial} >-</button>
              <div className="contador">{count}</div>
              <button className="mas" onClick={increase} abled={count === stock}>+</button>
            </div>
            <button className="_btn product-add" onClick={onAdd}>Agregar al Carrito</button>

        </div>
    )
}

{/*const ItemCount = ({onAdd, stock}) => {
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
            <button className='menos' onClick={Decremento}> </button>
            <button className='mas' onClick={Incremento}> <svg data-testid="AddCircleIcon"></svg> </button>     
        <div>
            <button className='add' onClick={onAdd}>Agregrar Producto</button>
        </div>
        <span>Stock:10 {stock}</span>
        </div>
    )
}
*/}
export default ItemCount