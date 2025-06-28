import React from "react";
import Nav from "../shared/Nav";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
