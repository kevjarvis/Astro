import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDB } from '../../services/firebase';
import './ItemListContainer.css';


const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])
  const { categoryID } = useParams()

  useEffect(() => {
    
    const collectionRef = categoryID
      ? query(collection(firestoreDB, 'products'), where('category', '==', categoryID))
      : collection(firestoreDB, 'products')

    getDocs(collectionRef).then(res => {
      const products = res.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      })
      setProducts(products)
    })
  }, [categoryID]) 

  return (
    <section className={'Products-section'}>
      <h1>
        { 
          categoryID === 'aficionado' ?
            'Para todos los aficionados' :
          categoryID === 'profesional' ?
            'Para profesionales' :
            'Bienvenido a Astro!'
        }
      </h1>
      <ItemList items={products}/>
      
    </section>
  )
}

export default ItemListContainer;
