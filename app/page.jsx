import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import FullBreedCarousel from "./components/FullBreedCarousel";
import Footer from "./components/Footer";
import CardSection from "./components/CardSection";
import CardsContainer from "./components/CardsContainer";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <Navbar />

      <Hero />
      <CardsContainer />

      <Footer />
    </div>
  );
}
