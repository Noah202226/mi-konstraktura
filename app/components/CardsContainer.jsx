import React from "react";
import CardSection from "./CardSection";

const CardsContainer = () => {
  return (
    <div className="m-4 ">
      <p className=" text-white bg-gray-700 rounded-xl p-4 w-full mt-10 text-center text-4xl z-10 opacity-90 ">
        Sample Products
      </p>
      <CardSection
        title={"Gate"}
        description={"Modern gate"}
        img={"/gate 1.jpg"}
      />
      <CardSection
        title={"Gate"}
        description={"Modern gate"}
        img={"/door.jpg"}
      />
      <CardSection
        title={"Gate"}
        description={"Modern gate"}
        img={"/kitchen cabinet.jpg"}
      />
    </div>
  );
};

export default CardsContainer;
