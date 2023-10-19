import { myLinks, navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-4 bg-black">
      <div className="flex justify-start items-center text-white">
        {navLinks.map((link) => (
          <div key={link.name} className="p-5">
            <Link href={link.path}>{link.name}</Link>
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center text-white">
        {myLinks.map((link) => (
          <div key={link.name} className="p-5">
            <Link href={link.path} key={link.name}>
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
