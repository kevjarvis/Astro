import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ( {children} ) => {
  const [cart, setCart] = useState([]);

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

  return (
    /* por ahora solo paso addItem */
    <CartContext.Provider value={ {addItem, isInCart, getQuantity} }>
      {children}
    </CartContext.Provider>      
  )
}

export default CartContext;