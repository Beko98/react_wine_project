import React from 'react'
import {BsCart3} from  "react-icons/bs"
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";

function Cart() {
  return (
    <>
    <Navbar />
    <div>
    <ProductDiv title="Cart" />
    </div>

    <BsCart3 />

    <Footer />
  </>
  )
}

export default Cart