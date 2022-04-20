import './ItemDetail.css';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ProductPrice from '../ProductPrice/ProductPrice';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, isInCart } = useContext(CartContext);

  const onAdd = (count) => {
    setQuantity(count)

    const productInfo = {
      id: item.id,
      name: item.title,
      price: item.prices.priceNow,
      quantity: count
    }

    addItem(productInfo)
  }

  return (
    <div className={'ItemDetail'}>
      <img src={item.pictureUrl} alt={item.title} />
      <div className={'ProductInfo'}>
        <span className={'ProductInfo__category'}>{item.category}</span>
        <h1 className={'ProductInfo__name'}>{item.title}</h1>
        { item.prices != undefined ? <ProductPrice prices={item.prices}/> : null }
        <p className={'ProductInfo__description'}>{item.description}</p>

        { item.stock != undefined ? 
          quantity > 0 || isInCart(item.id) ?
          <Link to='/cart'> Terminar compra </Link> :
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> :
          null }
        
      </div>
    </div>
  )
}

export default ItemDetail;