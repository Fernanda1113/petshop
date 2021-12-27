import React from "react";
import Item from "../Item/Item";
import './ItemList.css'

const ItemList =({list}) => {
    return(
        <section className="productoList">
            {list.map(product => 
                <Item key={product.id} item={product}/>
            )}
        </section>
        
    )
}

export default ItemList;

