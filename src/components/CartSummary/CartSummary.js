import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartSummary.css';

const CartSummary = () => {

  const {getTotalWithShipping, shipping, getTotal} = useContext(CartContext);

  return (
    <aside className='CartSummary'>
      <h2>Resumen</h2>

      <div className='CartSummary__infoSlot'>
        <strong>Total de la órden</strong>
        <span>$ {getTotal()}</span>
      </div>

      <div className='CartSummary__infoSlot'>
        <strong>Envío</strong>
        {/* Esto es solo para simulación */}
        <span>$ {shipping}</span>
      </div>

      <div className='CartSummary__infoSlot CartSummary__infoSlot--total'>
        <strong>Total</strong>
        <strong>$ {getTotalWithShipping()}</strong>
      </div>

    </aside>
  )
}

export default CartSummary;