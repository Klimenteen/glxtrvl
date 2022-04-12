import React from "react";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/NavBar";
import PricingCards from "../components/Pricing";

const Pricing= () => {
  return (
    <div>
    <Navbar />
      <HeroImage heading='PRICING' text='Choose your trip.'/>
      <PricingCards />
    </div>
  );
}

export default Pricing;
