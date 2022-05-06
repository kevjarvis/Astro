import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ( {children} ) => {
  const [cart, setCart] = useState([]);

  const shipping = cart.length ? 80 : 0;

  const isInCart = (id) => {
    return cart.find(product => product.id === id) ? true : false
  } 

  const addItem = (item) => {
    if ( isInCart(item.id) ) return null
    setCart([...cart, item])
  }

  const removeItem = (id) => {
    if ( !isInCart(id) ) return null
    const newCart = cart.filter(product => product.id !== id)
    setCart(newCart)
  }

  const clear = () => setCart([]) 

  const getQuantity = () => {
    let count = 0
    cart.forEach( product => count += product.quantity )
    return count
  }

  const getTotal = () => {
    let total = 0
    cart.forEach( product => total += (product.price * product.quantity))
    return total
  }

  const getTotalWithShipping = () => {
    return getTotal() + shipping
  }

  return (
    <CartContext.Provider value={ {addItem, isInCart, getQuantity, cart, removeItem, getTotal, getTotalWithShipping, clear, shipping} }>
      {children}
    </CartContext.Provider>      
  )
}

export default CartContext;