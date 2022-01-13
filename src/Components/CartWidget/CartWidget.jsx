import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton'
import useCartContext from '../../Context/CartContext'
import './CartWidget.css'
import {Link} from 'react-router-dom'


const CartWidget = () => {
     const {cartWidgetCount} = useCartContext;
   
        return(
        <>
        <Link to= {'/cart'} className='cartWidget'>
            <div className="cartIcon">
        <IconButton color="primary" className="Carrito" aria-label="add to shopping cart" size="large">
            <ShoppingCartIcon />
        </IconButton>
        <span className="cartItem">{cartWidgetCount}</span>
                </div>
        </Link>
        </>
        )
}

export default CartWidget
