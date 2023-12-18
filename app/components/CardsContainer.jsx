import React from "react";
import CardSection from "./CardSection";

const CardsContainer = () => {
  return (
    <div className="m-4 p-4">
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
