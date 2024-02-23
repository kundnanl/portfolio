"use client";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
    index: 1,
    name: "Cerebro",
    description:
      "Cerebro is a complete Software as a Service (SaaS) platform developed by Laksh Kundnani. This project is built from scratch using Next.js 13, React, Prisma, tRPC, Tailwind, and other cutting-edge technologies. It serves as a comprehensive example of building a modern SaaS application with a rich feature set.",
    image: "/cerebro.png",
    link: "https://www.github.com/kundnanl/cerebro"
    },
    {
    index: 2,
    name: "Discord Clone",
    description: 
    "A robust Discord clone with real-time messaging, voice/video calls, attachment support, and server management. Powered by Socket.io, TailwindCSS, Prisma, and Clerk. Beautiful UI, light/dark modes, and responsive design. See README for features and setup. Happy coding!",
    image: "/discord-clone.png",
    link: "https://www.github.com/kundnanl/discord-clone"
    },
    {
    index: 3,
    name: "FreeScribe",
    description:
    "This is a highly scalable AI-powered application that can convert your voice to 89 different languages in Seconds, The model has been trained with wide number of dataset giving the accuracy of 89%",
    image: "/FreeScribe.png",
    link: "https://www.github.com/kundnanl/langmaster"
    },
  ];
  let boxVariants = {};
  let isMobile = false;

  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      boxVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      };
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative overflow-hidden text-left items-center justify-evenly flex z-0 mx-auto "
    >
      <h3 className="absolute uppercase tracking-[12px] top-24 text-3xl font-bold text-white">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-10 md:mt-40 lg:mt-10 xl:mt-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-200 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-10 md:p-44 h-screen "
          >
            <motion.img
              variants={boxVariants}
              alt=""
              src={project.image}
              height={!isMobile ? 400 : 250}
              width={!isMobile ? 400 : 250}
              className="rounded-[10px]"
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl md:text-3xl lg:text-4xl mt-4 font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {project.index} of 3
                </span>{" "}
                {project.name}
              </h4>

              <p className="text-sm md:text-lg mt-0">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A] left-0 h-[400px] -skew-y-12 opacity-10" />
    </motion.div>
  );
};

export default Projects;
