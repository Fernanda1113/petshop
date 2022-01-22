import React, { useState } from 'react'
import './Formulario.css'
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const Formulario = ({ createOrder }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        console.log(form)
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }
    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )


    return (
        <div>
            <h2 className="title">Datos de Contacto</h2>
            <form className="form">
                <div className="formInput">
                    <BadgeIcon />
                    <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text" />
                </div>
                <div className="formInput">
                    <AlternateEmailIcon />
                    <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email" />
                </div>
                <div className="formInput">
                    <PhoneIphoneIcon />
                    <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text" />
                </div>
                <div className="formInput">
                <MarkEmailReadIcon />
                    <input placeholder="Confirma Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email" />
                </div>
            </form>
            <button type="submit" className="finalize" onClick={finalizePurchase}>Finalizar</button>

        </div>
    )
}
export default Formulario