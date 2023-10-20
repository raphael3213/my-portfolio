import React from "react";
import Image from "next/image";

function AboutMe() {
  return (
    <div className=" flex flex-col gap-4 min-h-screen">
      <div className="flex flex-wrap items-center justify-center w-full gap-8">
        <div className="font-palanquin text-gray-400 flex justify-start items-start flex-col gap-4 w-[500px]">
          <h1 className="font-montserrat font-bold text-4xl text-blue-300">
            About Me
          </h1>
          <p className="text-xl">
            Hello, I&apos;m Joel Peter, a seasoned Full Stack Developer with a
            4-year track record of crafting innovative solutions. My proficiency
            spans across a diverse tech landscape, including Node.js, Java,
            Spring Boot, React.js, Kafka, and Spark.
          </p>
          <p className="text-xl">
            When I&nbsp;m not immersed in code, you&nbsp;ll likely catch me at
            the gym, tackling LeetCode challenges, or embarking on epic
            adventures in the realm of MMORPGs.
          </p>
          <p className="text-xl">
            When I&nbsp;m not immersed in code, you&nbsp;ll likely catch me at
            the gym, tackling LeetCode challenges, or embarking on epic
            adventures in the realm of MMORPGs.
          </p>
          <p className="text-xl">
            When I&nbsp;m not immersed in code, you&nbsp;ll likely catch me at
            the gym, tackling LeetCode challenges, or embarking on epic
            adventures in the realm of MMORPGs.
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <Image
            src="/me.png"
            alt="My Photo"
            height={340}
            width={340}
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
