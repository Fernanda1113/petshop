import React from "react"
import { Link } from 'react-router-dom'
import './Item.css'



const Item = ({item: { id, name, description, img }}) => {
    return(
        <div className="card-product">
            <img src={img} alt={id} width="350" />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`/item/${id}`}> <button>Ver Detalle</button> </Link>
            
        </div>
    )
    
}
export default Item

{/*const Item = ({producto}) => {
    return (
        <article className='ItemCard'>
            <header className='ItemContainer'>
            <h2 className='HeaderItem'>
                {producto.name}
            </h2>
            </header>
            <picture>
            <img src={producto.img} alt={producto.name} className='ImgItem'/>
            </picture>
            <section>
            <p className='Information'>
                Categoria: {producto.category}
            </p>
            <p className='Information'>
                Valor: {producto.price}
            </p>
            </section>
        <footer>
            <Link className='buttonSeeProduct' to={'/detail/${producto.id}'}>Ver el producto</Link>
        </footer>
            
        </article>
    )
}


export default Item*/}
