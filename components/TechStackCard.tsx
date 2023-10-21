import { validateHeaderValue } from "http";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface TechStackCardProps {
  name: string;
  path: string;
  img: string;
}
function TechStackCard({ value }: { value: TechStackCardProps }) {
  return (
    <Link
      href={value.path}
      className="relative h-32 w-32 max-sm:h-16 max-sm:w-16 opacity-75"
    >
      <Image
        alt={value.name}
        src={value.img}
        fill
        className="object-contain "
      />
    </Link>
  );
}

export default TechStackCard;
