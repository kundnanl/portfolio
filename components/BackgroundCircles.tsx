import { motion } from "framer-motion";
import { useState } from "react";

const BackgroundCircles = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onAnimationComplete = () => {
    setIsVisible(false);
  };

  return (
    <>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.6, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            transitionEnd: {
              display: "none",
              scale: 0,
            },
            transition: {
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.5,
            }
          }}
          transition={{
            duration: 2.5,
          }}
          className="relative flex items-center justify-center top-0 left-0"
        >
          <div className=" absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
          <div className=" absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
          <div className=" absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
          <div className="rounded-full border border-gray-300 opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
          <div className="rounded-full border border-gray-300 opacity-20 h-[800px] w-[800px] absolute mt-52 animate-pulse" />
        </motion.div>
    </>
  );
};

export default BackgroundCircles;
