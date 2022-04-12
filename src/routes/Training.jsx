import React from "react";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/NavBar";
import TrainingSection from "../components/Training";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="Training" text="Pre-Flight & In-Flight Training" />
      <TrainingSection />
    </div>
  );
};

export default Training;
