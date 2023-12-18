import React from "react";
import FullBreedCarousel from "./FullBreedCarousel";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-hero bg-gray-600">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <FullBreedCarousel />
        <div>
          <h1 className="text-5xl font-bold">
            Your Premier Partner for Innovative Construction Solutions!
          </h1>
          <p className="py-6">
            "Commercial Construction," "Residential Development," "Renovation &
            Remodeling"
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
