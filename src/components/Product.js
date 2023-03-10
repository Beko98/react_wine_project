import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import "../_product.scss"


function Product() {
  return (
    <>
      <Navbar />
      <div>
        <ProductDiv />
      </div>
      <Footer />
    </>
  );
}

export default Product;
