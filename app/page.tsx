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
      <section className="px-72 max-lg:px-20 max-sm:px-20 max-md:px-20">
        <Introduction />
      </section>
      <section className="px-72 max-lg:px-20 max-sm:px-20 max-md:px-20">
        <AboutMe />
      </section>
      <section className="px-48 max-sm:px-20">
        <TechStack />
      </section>
      <section className="px-48 max-sm:px-20">
        <Projects />
      </section>
      <section className="px-48 max-sm:px-20">
        <ContactMe />
      </section>
      <section className="px-48 max-sm:px-20">
        <Footer />
      </section>
    </main>
  );
}
