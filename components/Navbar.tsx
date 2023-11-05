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
    <nav className="p-2" ref={ref}>
      <div className="w-full flex justify-between items-center px-4 bg-gray-900 ">
        <div className="xl:hidden">
          <Image
            height={40}
            width={40}
            src={"/portfolio.png"}
            alt="Hamburger Icon"
          />
        </div>
        <div className=" hidden justify-center items-center text-gray-400  xl:flex ">
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
              className="p-5 font-palanquin leading-normal font-semibold cursor-pointer hover:text-emerald-500"
            >
              <Link href={link.path}>{link.name}</Link>
            </div>
          ))}
        </div>

        <div className="hidden justify-center items-center text-gray-400 xl:flex gap-2">
          {myLinks.map((link) => (
            <div
              key={link.name}
              className="p-5 font-montserrat font-semibold cursor-pointer hover:text-emerald-500"
            >
              <Link href={link.path} key={link.name} prefetch={false}>
                {link.name}
              </Link>
            </div>
          ))}
          <Link
            href="https://drive.google.com/file/d/1sV0GYY7SwNzVyzYsTizrnvyHxP3K_wnQ/view?usp=sharing"
            placeholder="Resume"
            className="border-solid border-[1.5px] px-4 py-2 rounded-sm hover:border-emerald-700 hover:text-emerald-700 border-emerald-500  text-emerald-500 font-palanquin font-semibold text-lg mb-1"
          >
            Resume
          </Link>
        </div>

        <div className="flex justify-center items-center text-gray-400 p-5 xl:hidden">
          <Link
            href="/"
            onClick={() => setShowMenu((prevValue) => !prevValue)}
            prefetch={false}
          >
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
                <li key={link.name} className=" p-5 group ">
                  <a
                    className="font-montserrat leading-normal  text-lg text-white font-semibold group-hover:text-emerald-500"
                    href={link.path}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="p-5">
                <Link
                  href="https://drive.google.com/file/d/1sV0GYY7SwNzVyzYsTizrnvyHxP3K_wnQ/view?usp=sharing"
                  placeholder="Resume"
                  className="border-solid border-[1.5px] px-4 py-2 rounded-sm hover:border-emerald-700 hover:text-emerald-700 border-emerald-500  text-emerald-500 font-palanquin font-semibold text-lg mb-1"
                >
                  Resume
                </Link>
              </li>
            </ul>
          }
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;
