import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';

function CartProducts(props) {
    const{id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);


    const cartItemAmount = cartItems[id]
  return (
    <>
    
      <div className='card_1'>
        <img src={productImage} alt={id} />
        <h2>{productName}</h2>
        <h3>${price}</h3>
        <button className='addToCartBtn' onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
      </div>
    
    </>
  )
}

export default CartProducts;