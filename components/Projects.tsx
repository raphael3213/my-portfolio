import { myProjects } from "@/constants";
import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-wrap min-h-screen justify-center items-center gap-4">
      {myProjects.map((project) => (
        <ProjectCard value={project} key={project.name} />
      ))}
    </div>
  );
}

export default Projects;
