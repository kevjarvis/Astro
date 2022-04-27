import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { firestoreDB } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const { productID } = useParams();

  useEffect(() =>{
    
    getDoc(doc(firestoreDB, 'products', productID)).then(res => {
      console.log(res);
      const prod = { id: res.id, ...res.data() }
      setProduct(prod)
    })
  }, [])

  return (
    <ItemDetail item={product} />
  )

}

export default ItemDetailContainer;