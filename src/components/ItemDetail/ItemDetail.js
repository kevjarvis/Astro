import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {

  return (
    <div className={'ItemDetail'}>
      <img src={item.pictureUrl} alt={item.title} />
      <div className={'ProductInfo'}>
        <span className={'ProductInfo__category'}>{item.category}</span>
        <h1 className={'ProductInfo__name'}>{item.title}</h1>
        <span className={'ProductInfo__price'}>{item.price}</span>
        <p className={'ProductInfo__description'}>{item.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail;