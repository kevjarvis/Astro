import { ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import ProductPrice from "../ProductPrice/ProductPrice";
import './Item.css';

const Item = ( { item } ) => {

  return (
    <div className={ item.stock ? 'card-product' : 'card-product noStock'}>
      <img src={item.pictureUrl} className={'product-img'} alt={item.title} />
      <span className={'product-name'}>{item.title}</span>
      <Rating rating={item.rating} />
      <ProductPrice prices={item.prices}/>
      <Link to={`/detail/${item.id}`} className={'button'}>
        Ver detalles <ChevronRight />
      </Link>
    </div>
  )
}

export default Item;