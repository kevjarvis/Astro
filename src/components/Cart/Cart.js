import CartProduct from '../CartProduct/CartProduct';
import CartSummary from '../CartSummary/CartSummary';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const ProductsNotFound = () => {

  const styles = {
    textAlign: 'center'
  }

  return (
    <div>
      <h1 style={styles}>No hay productos</h1>
      <p style={styles}>Ve al <Link to="/" >catálogo</Link> para añadir productos</p>
    </div>
  )
}

const Cart = () => {

  const { cart } = useContext(CartContext);

  return (
    <div className='Cart'>
      <section className='CartSection'>
        { cart.length ? 
            cart.map(prod => <CartProduct key={prod.id} {...prod} />) :
            <ProductsNotFound /> }
      </section>
      <CartSummary />  
    </div>
    
  ) 
}

export default Cart;