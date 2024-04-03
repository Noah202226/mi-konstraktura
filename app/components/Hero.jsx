import React from "react";
import FullBreedCarousel from "./FullBreedCarousel";
import Carousel from "./Carousel";
import Slider from "./Slider";

const Hero = () => {
  const images = [
    "/door.jpg", // replace with the actual path to your images
    "/gate 1.jpg",
    "/kitchen cabinet.jpg",
  ];
  const containerWidth = 1200; // set your desired width
  const containerHeight = 400; // set your desired height
  return (
    <div className="hero min-h-screen bg-hero bg-gray-400">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        {/* <FullBreedCarousel /> */}
        {/* <Slider
          images={images}
          containerWidth={containerWidth}
          containerHeight={containerHeight}
          autoSlideInterval={5000}
        /> */}

        <div>
          <h1 className="text-4xl text-black textShadow text-Shadow md:text-6xl font-medium">
            Your Premier Partner for Innovative Construction Solutions!
          </h1>

          <p className="py-6 text-gray-800 text-xl md:text-3xl font-medium ">
            Commercial Construction, Residential Development, Renovation &
            Remodeling
          </p>

          <button className="btn  md:btn-lg stroke-yellow-400 fill-red-900">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
