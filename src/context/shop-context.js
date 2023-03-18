import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);


const getDefaultCart = () =>{
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart [i] = 0;
    }
    return
}

export const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setcartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) =>{
        setcartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1 }))
    }

    const contextValue  = {cartItems ,addToCart, removeFromCart };


  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
