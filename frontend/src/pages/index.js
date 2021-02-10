import React, { useState } from "react";
import Sidebar from "../ComponentsG/Sidebar";
import Navbar from "../ComponentsG/Navbar/Navbar";
import TopNavbar from "../ComponentsG/Navbar/TopNavbar";
import HeroSection from "../ComponentsG/HeroSection";
import InfoSection from "../ComponentsG/InfoSection";
import { homeObjOne } from "../ComponentsG/InfoSection/Data";
import PriceSection from "../ComponentsG/PriceSection";
import FooterSection from "../ComponentsG/FooterSection/";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <TopNavbar />
      <Navbar toggle={toggle} />
      <HeroSection />
      <PriceSection />
      <InfoSection {...homeObjOne} />
      <FooterSection />
    </>
  );
}

export default Home;
