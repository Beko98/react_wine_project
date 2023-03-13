import React from 'react'

function CartProducts(props) {
    const{id, productName, price, productImage} = props.data;
  return (
    <>
    
      <div className='card_1'>
        <img src={productImage} alt={id} />
        <h2>{productName}</h2>
        <h3>${price}</h3>
      </div>
    
    </>
  )
}

export default CartProducts;