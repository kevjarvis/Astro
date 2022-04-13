import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductByID } from "../../asyncmock";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const { productID } = useParams();

  useEffect(() =>{
    getProductByID(productID).then(prod => setProduct(prod))
  }, [])

  return (
    <ItemDetail item={product} />
  )

}

export default ItemDetailContainer;