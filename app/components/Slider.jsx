"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const Slider = ({
  images,
  containerWidth,
  containerHeight,
  autoSlideInterval,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide, autoSlideInterval]);

  const handleMouseEnter = () => {
    // Pause auto-sliding when mouse enters the slider
    clearInterval(autoSlideInterval);
  };

  const handleMouseLeave = () => {
    // Resume auto-sliding when mouse leaves the slider
    setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
  };

  return (
    <div
      className="relative rounded-md overflow-hidden shadow-md slider-container"
      //   style={{ width: containerWidth, height: containerHeight }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 100s ease-in-out",
          }}
        />

        <div className="absolute bottom-4 right-4 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full bg-white ${
                index === currentSlide ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-2 hover:bg-gray-800 fill-black text-black hover:text-white rounded-md"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-2 hover:bg-gray-800 text-black hover:text-white "
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Slider;
