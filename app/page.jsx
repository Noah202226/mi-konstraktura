"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Footer from "./components/Footer";

import CardsContainer from "./components/CardsContainer";
import GlassCard from "./components/GlassCard";
import ServicesCards from "./components/ServicesCards";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";

import { useState, useEffect } from "react";
import DarkModeToggle from "./components/DarkModeToggle";

export default function Home() {
  const [theme, setTheme] = useState(
    localStorage?.getItem("theme") ? localStorage?.getItem("theme") : "light"
  );

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage?.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className="min-h-screen">
      <Navbar toggleTheme={toggleTheme} />

      <Hero />
      <ServicesCards />
      <CardsContainer />

      <Footer />
    </div>
  );
}
