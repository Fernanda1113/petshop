import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton'


const CartWidget = () => {
    return (
        <IconButton color="primary" className="Carrito" aria-label="add to shopping cart" size="large">
        <ShoppingCartIcon />
    </IconButton>
    )
}

export default CartWidget
