import React from "react";
import Image from "next/image";

function AboutMe() {
  return (
    <div className=" flex flex-col gap-4 mt-8">
      <h1 className="font-montserrat font-bold text-4xl text-blue-300 flex justify-center">
        About Me
      </h1>
      <div className="flex flex-wrap items-center justify-center w-full gap-8">
        <div className="font-palanquin text-gray-400 flex justify-start items-start flex-col gap-4 w-[500px]">
          <p className="text-xl">
            Hello, I&apos;m Joel, a seasoned Full Stack Developer with a 4-year
            track record of crafting innovative solutions. My proficiency spans
            across a diverse tech landscape, including Node.js, Java, Spring
            Boot, React.js, PostgreSQL, and ClickHouse.
          </p>
          <p className="text-xl">
            I also work with technologies like Kafka Streams and Spark, often
            integrating them with Delta Lake for the purpose of processing and
            storing event-driven data. I envision myself evolving into the role
            of a Software Architect. To prepare for this future career path, I
            actively engage in every facet of the software development process.
          </p>
          <p className="text-xl">
            When I&apos;m not immersed in code, you&apos;ll likely catch me at
            the gym, writing tech blogs, tackling LeetCode challenges, or
            embarking on epic adventures in the realm of MMORPGs.
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
