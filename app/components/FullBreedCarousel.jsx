import React from "react";

const FullBreedCarousel = () => {
  return (
    <div className="carousel carousel-center w-full sm:max-w-md p-2 space-x-4 bg-slate-200 rounded-box">
      <div className="carousel-item">
        <img src="/longue cabinet.jpg" className="rounded-box carousel-image" />
      </div>

      <div className="carousel-item">
        <img src="/gate 1.jpg" className="rounded-box carousel-image" />
      </div>

      <div className="carousel-item">
        <img
          src="/kitchen cabinet.jpg"
          className="rounded-box carousel-image"
        />
      </div>

      <div className="carousel-item">
        <img src="/door.jpg" className="rounded-box carousel-image" />
      </div>
    </div>
  );
};

export default FullBreedCarousel;
