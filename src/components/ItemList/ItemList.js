import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ( {items, type} ) => {

  const handleCategory = () => {
    return type ? items.filter(product => product.category === type) : items
  }

  return (
    <div className='itemList'>
      { 
        handleCategory().map(product => <Item key={product.id} item={product} /> )
      }
    </div>
  ) 

}

export default ItemList;