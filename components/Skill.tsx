import { motion } from "framer-motion";

type SkillProps = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: SkillProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://code.visualstudio.com/opengraphimg/opengraph-blog.png"
        className="rounded-full border border-gray-500 object-cover w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] xl:w-32 xl:h-32 filter group-hover:grayscale tranisition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32 top-0 left-0 rounded-full z-0 w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem]">
        <div className="flex items-center justify-center h-full ">
          <p className="text-xl lg:text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;