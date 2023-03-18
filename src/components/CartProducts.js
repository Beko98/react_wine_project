import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';

function CartProducts(props) {
    const{id, productName, price, productImage} = props.data;
    const {} = useContext(ShopContext);
  return (
    <>
    
      <div className='card_1'>
        <img src={productImage} alt={id} />
        <h2>{productName}</h2>
        <h3>${price}</h3>
        <button className='addToCartBtn'>Add To Cart</button>
      </div>
    
    </>
  )
}

export default CartProducts;