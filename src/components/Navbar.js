import React from "react";
import fine_wines from "../images/fine_wines.png";
import { Link } from "react-router-dom";
import i18next from "../i18n/i18n";
function Navbar() {

  

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={fine_wines} alt="wg" />
        </Link>
        <ul className="nav_menu">
          <li>
            <Link to="/">{i18next.t('home')}</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
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
