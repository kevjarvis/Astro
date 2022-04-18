import './ItemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ProductPrice from '../ProductPrice/ProductPrice';
import { Link } from 'react-router-dom';


const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantity) => {
    setQuantity(quantity)
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
          quantity > 0 ?
          <Link to='/cart'> Terminar compra </Link> :
          <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> :
          null }
        
      </div>
    </div>
  )
}

export default ItemDetail;