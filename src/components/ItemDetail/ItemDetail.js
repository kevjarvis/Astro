import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import ProductPrice from '../ProductPrice/ProductPrice';


const ItemDetail = ({ item }) => {

  const onAdd = (quantity) => alert(`${quantity} productos agregados correctamente`)

  return (
    <div className={'ItemDetail'}>
      <img src={item.pictureUrl} alt={item.title} />
      <div className={'ProductInfo'}>
        <span className={'ProductInfo__category'}>{item.category}</span>
        <h1 className={'ProductInfo__name'}>{item.title}</h1>
        { item.prices != undefined ? <ProductPrice prices={item.prices}/> : null }
        <p className={'ProductInfo__description'}>{item.description}</p>
        { item.stock != undefined ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/> : null }
        
      </div>
    </div>
  )
}

export default ItemDetail;