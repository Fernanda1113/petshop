import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import useCartContext from '../../Context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const stocks = 10
    const initial = 1
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const { addItem } = useCartContext()

    const itemQuantity = (count) => {
        setQuantity(count)
    }

    const addToCart = () => {
        addItem(item, quantity)
        setAdd(true)
    }
return (
        
    <div className="productDetail">
        <div className="imgDetail">
            <img src={item.img} alt={item.id} width="350" />
        </div>
        <div className="infoDetail">
            <h3>{item.name}</h3>
            <p className="card-description">{item.description}</p>
            <p className="card-price">{item.price}</p>
            <ItemCount stocks={stocks}
                stock={stocks}
                initial={initial}
                onAdd={itemQuantity}
            />
            <button className="btn" onClick={addToCart}>Agregar al Carrito</button>
            {add ? <Link to= {'/cart'}><button className="btn">Comprar Ahora</button></Link> : null}
        </div>
    </div>
       
)
}
{/* 
const ItemDetail = ({producto}) => {
    const onAdd = () =>{
        console.log('Producto Agregado')
    }
    return(
        <article className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>
                    {producto?.name}
                </h2>
            </header>
            <picture>
                <img src={producto?.img} alt={producto?.name} className='imgItem'/>
            </picture>
            <section>
                <p className='info'>
                    Categoría: {producto?.category}
                </p>
                <p className='info'>
                    Descripción: {producto?.description}
                </p>
                <p className='info'>
                    Precio: {producto?.price}
                </p>

            </section>
            <ItemCount onAdd={onAdd}  />
        </article>
    )
}
*/}

export default ItemDetail