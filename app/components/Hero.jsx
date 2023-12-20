import React from "react";
import FullBreedCarousel from "./FullBreedCarousel";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-hero bg-gray-400">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <FullBreedCarousel />
        <div className="text-black">
          <h1 className="text-6xl font-bold">
            Your Premier Partner for Innovative Construction Solutions!
          </h1>

          <p className="py-6 text-3xl font-medium ">
            Commercial Construction, Residential Development, Renovation &
            Remodeling
          </p>

          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
