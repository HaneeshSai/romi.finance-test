import React from "react";
import { useNavigate } from "react-router-dom";

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

export default function HamburgerLinks({ togleHam }) {
  const navigate = useNavigate();
  const navClick = (a) => {
    console.log(a);
    if (a === 0) navigate("/");
    else if (a === 1) navigate("/DashBoard");
    else if (a === 3) navigate("/earn");
    togleHam();
  };
  return (
    <div className="text-white text-xl backdrop-blur-lg absolute top-14 h-screen w-screen">
      <ul className="px-7 text-sm divide-y py-4">
        {navLinks.map((e, i) => (
          <li key={i} className="my-4">
            <p
              onClick={() => {
                navClick(i);
              }}
              className="my-4"
            >
              {e}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
