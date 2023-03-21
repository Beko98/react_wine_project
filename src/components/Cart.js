import React, {useContext} from 'react'
import { PRODUCTS } from '../products';
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import { ShopContext } from '../context/shop-context';
import {CartItem} from "../cart-item"
import "../_cart.scss"
import { useNavigate } from 'react-router-dom';


function Cart() {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div>
    <ProductDiv title="Cart" />
    </div>

    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
            if(cartItems[product.id] !==0 ){
              return <CartItem data={product} />
            }
        })}
      </div>
      {totalAmount > 0 ?
        <div className='checkOut'>
          <p>Subtotal: ${totalAmount }</p>
          <button onClick={() => navigate("/product")}>Continue Shopping</button>
          <button>Proceed To Checkout</button>
        
        </div>
    : <h1>Your Cart Is Empty</h1> }
    </div>

    <Footer />
  </>
  )
}

export default Cart