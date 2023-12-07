import React from "react";
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
// import Home from "../../reactRouter/src/components/Home/Home";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export const Layout = () => {
  return (
    <div className="bg-[beige] shadow-md  shadow-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
