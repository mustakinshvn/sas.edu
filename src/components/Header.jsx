import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import aplyNow from "../assets/applyNow.png";
import NavBar from "../components/navBar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-50 text-black shadow-md transition-all duration-200 items-center">
      <div className=" sticky top-0 flex h-16 items-center px-4 md:h-16 md:px-6 lg:max-w-7xl lg:px-8 justify-between bg-white shadow-lg p-10">
        {/* Left Section: Logo & Info */}
        <div className="flex h-14 items-center px-4 md:h-14 md:px-6 lg:max-w-7xl lg:px-8 p-10">
          <img
            src={logo}
            alt="Logo"
            className="ml-1 h-19 w-16 md:h-24 md:w-24 lg:h-22 lg:w-22 object-contain p-2 max-w-full"
          />
          <ul className="ml-2 h-20 w-48 md:h-14 md:w-60 lg:h-22 lg:w-55 object-contain max-w-full flex flex-col p-1 md:p-3 justify-center">
            <li className="text-blue-900 font-bold text-l leading-tight md:leading-normal">Star Academic School</li>
            <li className="leading-tight md:leading-normal">Natiapara, Tangail</li>
            <li className="text-cyan-400 font-bold text-xs leading-tight md:leading-normal mt-1 md:mt-0">ESTD: 2012</li>
          </ul>
        </div>

        {/* Apply Now Button */}
        <button
          onClick={() => navigate("/apply")}
          className="absolute bottom-0 top-0 right-0  items-center justify-center"
        >                                                                                                                                                                                                          
          <img
            src={aplyNow}
            alt="Apply Now"
            className="  w-20 md:w-24 lg:w-28 cursor-pointer hover:opacity-80"
          />
        </button>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
