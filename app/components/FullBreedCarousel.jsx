import React from "react";

const FullBreedCarousel = () => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <img src="/gate 1.jpg" className="rounded-box carousel-image" />
      </div>

      <div className="carousel-item">
        <img src="/longue cabinet.jpg" className="rounded-box carousel-image" />
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
