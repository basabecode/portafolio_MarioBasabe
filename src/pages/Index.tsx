import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillNebula from "@/components/Background/SkillNebula";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight &&
        sectionId
      ) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <SkillNebula density="medium" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Navbar activeSection={activeSection} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="sobre">
            <About />
          </section>
          <section id="experiencia">
            <Experience />
          </section>
          <section id="proyectos">
            <Projects />
          </section>
          <section id="contacto">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
