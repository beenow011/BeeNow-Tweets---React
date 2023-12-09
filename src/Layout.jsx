import React from "react";
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
// import Home from "../../reactRouter/src/components/Home/Home";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./app/store";

export const Layout = () => {
  return (
    <Provider store={store}>
      <div className="bg-[beige] shadow-md  shadow-black">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};
