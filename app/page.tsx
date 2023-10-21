import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-gray-900  ">
      <Navbar />
      <section
        id="introduction"
        className="px-72 max-lg:px-10 max-sm:px-10 max-md:px-10 max-lg:mt-24 max-sm:mt-24 max-md:mt-24"
      >
        <Introduction />
      </section>
      <section
        id="about-me"
        className="px-72 max-lg:px-10 max-sm:px-10 max-md:px-10 max-lg:mt-24 max-sm:mt-24 max-md:mt-24"
      >
        <AboutMe />
      </section>
      <section
        id="tech-stack"
        className="px-72 max-lg:px-10 max-sm:px-10 max-md:px-10 max-lg:mt-24 max-sm:mt-24 max-md:mt-24"
      >
        <TechStack />
      </section>
      <section
        id="projects"
        className="px-72 max-lg:px-10 max-sm:px-10 max-md:px-10 max-lg:mt-24 max-sm:mt-24 max-md:mt-24"
      >
        <Projects />
      </section>
      <section
        id="contact-me"
        className="px-72 max-lg:px-10 max-sm:px-10 max-md:px-10 max-lg:mt-24 max-sm:mt-24 max-md:mt-24"
      >
        <ContactMe />
      </section>
      <Footer />
    </main>
  );
}
