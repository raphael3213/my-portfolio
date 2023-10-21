import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <Link href={value.path} placeholder={value.name} className="cursor-pointer">
      <div className="h-[400px] w-[400px] p-3 flex flex-col justify-start items-center gap-4 shadow-2xl mt-4 ">
        <h1 className="text-2xl font-montserrat font-semibold text-emerald-500">
          {value.name}
        </h1>
        <Image src={value.imgSrc} height={300} width={350} alt={value.name} />

        <div className="flex-col flex gap-1 items-center justify-center text-xl font-palanquin text-gray-400">
          <p className="text-center">{value.description}</p>
          <p className="font-semibold text-emerald-500 text-center mt-1">
            {value.techStackUsed}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
