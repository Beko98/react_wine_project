import React from "react";
import vino1 from "../images/vino1.png";
import { Link } from "react-router-dom";


function Navbar() {
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
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
