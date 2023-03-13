import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";


export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  );
}
