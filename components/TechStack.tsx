import { myTechStack } from "@/constants";
import React from "react";
import TechStackCard from "./TechStackCard";

function TechStack() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="font-montserrat font-bold text-4xl text-blue-300">
        Tech Stack
      </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {myTechStack.map((card) => (
          <TechStackCard value={card} key={card.name} />
        ))}
      </div>
    </div>
  );
}

export default TechStack;
