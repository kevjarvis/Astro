import CartProduct from '../CartProduct/CartProduct';
import CartSummary from '../CartSummary/CartSummary';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore';
import { firestoreDB } from '../../services/firebase';
import swal from 'sweetalert';
import CartForm from '../CartForm/CartForm';

const ProductsNotFound = () => {

  const styles = {
    textAlign: 'center'
  }

  return (
    <div>
      <h1 style={styles}>No hay productos</h1>
      <p style={styles}>Ve al <Link to="/" >catálogo</Link> para añadir productos</p>
    </div>
  )
}

const Cart = () => {

  const [loadingOrder, setLoadingOrder] = useState(false)
  const { cart, getTotal, getTotalWithShipping, clear } = useContext(CartContext);

  const createOrder = (name, email, phone) => {
    setLoadingOrder(true)
    const collectionRef = collection(firestoreDB, 'products')
    const idsCart = cart.map(prod => prod.id)
    const outOfStock = []

    const objOrder = {
      items : cart,
      buyer : {
        name: name,
        phone: phone,
        email: email
      },
      total: getTotalWithShipping(),
      date: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(firestoreDB)
    getDocs(query(collectionRef, where(documentId(), 'in', idsCart)))
      .then(response => {
        response.docs.forEach(doc => {
          const dataDoc = doc.data()
          const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
          } else {
            outOfStock = [...outOfStock, {id: doc.id, ...dataDoc}]
          }
        })
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(firestoreDB, 'orders')
          return addDoc(collectionRef, objOrder)
        } else {
          return Promise.reject({name: 'outOfStock', products: outOfStock})
        }
      })
      .then(({ id }) => {
        batch.commit()
        clear()
        swal("Órden generada con éxito", `El id de su órden es: ${id}`, 'success')
      })
      .catch( error => {
        if (error.name === 'outOfStock') {
          swal(
            'Productos sin stock :(',
            `El o los productos de acontinuación no tienen stock: ${error.products.join(', ')}`,
            'error'
          )
        }
      })
      .finally( () => setLoadingOrder(false) )
  }
  
  return (
    <div className='Cart'>
      <section className='CartSection'>
        { !loadingOrder 
            ? cart.length
              ? cart.map(prod => <CartProduct key={prod.id} {...prod} />)
              : <ProductsNotFound />  
            : <h1>Generando órden ...</h1>
        }
      </section>
      <CartSummary className='CartSummart'/>  
      { cart.length 
          ? <CartForm className='CartForm' onSubmit={createOrder} />
          : null }
      
    </div>
    
  ) 
}

export default Cart;