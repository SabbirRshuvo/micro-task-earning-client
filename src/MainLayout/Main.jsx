import React from "react";
import Navbar from "../ShearedCompo/Navbar";
import { Outlet } from "react-router";
import Footer from "../ShearedCompo/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1900px] mx-auto">
      <Navbar />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
