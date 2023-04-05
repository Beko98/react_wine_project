import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import "../scss/_aboutUs.scss"
import { BsSun } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { TbLeaf } from "react-icons/tb";
import pic_27 from "../images/pic_27.png"
import pic_28 from "../images/pic_28.jpeg"
import "../scss/_responsive.scss"






function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="responsiveProductsDiv">
      <ProductDiv title="About Us" />

    <div className="section">
        <div className="ourStory">
          <h2>OUR STORY</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus quam ut lectus porttitor, ut ultricies libero cursus. Suspendisse nec ornare erat. Phasellus nec dolor non enim finibus varius. Morbi sollicitudin, magna eu maximus laoreet, felis nisi rhoncus elit, quis cursus diam leo vel velit. Vivamus nec venenatis nunc. Sed malesuada ligula et luctus ullamcorper. Nunc vehicula aliquam lobortis.Nunc efficitur risus nec risus pulvinar, id sagittis mauris consectetur. Integer porta sem a nulla congue laoreet. Praesent aliquam, eros id vestibulum efficitur, ex ante molestie dolor, eu ultricies orci mi eu felis. Pellentesque pretium quam ut diam venenatis congue. Vestibulum non felis a sapien faucibus varius sit amet sed enim. Pellentesque vel neque eu justo vulputate varius. Nullam quis fringilla nibh. Nunc scelerisque in augue eu placerat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus quam ut lectus porttitor, ut ultricies libero cursus. Suispendisse nec ornare erat. Phesellus nec dolor non enamu.</p>
        </div>
        <div className="imgContainer"></div>
    </div>

</div>

    <div className="iconMainDiv">
      <div className="iconContentDiv">
        <BsSun />
      <h2>2568</h2>
      <h3>sunny hours</h3>
      </div>
      <div className="iconContentDiv">
        <AiOutlineStar />
        <h2>37</h2>
        <h3>awards won</h3>
      </div>
      <div className="iconContentDiv">
        <BsHeart />
        <h2>157</h2>
        <h3>wine types</h3>
      </div>
      <div className="iconContentDiv">
        <TbLeaf />
        <h2>2167</h2>
        <h3>happy customers</h3>
      </div>
    </div>

    <hr  className="line"/>
    <div className="wineContainer">
      <div className="redWines">
      <img src={pic_27} alt="pic_27" />
        <div className="insideDiv">
        <h6>2015</h6>
        <h2>RED WINES</h2>
        <p>Etiam ut mauris vehicula, lobortis orci in, lobortis erat. Aliquam eu tempus quam, ut cursus eros. Aliquam erat volutpat. Nunc sodales ipsum at maximus commodo. Nullam scelerisque massa nunc, a sollicitudin est rutrum eget. Nam egestas sodales luctus. Fusce ultricies laoreet euismod. Fusce quis lectus enim. Donec rhoncus mi nec lacus egestas, quis volutpat massa pharetra. Ut id gravida ante, ut placerat mi. In iaculis nulla ac ante scelerisque, non sollicitudin nisl ultrices. Duis ut ultrices ante, et tempus elit.</p>
        <button>SEE MORE</button>
        </div>
      </div>
      <hr className="line" />
      <div className="whiteWines">
        <div className="insideDiv_2">
          <h6>2015</h6>
          <h2>RED WINES</h2>
          <p>Etiam ut mauris vehicula, lobortis orci in, lobortis erat. Aliquam eu tempus quam, ut cursus eros. Aliquam erat volutpat. Nunc sodales ipsum at maximus commodo. Nullam scelerisque massa nunc, a sollicitudin est rutrum eget. Nam egestas sodales luctus. Fusce ultricies laoreet euismod. Fusce quis lectus enim. Donec rhoncus mi nec lacus egestas, quis volutpat massa pharetra. Ut id gravida ante, ut placerat mi. In iaculis nulla ac ante scelerisque, non sollicitudin nisl ultrices. Duis ut ultrices ante, et tempus elit.</p>
          <button>SEE MORE</button>
        </div>
      <img src={pic_28} alt="pic_28" />
      </div>



      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
