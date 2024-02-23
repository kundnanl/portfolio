"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroComponent = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hello, I am Laksh Kundnani",
      "I am a Software Engineer",
      "Currently a student at Sheridan College",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden object-cover">
      <BackgroundCircles />
      <Image
        className="rounded-full realtaive mx-auto h-32 w-32"
        width={32}
        height={32}
        src="/mf-avatar.svg"
        alt="Laksh Avatar"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[12px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl font-semibold lg:text-6xl scroll-px-10 px-4" >
          <span>{text}</span>
          <Cursor cursorColor="" />
        </h1>
        <div className="pt-5">
          <Button variant="ghost">
            <Link href="#about">About</Link>
          </Button>
            <Button variant="ghost">
                <Link href="#skills">Skills</Link>
            </Button>
            <Button variant="ghost">
                <Link href="#experience">Experience</Link>
            </Button>
            <Button variant="ghost">
                <Link href="#projects">Projects</Link>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
