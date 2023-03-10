import React from "react";
import vino1 from "../images/vino1.png";
import { Link, useMatch } from "react-router-dom";
import {BsCart3} from  "react-icons/bs"



function Navbar() {
const isAtHomePage = useMatch ("/");
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={vino1} alt="wg" />
        </Link>
        <ul className="nav_menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>

        {!isAtHomePage && <Link to="/cart">
          <BsCart3  className="cart"/>
        </Link>}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
