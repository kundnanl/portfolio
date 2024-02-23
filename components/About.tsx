"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative h-screen flex flex-col md:flex-row space-y-8 items-center justify-center text-center object-cover mx-5">
      <motion.img
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={{ x: 0, opacity: 1 }}
        className="md:mb-0 w-40 h-40 rounded-full object-cover sm:flex md:rounded-lg md:w-[320px] md:h-[420px] xl:w-[400px] xl:h-[500px] mx-4"
        src="/personal.jpg"
      />
      <div className="text-left object-cover w-4/5 lg:w-1/2 rounded-lg p-4 text-gray-200">
        <h2 className="text-white text-3xl font-semibold lg:text-6xl scroll-px-10">
          About Me
        </h2>
        <p className="mt-4 font-normal text-md">
          Hello, I am <span className="text-white font-semibold text-lg">Laksh Kundnani</span>, a Software Engineer and a student at
          Sheridan College. I am passionate about building software and solving
          problems. I am currently looking for a Co-op/Internship opportunity
          for Fall 2024.
        </p>
      </div>
    </div>
  );
};

export default About;