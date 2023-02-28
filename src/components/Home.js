import React from "react";
import "../_reset.scss";
import "../_styles.scss";
import Navbar from "./Navbar";
import pic_1 from "../images/pic_1.jpg";
import Carousel from "./Carousel";

function Home() {
  return (
    <>
      <div className="nav_container">
        <Navbar />;
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
}

export default Home;
