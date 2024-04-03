import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Footer from "./components/Footer";

import CardsContainer from "./components/CardsContainer";
import GlassCard from "./components/GlassCard";
import ServicesCards from "./components/ServicesCards";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";

import DarkModeToggle from "./components/DarkModeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />
      <ServicesCards />
      <CardsContainer />

      <Footer />
    </div>
  );
}
