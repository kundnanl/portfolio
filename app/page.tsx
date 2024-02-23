"use client"
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import HeaderComponent from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y scroll-smooth snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray400/20 scrollbar-thumb-gray-200">
      <HeaderComponent />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-center">
      <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-10 w-full cursor-pointer sm:bottom-5">
          <div className="flex items-center justify-center">
            <Image 
            className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-300 ease-in-out hover:scale-110 transform"
            src="/mf-avatar.svg" alt="" 
            width={40}
            height={40} 
            />
          </div>
        </footer>
      </Link> 
    </div>
  );
}
