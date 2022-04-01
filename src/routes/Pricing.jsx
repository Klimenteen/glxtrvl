import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/NavBar";
import PricingCards from "../components/Pricing";

function Pricing() {
  return (
    <div>
      <Navbar />
      <HeroImage heading='PRICING' text='Choose your trip.'/>
      <PricingCards />
      <Footer />
    </div>
  );
}

export default Pricing;