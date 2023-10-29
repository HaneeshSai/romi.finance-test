import React from "react";
import logo from "../assets/logo.png";
import { BsTwitter, BsGithub, BsTelegram } from "react-icons/bs";
import { BiLogoMedium } from "react-icons/bi";
import { IoLogoDiscord } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white flex-col border-t border-[#ffffff2f] items-center flex text-center">
      <div className="flex items-center pr-6 cursor-pointer">
        <img src={logo} className="md:h-20 h-14 -mr-4" alt="" />
        <h1 className="text-xl md:text-3xl font-novaSquare">Romi.Finance</h1>
      </div>
      <ul className="flex w-screen text-[#ffffff6e] justify-center md:ml-20 gap-5 md:gap-16 text-xl md:text-3xl my-4">
        <li className="hover:text-white cursor-pointer">
          <BsTwitter />
        </li>
        <li className="hover:text-white md:text-4xl cursor-pointer">
          <BiLogoMedium />
        </li>
        <li className="hover:text-white cursor-pointer">
          <BsGithub />
        </li>
        <li className="hover:text-white cursor-pointer">
          <BsTelegram />
        </li>
        <li className="hover:text-white cursor-pointer">
          <IoLogoDiscord />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
      <div className="flex md:flex-row flex-col mt-2 md:text-md text-sm mb-2 md:gap-10 text-[#ffffffa8]">
        <p className="hover:text-white cursor-pointer">Terms and Conditions</p>
        <p className="hover:text-white cursor-pointer">Referral Terms</p>
        <p className="hover:text-white cursor-pointer">Media Kit</p>
      </div>
    </footer>
  );
}
