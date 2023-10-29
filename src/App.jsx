import React from "react";
import HomePage from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";
import Earn from "./pages/Earn";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [screenSize, setScreenSize] = useState("");
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 576) {
      setScreenSize("small");
    } else if (width < 992) {
      setScreenSize("medium");
    } else {
      setScreenSize("large");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar scrSize={screenSize} />
      <Routes>
        <Route path="/" element={<HomePage scrSize={screenSize} />} />
        <Route path="/DashBoard" element={<DashBoard scrSize={screenSize} />} />
        <Route path="/earn" element={<Earn />} />
      </Routes>
      <Footer />
    </>
  );
}
