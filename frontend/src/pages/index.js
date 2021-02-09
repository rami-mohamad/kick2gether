import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import TopNavbar from "../components/Navbar/TopNavbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import PriceSection from "../components/PriceSection";
import FooterSection from "../components/FooterSection";
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
      <FooterSection  />
    </>
  );
}

export default Home;
