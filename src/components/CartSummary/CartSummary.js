import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartSummary.css';

const CartSummary = () => {

  const {cart} = useContext(CartContext);

  const totalOrder = cart.reduce((total, prod) => total + prod.quantity * prod.price, 0);
  const shipping = cart.length ? 80 : 0;

  return (
    <aside className='CartSummary'>
      <h2>Resumen</h2>

      <div className='CartSummary__infoSlot'>
        <strong>Total de la órden</strong>
        <span>$ {totalOrder}</span>
      </div>

      <div className='CartSummary__infoSlot'>
        <strong>Envío</strong>
        {/* Esto es solo para simulación */}
        <span>$ {shipping}</span>
      </div>

      <div className='CartSummary__infoSlot CartSummary__infoSlot--total'>
        <strong>Total</strong>
        <strong>$ {totalOrder+shipping}</strong>
      </div>

    </aside>
  )
}

export default CartSummary;