import './CartWidget.css';
import {CartFill} from "react-bootstrap-icons";
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <button className={'cartButton'}>
      <CartFill color={'#34495E'} size={20}/>
      <span className={'cartCounter'}>{getQuantity()}</span>
    </button>
  )
}

export default CartWidget