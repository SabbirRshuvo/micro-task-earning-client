import React from "react";
import Navbar from "../ShearedCompo/Navbar";
import { Outlet } from "react-router";
import Footer from "../ShearedCompo/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
