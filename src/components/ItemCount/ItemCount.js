import { useEffect, useState } from "react";
import { DashLg, PlusLg } from "react-bootstrap-icons";
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
  
  const isCountLessOrEqualToZero = count <= initial;
  const isCountGreaterOrEqualToStock = count >= stock;

  const increment = () => {
    return isCountGreaterOrEqualToStock ? null : setCount(count + 1);
  }
  const decrement = () => {
    return isCountLessOrEqualToZero ? null : setCount(count - 1);
  }

  return (
    <div className={'ItemCount'}>
      <div className={'CountControls'}>
        <button onClick={decrement} disabled={!stock}> <DashLg size={16}/> </button>
        <span className={stock ? null : 'hasNoStock'}>{count}</span>
        <button onClick={increment} disabled={!stock}> <PlusLg size={16}/> </button>
      </div>

      <button onClick={() => onAdd(count)} disabled={!stock}>
        {stock ? 'Agregar al carrito' : 'No hay stock :('}
      </button>
    </div>
  )
}

export default ItemCount