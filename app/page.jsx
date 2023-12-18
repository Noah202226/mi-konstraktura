import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Footer from "./components/Footer";

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
