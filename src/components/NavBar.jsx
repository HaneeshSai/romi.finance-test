import React, { useState } from "react";
import "../css/style.css";
import logo from "../assets/logo.png";
import ether from "../assets/ether.png";
import { PiWallet } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerLinks from "./HamburgerLinks";
import ConnectWallet from "./ConnectWallet";

const navLinks = [
  "Home",
  "Dashboard",
  "NFT",
  "Earn",
  "Buy",
  "Referral",
  "Ecosystem",
  "About",
];

export default function NavBar({ scrSize }) {
  const navigate = useNavigate();
  const [toggleHam, setToggleHam] = useState(false);
  const [toggleCW, setToggleCW] = useState(false);
  const navClick = (a) => {
    console.log(a);
    if (a === 0) navigate("/romi.finance-test/");
    else if (a === 1) navigate("/romi.finance-test/DashBoard");
    else if (a === 3) navigate("/romi.finance-test/earn");
  };

  const togleHam = () => {
    setToggleHam(!toggleHam);
  };

  const cnctWallet = () => {
    setToggleCW(!toggleCW);
  };

  return (
    <>
      {toggleHam ? <HamburgerLinks togleHam={togleHam} /> : null}
      <div className="h-16 darkShadow bg-[#191919] border border-[#29282892] w-screen flex md:justify-between ">
        {scrSize === "small" ? (
          <div onClick={togleHam} className="flex items-center mx-2">
            <GiHamburgerMenu color="white" size={20} />
          </div>
        ) : null}
        <div className="flex items-center gap-0 mr-10">
          <img
            src={logo}
            alt="logo"
            className="md:h-16 h-10 md:w-16 w-10 md:-mr-2 -mr-3"
          />
          <h1 className="font-novaSquare text-sm md:text-2xl text-[#ffffff]">
            Romi.Finance
          </h1>
        </div>
        {toggleCW ? <ConnectWallet onclick={cnctWallet} /> : null}
        {scrSize !== "small" ? (
          <div className="flex items-center">
            <ul className="flex gap-8">
              {navLinks.map((e, i) => (
                <li
                  className="text-[#bdb8b8] hover:text-[#ffffff] cursor-pointer"
                  key={i}
                >
                  <p
                    onClick={() => {
                      navClick(i);
                    }}
                  >
                    {e}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="flex text-[#ffffff] gap-1 md:gap-5 items-center text-[11px] md:mr-6 md:text-sm">
          <button className="bg-emerald-500 md:px-4 md:py-2 px-1 py-1 hover:bg-emerald-600 rounded-md ">
            Trade
          </button>
          <button
            onClick={cnctWallet}
            className="flex items-center md:gap-2 border hover:bg-[#323131] border-[#ffffff5c] py-2  md:px-3 rounded-md"
          >
            <PiWallet size={20} />
            Connect Wallet
          </button>
          <div className="flex items-center border border-[#ffffff5c] rounded-md py-1.5 divide-x divide-[#ffffff5c] hover:bg-[#323131]">
            <div className="bg-white rounded-full p-1 ml-3">
              <img src={ether} className="md:h-3 h-2" alt="" />
            </div>
            <div className="md:mx-3 mx-0">
              <BiDotsVerticalRounded size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
