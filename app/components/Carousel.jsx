"use client";
// components/ModernCarousel.js
import React, { useState } from "react";

const images = [
  "/gate 1.jpg",
  "https://placekitten.com/801/400",
  "https://placekitten.com/802/400",
];

const ModernCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>
        <button className={styles.arrowButton} onClick={prevImage}>
          &#9665;
        </button>
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className={styles.slideImage}
        />
        <button className={styles.arrowButton} onClick={nextImage}>
          &#9655;
        </button>
      </div>
    </div>
  );
};

export default ModernCarousel;
