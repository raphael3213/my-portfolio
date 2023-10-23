import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
  name: string;
  path: string;
  github: string;
  description: string;
  techStackUsed: string;
  imgSrc: string;
}
function ProjectCard({ value }: { value: ProjectCardProps }) {
  return (
    <div className="h-[400px] w-[400px] p-3 flex flex-col justify-start items-center gap-4 shadow-2xl mt-4 ">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-montserrat font-semibold text-emerald-500">
          {value.name}
        </h1>

        <div className="flex justify-end items-center gap-6">
          <Link href={value.path} placeholder={value.name} className="group">
            <FontAwesomeIcon
              icon={faExternalLink}
              className="fas fa-check text-emerald-500 group-hover:text-emerald-700 cursor-pointer text-lg"
            ></FontAwesomeIcon>
          </Link>
          <Link href={value.github} placeholder={value.name} className="group">
            <FontAwesomeIcon
              icon={faGithub}
              className="fas fa-check text-emerald-500 group-hover:text-emerald-700 cursor-pointer text-lg"
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>

      <Image
        src={value.imgSrc}
        height={300}
        width={350}
        alt={value.name}
        className="rounded-lg border-gray-900 border-2"
      />

      <div className="flex-col flex gap-1 items-center justify-center text-xl font-palanquin text-gray-400">
        <p className="text-center">{value.description}</p>
        <p className="font-bold  text-center mt-1">{value.techStackUsed}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
