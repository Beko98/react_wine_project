import React, {useContext}from 'react'
import { ShopContext } from './context/shop-context';


export const CartItem = (props) => {
    const{id, productName, price, productImage} = props.data;
    const {addToCart, cartItems , removeFromCart, updateCartItemCount} = useContext(ShopContext);



  return (
    <div className='cartItem'>
        <img src={productImage} alt={id}/>
        <div className='description'>
            <p>{productName}</p>
            <p>${price}</p>
            <div className='countHandler'>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <div className='plusminus'>

                <button onClick={() => addToCart(id)}> + </button>
                <button onClick={() => removeFromCart(id)}> – </button>
                </div>
            </div>

        </div>
    
    </div>
  )
}
