import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  path: string;
  github: string;
  description: string;
  techStackUsed: string;
}
function ProjectCard({ value }: { value: ProjectCardProps }) {
  return (
    <div className="flex flex-col border-2 h-96 w-96">
      <div>
        <Image src={value.path} fill alt={value.name} />
      </div>
      <div></div>
    </div>
  );
}

export default ProjectCard;
