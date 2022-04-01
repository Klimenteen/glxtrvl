import React from "react";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/Pricing";

const Pricing= () => {
  return (
    <div>
      <HeroImage heading='PRICING' text='Choose your trip.'/>
      <PricingCards />
    </div>
  );
}

export default Pricing;
