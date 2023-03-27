import React, {useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import "../_product.scss"
import {PRODUCTS} from "../products"
import CartProducts from "./CartProducts";
import pic_20 from "../images/pic_20.jpeg";
import pic_21 from "../images/pic_21.jpeg";
import pic_22 from "../images/pic_22.jpeg";
import pic_23 from "../images/pic_23.jpeg";
import pic_24 from "../images/pic_24.jpeg";







function Product() {
  const [sortedProducts, setsortedProducts] = useState(PRODUCTS)
  const rightProducts = [
    {
      img: pic_20,
      title: "CATEGORIES",
      price: 77.99
    },
    {
      img: pic_21,
      title: "CATEGORIES",
      price: 69.99
    },
    {
      img: pic_22,
      title: "CATEGORIES",
      price: 66.99
    },
    {
      img: pic_23,
      title: "CATEGORIES",
      price: 55.99
    },
    {
      img: pic_24,
      title: "CATEGORIES",
      price: 57.99
    }

  ]

  
  return (
    <>
      <Navbar />
      <div>
        <ProductDiv title="Product" />
      </div>

    <div className="sortSection">
      <form action="#">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" onChange={(e) => {
            if(e.currentTarget.value){
              setsortedProducts([...sortedProducts].sort(function sortPricesDescending(prices) {
                prices.sort((a, b) => b.price - a.price);
                return prices;
              }))
            }

        }}>
          <option value="lowest">Sort By Price: low to high</option>
          <option value="highest">Sort By Price: high to low</option>
        </select>
      </form>
    </div>
<div className="mainDiv">

    <div className="left_2">


      {PRODUCTS.map((product) => (
        <CartProducts data={product} />
      ))}

    </div>


   

    <div className="right_2">
      <div className="categories">
          <h2>CATEGORIES</h2>
          <p>Desert Wine (5)</p>
          <p>Prosecco (4)</p>
          <p>Uncategorized (0)</p>
          <p>Vineyard (4)</p>
          <p>Winery (4)</p>
      </div>
      
      {rightProducts.map((rights, index) => {
          return (
            
              <div className="rightProducts" key={index}>
                  <img src={rights.img} alt="pic-2" />
                  <div className="column">
                      <h2>{rights.title}</h2>
                      <p>${rights.price}</p>
                  </div>
              </div>
            
          );
        })}
       

        
        
      
    </div>
</div>



      <Footer />
    </>
  );
}

export default Product;
