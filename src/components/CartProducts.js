import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

function CartProducts(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className="card_1">
        <div className="addToCartEffect">
          <img src={productImage} alt={id} />
          <div className="addToCartEffectChild">
            <button className="addToCartBtn" onClick={() => addToCart(id)}>
              ADD TO CART {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
          </div>
        </div>
        <h2>{productName}</h2>
        <h3>${price}</h3>
      </div>
    </>
  );
}

export default CartProducts;
