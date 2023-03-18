import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import "../_product.scss"
import {PRODUCTS} from "../products"
import CartProducts from "./CartProducts";



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
