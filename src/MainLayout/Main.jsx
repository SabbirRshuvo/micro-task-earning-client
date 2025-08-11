import React from "react";
import Navbar from "../ShearedCompo/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../ShearedCompo/Footer";

const Main = () => {
  const path = useLocation().pathname;
  const hideNavAndFooter = path.includes("login") || path.includes("register");

  return (
    <div className="flex flex-col min-h-screen  mx-auto">
      {!hideNavAndFooter && <Navbar />}
      <div className="flex-1 ">
        <Outlet />
      </div>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

export default Main;
