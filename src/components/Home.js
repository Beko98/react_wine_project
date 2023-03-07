import React from "react";
import "../_reset.scss";
import "../_styles.scss";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import img_6 from "../images/pic_6.png";
import img_7 from "../images/pic_7.png";
import img_8 from "../images/pic_8.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="nav_container">
        <Navbar />;
      </div>
      <div className="Carousel-container">
        <Carousel />
      </div>

      <div className="title">
        <h2>Traditional Winemaking</h2>
        <hr />
      </div>
      <div className="container">
        <div className="repeat">
          <div className="left">
            <h2>purchased farm</h2>
            <h3>1997</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              faucibus quam ut lectus porttitor, ut ultricies libero cursus.
            </p>
          </div>
          <div>
            <img src={img_6} alt="pic-6" />
          </div>
          <div className="right">
            <h2>first wineyard</h2>
            <h3>1999</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              faucibus quam ut lectus porttitor, ut ultricies libero cursus.
            </p>
          </div>
        </div>

        <div className="repeat">
          <div className="left">
            <h2>first production</h2>
            <h3>2001</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              faucibus quam ut lectus porttitor, ut ultricies libero cursus.
            </p>
          </div>
          <div>
            <img src={img_7} alt="pic-7" />
          </div>
          <div className="right">
            <h2>first customers</h2>
            <h3>2003</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              faucibus quam ut lectus porttitor, ut ultricies libero cursus.
            </p>
          </div>
        </div>

        <div className="repeat">
          <div className="left">
            <h2>small enterprise</h2>
            <h3>2005</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              faucibus quam ut lectus porttitor, ut ultricies libero cursus.
            </p>
          </div>
          <div>
            <img className="bottle" src={img_8} alt="pic-8" />
          </div>
          <div className="right">
            <h2>organic company</h2>
            <h3>2007</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              faucibus quam ut lectus porttitor, ut ultricies libero cursus.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
