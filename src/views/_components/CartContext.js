import React, { createContext, useState } from 'react'

export const CartContext = createContext({
  cartItems: 0,
  setCartItems: () => undefined
})

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(0)

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}
