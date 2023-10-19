import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-w-[400px]">
      <section>
        <Navbar />
      </section>
      <section>
        <Introduction />
      </section>
      <section>
        <TechStack />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ContactMe />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
