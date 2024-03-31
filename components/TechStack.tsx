import { myFrameWorks, myLanguages, myTechStack } from "@/constants";
import React from "react";
import TechStackCard from "./TechStackCard";
import ListCard, { card } from "./ListCard";

function TechStack() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="font-montserrat font-bold text-4xl text-blue-300">
        Tech Stack
      </h1>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-start gap-3 gap-y-4 w-full flex-wrap">
        <ListCard list={myLanguages} title="Languages / Libraries" />
        <ListCard list={myFrameWorks} title="Frameworks" />
        <ListCard list={myTechStack} title="Technologies" />
      </div>
    </div>
  );
}

export default TechStack;
