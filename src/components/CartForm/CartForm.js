import { useState } from 'react'
import swal from 'sweetalert'
import './CartForm.css'

const CartForm = ({ onSubmit }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const isInputValid = (input) => {
    var regName = /^[a-zA-Z]/;
    if(!regName.test(input)){
        return false;
    }else{
        return true;
    }
  }

  const isPhoneValid = (phone) => {
    var regPhone = /^\d+$/;
    if (regPhone.test(phone)) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isInputValid(name) && isInputValid(email) && isPhoneValid(phone)) {
      onSubmit(name, email, phone)
    } else {
      swal('Datos mal ingresados', 'Ingresa nuevamente tus datos reales', 'error');
    }

  }

  return (
    <div className="CartFormContainer">
      <form className='CartForm' onSubmit={handleSubmit}>
        <label htmlFor="userName">Nombre</label>
        <input type="text" onChange={(e) => setName(e.target.value)} name="userName" id="userName" />

        <label htmlFor="userMail">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} name="userMail" id="userMail" />

        <label htmlFor="userPhone">Celular</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} name="userPhone" id="userPhone" />

        <button className='orderButton' type='submit'>Comprar</button>
      </form>


    </div>
    
  )
}

export default CartForm