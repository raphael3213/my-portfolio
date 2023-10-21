"use client";
import { myLinks, navLinks } from "@/constants";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    window.addEventListener("resize", () => setShowMenu(false), true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      window.removeEventListener("resize", () => setShowMenu(false), true);
    };
  });

  const handleShowMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <nav className="" ref={ref}>
      <div className="w-full flex justify-between items-center px-4 bg-gray-900 ">
        <div className="lg:hidden">
          <Image
            height={40}
            width={40}
            src={"/portfolio.png"}
            alt="Hamburger Icon"
          />
        </div>
        <div className=" hidden justify-center items-center text-white  lg:flex ">
          <div>
            <Image
              height={40}
              width={40}
              src={"/portfolio.png"}
              alt="Hamburger Icon"
            />
          </div>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="p-5 font-palanquin leading-normal font-semibold hover:text-emerald-500"
            >
              <Link href={link.path}>{link.name}</Link>
            </div>
          ))}
        </div>

        <div className="hidden justify-center items-center text-white lg:flex">
          {myLinks.map((link) => (
            <div key={link.name} className="p-5 font-montserrat font-semibold">
              <Link href={link.path} key={link.name}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center text-white p-5 lg:hidden">
          <Link href="/" onClick={() => setShowMenu((prevValue) => !prevValue)}>
            <Image
              height={30}
              width={30}
              src={"/menu-hamburger-white.svg"}
              alt="Hamburger Icon"
            />
          </Link>
        </div>
      </div>
      <Transition
        show={showMenu}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="shadow-lg absolute z-10 w-full ">
          {
            <ul className="text-center  bg-gray-900 cursor-pointer">
              {navLinks.map((link) => (
                <li key={link.name} className=" p-5 group">
                  <a
                    className="font-montserrat leading-normal  text-lg text-white font-semibold group-hover:text-emerald-500"
                    href={link.path}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          }
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;
