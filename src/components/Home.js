import React from "react";
import "../_reset.scss";
import "../_styles.scss";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import img_6 from "../images/pic_6.png"
import img_7 from "../images/pic_7.png"
import img_8 from "../images/pic_8.png"


function Home() {
  return (
    <>
    <div className="nav_container">
        <Navbar />;
      </div>
      <div className="Carousel-container">
        <Carousel />
      </div>
      <div className="container">
        
      
    <div className="image_text">
      <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img src={img_6} alt="pic-6" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className="image_text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <img src={img_7} alt="pic-7" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className="image_text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img className="botli" src={img_8} alt="pic-8" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>


    </div>
    </>
  );
}

export default Home;
