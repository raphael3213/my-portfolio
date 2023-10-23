import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <div className="mt-20 flex flex-col justify-center items-center gap-3">
      <h1 className="font-montserrat font-bold text-4xl text-blue-300">
        Get in touch
      </h1>
      <div className="flex items-center justify-around w-full max-sm:flex-col max-sm:justify-center">
        <p className="w-96 font-palanquin text-xl text-gray-400 p-5 max-sm:text-center">
          I am actively seeking new job opportunities and welcome you to connect
          with me
        </p>
        <Link
          href="mailto: raphael3213@gmail.com"
          placeholder="Email Me"
          className="border-solid border-[1.5px] px-6 py-3 rounded-sm hover:border-emerald-700 hover:text-emerald-700 border-emerald-500 text-center align-middle text-emerald-500 font-palanquin font-semibold text-xl shadow-2xl"
        >
          Email Me
        </Link>
      </div>
    </div>
  );
}

export default ContactMe;
