import React from "react";
import vino1 from "../images/vino1.png";
import { Link, useMatch } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();

  const isAtHomePage = useMatch("/");
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={vino1} alt="wg" />
        </Link>
        <ul className="nav_menu">
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/product">{t("product")}</Link>
          </li>
          <li>
            <Link to="/aboutUs">{t("aboutUs")}</Link>
          </li>

          <LanguageSwitcher />

          {!isAtHomePage && (
            <Link to="/cart">
              <BsCart3 className="cart" />
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
