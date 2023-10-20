import Image from "next/image";
import React from "react";

function Introduction() {
  return (
    <article className="flex flex-col justify-center items-start gap-6 min-h-screen">
      <div className="flex flex-col gap-3">
        <p className="text-emerald-500 font-semibold text-md font-montserrat">
          Hi, my name is
        </p>

        <h1 className="text-8xl font-bold text-blue-300 font-signika">
          Joel Peter Dsouza.
        </h1>
        <h1 className="text-8xl text-blue-300 font-signika max-sm:hidden ">
          {" "}
          I love engineering software products
        </h1>
      </div>
      <div className="text-lg text-gray-400 font-palanquin">
        <p>
          I am a Full-Stack Developer who builds E2E solutions. Computer
          Technologies is my passion and alway love to learn.
        </p>
        <p>
          My journey as a developer is a story of continuous growth and endless
          curiosity, and I&apos;m excited to share it with you.
        </p>
      </div>
    </article>
  );
}

export default Introduction;
