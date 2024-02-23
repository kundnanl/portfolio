import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    { title: "TailwindCSS", image: "/images/Tailwind.jpg", proficiency: 82, isLeft:true },
    { title: "React.JS", image: "/images/react.png", proficiency: 92, isLeft:true },
    { title: "Docker", image: "/images/docker.png", proficiency: 75, isLeft:false },
    { title: "NextJS", image: "/images/next.png", proficiency: 85, isLeft:false },
    { title: "Java", image: "/images/Java.png", proficiency: 90, isLeft:true },
    { title: "Cyber Security", image: "/images/cyber.jpg", proficiency: 88, isLeft: true },
    { title: "AWS", image: "/images/aws.png", proficiency: 82, isLeft: false },
    { title: "SQL", image: "/images/sql.png", proficiency: 84, isLeft: false},
    { title: "Python", image: "/images/Python.png", proficiency: 92, isLeft: true},
    { title: "MongoDB", image: "/images/mongodb.png", proficiency: 74, isLeft: true},
    { title: "Figma", image: "/images/figma.png", proficiency: 78, isLeft: false},
    { title: "JavaScript", image: "/images/JavaScript.png", proficiency: 90, isLeft: false},
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] mx-4 xl:px-10 min-h-screen xl:space-x-10 items-center justify-center"
    >
      <h3 className="absolute uppercase tracking-[12px] top-24 text-3xl font-bold text-white">
        Skills
      </h3>
      <h4 className="absolute top-36 text-white text-xl tracking-[6px] mt-10 md:mt-0 md:text-3xl xl:text-xl">
        Hover over a skill to see my proficiency
      </h4>
      <div className="mt-40 md:mt-30 lg:mt-20 grid lg:grid-cols-4 grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div 
          key={index}
          className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: skill.isLeft ? -50 : 50,
                opacity: 0,
              }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={skill.image}
              alt={skill.title}
              className="rounded-full border border-gray-500 object-cover w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <motion.div
              initial={{
                x: skill.isLeft ? -50 : 50,
              }}
              transition={{ duration: 0.8 }}
              animate={{
                x: 0,
              }}
              className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32 top-0 left-0 rounded-full z-0 w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem]"
            >
              <div className="flex items-center justify-center h-full ">
                <p className="text-xl lg:text-3xl font-bold text-black opacity-100">
                  {skill.proficiency}%
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
