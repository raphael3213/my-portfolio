import { myProjects } from "@/constants";
import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 ">
      <h1 className="font-montserrat font-bold text-4xl text-blue-300">
        Projects
      </h1>
      <div className="flex flex-wrap justify-around items-center gap-4">
        {myProjects.map((project) => (
          <ProjectCard value={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
