import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import "../scss/_product.scss";
import { PRODUCTS } from "../products";
import CartProducts from "./CartProducts";
import pic_20 from "../images/pic_20.jpeg";
import pic_21 from "../images/pic_21.jpeg";
import pic_22 from "../images/pic_22.jpeg";
import pic_23 from "../images/pic_23.jpeg";
import pic_24 from "../images/pic_24.jpeg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "../scss/_responsive.scss"




function Product() {
  const [sortedProducts, setsortedProducts] = useState(PRODUCTS);
  const [sort, setSort] = useState("highest");
  const rightProducts = [
    {
      img: pic_20,
      title: "Certan-de-May",
      price: 77.99,
    },
    {
      img: pic_21,
      title: "Medoc",
      price: 69.99,
    },
    {
      img: pic_22,
      title: "Marcobrunn",
      price: 66.99,
    },
    {
      img: pic_23,
      title: "Kohng Blohng",
      price: 55.99,
    },
    {
      img: pic_24,
      title: "Moneire",
      price: 57.99,
    },
  ];

  const [number, setNumber] = useState(0);

  return (
    <>
      <Navbar />
      <div className="responsiveProductsDiv">
        <ProductDiv title="Product" />
      </div>

      
      <div className="mainDiv">
        <div className="left_2">
          {PRODUCTS.map((product) => (
            <CartProducts data={product} />
          ))}
        </div>

        <div className="right_2">
        <div className="sortSection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => {
              if (e.currentTarget.value) {
                setsortedProducts(
                  [...sortedProducts].sort(function sortPricesDescending(
                    prices
                  ) {
                    prices.sort((a, b) => b.price - a.price);
                    return prices;
                  })
                );
              }
            }}
          >
            <option onClick={() => setSort("lowest")} value="lowest">
              Sort By Price: low to high
            </option>
            <option onClick={() => setSort("highest")} value="highest">
              Sort By Price: high to low
            </option>
          </select>
        </form>
      </div>

          <div className="banner">
            <h3>BANNER</h3>
          </div>
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
              <>
                <div className="rightProducts" key={index}>
                  <img src={rights.img} alt="pic-2" />
                  <div className="column">
                    <h2>{rights.title}</h2>
                    <div className="stars">
                      {Array(5)
                        .fill()
                        .map((star, index) =>
                          number >= index + 1 ? (
                            <AiFillStar
                              style={{ color: "#b1af6a" }}
                              onClick={() => setNumber(index + 1)}
                            />
                          ) : (
                            <AiOutlineStar
                              style={{ color: "#b1af6a" }}
                              onClick={() => setNumber(index + 1)}
                            />
                          )
                        )}
                    </div>
                    <p>${rights.price}</p>
                  </div>
                </div>
              </>
            );
          })}

          <div className="tags">
            <h3>TAGS</h3>
            <p className="tagPs">
              Delicious, Flavor, New, Red, Strong, <br />
              Sweet, Tasty, White
            </p>
          </div>
          <div className="searchProducts">
            <input type="search" placeholder="Search Products..." />
            
          
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;
