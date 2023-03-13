import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import "../_product.scss"
import {PRODUCTS} from "../products"
import CartProducts from "./CartProducts";
// import pic_16 from "../images/pic_16.jpeg";
// import pic_17 from "../images/pic_17.jpeg";
// import pic_18 from "../images/pic_18.jpeg";
// import pic_19 from "../images/pic_19.jpeg";
// import pic_20 from "../images/pic_20.jpeg";
// import pic_21 from "../images/pic_21.jpeg";
// import pic_22 from "../images/pic_22.jpeg";
// import pic_23 from "../images/pic_23.jpeg";
// import pic_24 from "../images/pic_24.jpeg";



function Product() {
  return (
    <>
      <Navbar />
      <div>
        <ProductDiv title="Product" />
      </div>


    <div className="left_2">


      {PRODUCTS.map((product) => (
        <CartProducts data={product} />
      ))}

    </div>


    <div>

    </div>

    <div className="right_2"></div>



      <Footer />
    </>
  );
}

export default Product;
