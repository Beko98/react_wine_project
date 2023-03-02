import React from "react";
import fine_wines from "../images/fine_wines.png";
import { Link } from "react-router-dom";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "../i18n";

function Navbar() {
  const { t } = useTranslation("translation");

  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={fine_wines} alt="wg" />
        </Link>
        <ul className="nav_menu">
          <li>
            <Link to="/">{t("navbar.home")}</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <button onClick={() => handleChangeLanguage("en")}>English</button>
            <button onClick={() => handleChangeLanguage("ka")}>ქართული</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
