import React from "react";
import { FaFacebookF, FaPinterestP, FaUserShield } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Accent Bar */}
      <div className="w-full bg-[#b58e6a] h-2 md:h-3"></div>

      {/* Main Footer */}
      <div className="w-full bg-[#453D2D] py-8 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <div className="text-center md:text-left flex-1">
            <p className="text-sm md:text-base font-medium">
              © 2025 Star Academic School. All rights reserved.
            </p>
          </div>

          {/* Center: Social Icons & Admin Login */}
          <div className="flex space-x-4 justify-center items-center">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-[#b58e6a] hover:bg-[#a07a57] text-[#453D2D] hover:text-white rounded-full p-2 transition-colors duration-200 shadow-md"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="bg-[#b58e6a] hover:bg-[#a07a57] text-[#453D2D] hover:text-white rounded-full p-2 transition-colors duration-200 shadow-md"
            >
              <FaPinterestP size={18} />
            </a>
            <a
              href="/admin/login"
              aria-label="Admin Login"
              className="bg-[#b58e6a] hover:bg-[#a07a57] text-[#453D2D] hover:text-white rounded-full p-2 transition-colors duration-200 shadow-md"
            >
              <FaUserShield size={18} />
            </a>
          </div>

          {/* Right: Developer Info */}
          <div className="text-center md:text-right flex-1">
            <p className="text-sm md:text-base">
              Developed by{" "}
              <a
                href="#"
                className="underline hover:text-[#b58e6a] transition-colors duration-200"
              >
                Shovon & Meraj
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
