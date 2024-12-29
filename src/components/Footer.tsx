"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { SiInstagram } from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="mt-5 z-50 bg-[#003366] text-white py-4 px-6 flex items-center justify-between ">
      {/* Left: Link to my website */}
      <div className="relative">
        <Link
          href="https://mattdoyle.vercel.app"
          target="_blank"
          className="text-sm text-gray-200 hover:text-green-200 transition hover:underline"
        >
          Designed by Matt Doyle
        </Link>
      </div>

      {/* Right: Static content */}
      <div className="flex items-center sm:justify-end justify-center text-sm text-white">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="pr-3 hover:text-white transition-colors duration-200 flex items-center"
        >
          <SiInstagram className="text-white" size={24} />
        </a>
        <span className="text-gray-200">
          &copy; {new Date().getFullYear()} Medy D'Avino. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
