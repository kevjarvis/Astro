import './CartWidget.css';
import {CartFill} from "react-bootstrap-icons";

const CartWidget = () => {
  return (
    <button className={'cartButton'}>
      <CartFill color={'#34495E'} size={20}/>
      <span className={'cartCounter'}>0</span>
    </button>
  )
}

export default CartWidget