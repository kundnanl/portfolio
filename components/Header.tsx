import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeaderComponent = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="rounded-full text-gray-400 hover:text-blue-500"
          fgColor="currentColor"
          bgColor="transparent"
          url="https://www.linkedin.com/in/lakshkundnani/"
        />
        <SocialIcon
          className="rounded-full text-gray-400 hover:text-pink-500/90"
          fgColor="currentColor"
          bgColor="transparent"
          url="https://www.instagram.com/lakshkundnanii/"
        />{" "}
        <SocialIcon
          className="rounded-full text-gray-400 hover:text-white"
          fgColor="currentColor"
          bgColor="transparent"
          url="https://github.com/kundnanl"
        />
        <SocialIcon
          className="rounded-full hover:text-white text-gray-400"
          fgColor="currentColor"
          bgColor="transparent"
          url="https://www.x.com/lakshkundnanii"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-400 hover:text-white cursor-pointer"
      >
        <Button
        variant="ghost"
          className="flex items-center justify-center"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="currentColor"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm mt-1">
            Contact me
          </p>
        </Button>
      </motion.div>
    </header>
  );
};

export default HeaderComponent;
