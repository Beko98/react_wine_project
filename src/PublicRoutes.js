import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
}
