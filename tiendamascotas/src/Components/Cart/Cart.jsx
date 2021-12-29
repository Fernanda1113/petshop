import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom'
import useCartContext from '../../Context/CartContext'
import firebase from "firebase/app"
import "firebase/firestore"
import { getFirestore } from '../Firebase/firebase'
import Formulario from '../Formulario/Formulario'

const Cart = () => {
    const { products, removeItem, totalProductsPrice, cleanListCart } = useCartContext()
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    const handleRemove = (i) => {
        removeItem(i.id)
    }

    const handleFinalize = () => {
        setShowForm(true)
    }

    const createOrder = (buyer) => {
        const db = getFirestore()
        const orders = db.collection('order')

        const newOrder = {
            buyer,
            products,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalProductsPrice()
        }

        orders.add(newOrder).then(({ id }) => {
            setOrderId(id)
            setConfirmation(true)
            cleanListCart()
        }
        ).catch((e) => { console.log(e) })

    }

    console.log("Confirmacion", confirmation)
    console.log("orderId", orderId)

    if (products.length === 0 && orderId === "") {
        return (
            <div className="cart">
                <div className="headCart">
                    <h3>...No hay productos agregados al Carrito...</h3>
                    <Link to="/" exact>
                        <button className="continueCart">Continuar Comprando</button>
                    </Link>
                </div>

            </div>
        )
    } else if (orderId && confirmation) {
        return (
            <div className="cart">
                <div className="headCart">
                    <h3>Su Orden No. <span className="validation">{orderId}</span> ha sido confirmada</h3>
                    <Link to="/" exact>
                        <button className="continueCart">Continuar Comprando</button>
                    </Link>
                </div>
            </div>
        )
    }

return (
    <section className="cart">
        <div className="headCart">
            <h2>Carrito de Compras</h2>
            <Link to="/" exact>
                <button className="continueCart">Continuar Compra</button>
            </Link>
        </div>
        <div className="compraCart">

    {products.map((item) => (
        <div className="productoCart">
            <div className="cartImg">
                <img src={item.img} alt={item.id} />
            </div>
        <div className="productoCartDetail">{item.name}</div>
        <div className="cartContador">
            <input type="text" placeholder={item.quantity} />
        </div>
       <div className="cartPrice">{item.price}</div>
        <div className="cartRemoval">
            <button class="removalCart" onClick={() => handleRemove(item)}>X</button>
        </div>
        <div className="productoCartPrice">{item.quantity * item.price}</div>
    </div>
    )    
    )}

</div>
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
        <div className="cartTotalItem">
            <button className ="checkout" onClick={handleFinalize}>Iniciar Compra</button>
        </div>                    
    </div>
    {showForm ? <Formulario createOrder={createOrder}/> : null}
</section>

    )
}
export default Cart;
