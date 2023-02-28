import React from "react";
import "../_reset.scss";
import "../_styles.scss";
import Navbar from "./Navbar";
import pic_1 from "../images/pic_1.jpg";

function Home() {
  return (
    <>
      <div className="nav_container">
        <Navbar />;
      </div>
      <div>
        <img src={pic_1} alt="pic-1" />
      </div>
    </>
  );
}

export default Home;
