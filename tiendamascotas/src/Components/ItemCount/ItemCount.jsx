import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({stocks,  initial, onAdd}) =>{
const [count, setCount] = useState(initial)
   
const increase = () => { 
    if(count < stocks){
        setCount(count + 1)       
    }
}

const decrease = () => { 
    if(count > initial){
        setCount(count - 1)
    }
}
onAdd(count)

    return(
        <div className="cardCount">
            <h5>Cantidad:</h5>
            <div className="cardBajo">
              <button className="menos" onClick={decrease} abled={count === initial} >-</button>
              <div className="contador">{count}</div>
              <button className="mas" onClick={increase} abled={count === stocks}>+</button>
            </div>
            <button className="add" onClick={onAdd}>Agregar al Carrito</button>

        </div>
    )
}


export default ItemCount