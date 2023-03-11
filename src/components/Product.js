import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import "../_product.scss"
import pic_16 from "../images/pic_16.jpeg";
import pic_17 from "../images/pic_17.jpeg";
import pic_18 from "../images/pic_18.jpeg";
import pic_19 from "../images/pic_19.jpeg";
import pic_20 from "../images/pic_20.jpeg";
import pic_21 from "../images/pic_21.jpeg";
import pic_22 from "../images/pic_22.jpeg";
import pic_23 from "../images/pic_23.jpeg";
import pic_24 from "../images/pic_24.jpeg";



function Product() {
  return (
    <>
      <Navbar />
      <div>
        <ProductDiv title="Product" />
      </div>


    <div className="left_2">

      

      <div className="card_1">
        <img src={pic_16} alt="pic_16" />
        <div class="overlay">
          <button>Add to Cart</button>
        </div>
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

      <div className="card_1">
        <img src={pic_17} alt="pic_17" />
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

      <div className="card_1">
        <img src={pic_18} alt="pic_18" />
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

      <div className="card_1">
        <img src={pic_19} alt="pic_19" />
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

      <div className="card_1">
        <img src={pic_20} alt="pic_20" />
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

      <div className="card_1">
        <img src={pic_21} alt="pic_21" />
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

      <div className="card_1">
        <img src={pic_22} alt="pic_22" />
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

      <div className="card_1">
        <img src={pic_23} alt="pic_23" />
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

      <div className="card_1">
        <img src={pic_24} alt="pic_24" />
        <h2>CHATEAU REUSEC</h2>
        <h3>$ 31.00</h3>
      </div>

    </div>
    <div className="right_2"></div>



      <Footer />
    </>
  );
}

export default Product;
