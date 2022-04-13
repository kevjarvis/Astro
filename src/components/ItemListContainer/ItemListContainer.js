import { useState, useEffect } from 'react';
import { API } from '../../asyncmock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import './ItemListContainer.css';


const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])
  const { categoryID } = useParams()

  useEffect(() => {
    API.then( prods => { setProducts(prods) } )
  }, []) 

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
      {categoryID ? <ItemList items={products} type={categoryID} /> : <ItemList items={products} /> }
      
    </section>
  )
}

export default ItemListContainer;
