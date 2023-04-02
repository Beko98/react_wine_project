import React from "react";
import pic_9 from "../images/pic_9.jpg";
import pic_10 from "../images/pic_10.jpg";
import pic_11 from "../images/pic_11.jpg";
import pic_12 from "../images/pic_12.jpg";
import pic_13 from "../images/pic_13.jpg";
import pic_14 from "../images/pic_14.jpg";

import vino from "../images/vino.png";
import { TbSend } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { RxEnvelopeClosed } from "react-icons/rx";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_divs">
          <img className="logo" src={vino} alt="wg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit scelerisque.
          </p>
          <p>
            Quisque feugiat mattis ornare. Suspendisse sit amet dictum felis.
            Nullam ac est id lacus, sed non mauris.
          </p>
        </div>
        <div className="footer_divs">
          <div className="icons">
            <TbSend />
            <h3>1-677-124-44227</h3>
          </div>

          <div className="icons">
            <GoLocation />
            <h3>184 Main Collins Street Victoria 807</h3>
          </div>

          <div className="icons">
            <RxEnvelopeClosed />
            <h3>vino@info.com</h3>
          </div>

          <div className="icons">
            <AiOutlineGlobal />
            <h3>vino.example.com</h3>
          </div>

          <div className="socials">
            <FiInstagram className="social_icons" />
            <ImTwitter className="social_icons" />
            <ImFacebook className="social_icons" />
            <FaPinterestP className="social_icons" />
          </div>
        </div>
        <div className="footer_divs">
          
          <h6>January 20, 2017</h6>
          <h3>Etiam risus nunc, feugiat id commodo ut, laoreet in augue</h3>
          <h6>December 18, 2018</h6>
          <h3>Vestibulum scelerisque molestie enim, in scelerisque arcu</h3>
          
        </div>
        <div className="footer_divs">
          <div className="footerContent">
          <img src={pic_9} alt="pic_9" />
          <img src={pic_10} alt="pic_10" />
          <img src={pic_11} alt="pic_11" />
          <img src={pic_12} alt="pic_12" />
          <img src={pic_13} alt="pic_13" />
          <img src={pic_14} alt="pic_14" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
