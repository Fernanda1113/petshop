import React, {useState} from 'react';
import './ItemCount.css'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
              <button className="menos" onClick={decrease} abled={count === initial}> <RemoveCircleOutlineIcon /></button>
              <div className="contador">{count}</div>
              <button className="mas" onClick={increase} abled={count === stocks}><AddCircleOutlineIcon /></button>
            </div>
        </div>
    )
}


export default ItemCount