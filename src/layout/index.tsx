import React from "react";
import { Outlet } from "react-router-dom";
import imageOne from "../assets/Saly-2.svg"
import imageTwo from "../assets/Saly-3.svg"

const Layout = () => {
  return (
    <div className="relative">
      <h3 className="text-xl absolute top-20 left-20 w-1/3 font-semibold text-red-500 max-sm:hidden -z-10">
        Your Logo
      </h3>
      <img src={imageTwo} alt="imageg one" className="absolute top-60 left-80 border-b border-black max-sm:hidden -z-10"/>
      <img src={imageOne} alt="imageg one" className="absolute top-40 right-60 max-sm:hidden -z-10"/>
      <div className="min-h-screen flex items-center justify-center max-sm:p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
