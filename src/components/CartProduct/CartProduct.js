import { Cart, Trash } from 'react-bootstrap-icons';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartProduct.css';

const CartProduct = ({id, name, img, price, quantity}) => {

  const { removeItem } = useContext(CartContext);
  const handleRemoveItem = () => removeItem(id);

  return (
    <article className='CartProduct'>
      <img className='CartProduct__img' src={img} alt="Imágen producto" />
      <strong className='CartProduct__name'>{name}</strong>
      <strong className='CartProduct__quantity'>{quantity}</strong>
      <strong className='CartProduct__price'>{`$ ${price}`}</strong>

      <button onClick={handleRemoveItem}>
        <Trash className='CartProduct__trashIcon' />
      </button>

    </article>
  )
}

export default CartProduct;