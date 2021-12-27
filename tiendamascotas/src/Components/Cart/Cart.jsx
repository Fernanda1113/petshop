import React from 'react';
import './Cart.css'
import {Link} from 'react-router-dom'
import useCartContext from '../../Context/CartContext'

const Cart = () => {
    const {products, removeItem, totalProductsPrice, isInCart} = useCartContext()
    

    const handleRemove = (i) => {
        removeItem(i.id)
    }
    
    console.log(isInCart)
     
    return(
        <section className="cart">
            <div className="headCart">
                <h2>Carrito de Compras</h2>
                <Link to="/" exact>
                    <button className = "continueCart">Continuar Compra</button>
                </Link>
            </div>
            <div className="compraCart">
                
                {products.map((item) => (
                    <div className="productoCart">
                        <div className="cartImg">
                            <img src={item.img} alt={item.id}/>
                        </div>
                        <div className="productoCartDetail">{item.name}</div> 
                        <div className="cartContador">
                            <input type="text" placeholder={item.quantity}/>
                        </div>
                        <div className="cartPrice">{item.price}</div>
                        <div className="cartRemoval">
                            <button class="removalCart" onClick={()=>handleRemove(item)}>X</button>
                        </div>
                        <div className="productoCartPrice">{item.quantity*item.price}</div>
                    </div>
                    )
                )}

            </div>

            {isInCart ?
                <div className="cartTotal" >
                    <div class="cartTotalItem">
                        <label>Subtotal</label>
                        <div class="cartValue">{totalProductsPrice()}</div>
                    </div>
                    <div class="cartTotalItem">
                        <label>Costo de envío</label>
                        <div class="cartValue">5000</div>
                    </div>
                    <div class="cartTotalItem">
                        <label>Total a Pagar</label>
                        <div class="cartValue">{totalProductsPrice() + 5000}</div>
                    </div>
                </div>
                : "...No hay productos agregados al Carrito..."
            }
        </section>

    )
}
export default Cart;
