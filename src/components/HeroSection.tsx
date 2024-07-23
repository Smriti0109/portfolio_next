"use client";
import Sparkles from "./Sparkles";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function HeroSection() {

    const words = [
        {
          text: "Hii , ",
        },
        {
          text: "I'm ",
        },
        {
          text: "Smriti",
          className: "text-blue-500 dark:text-blue-500 font-extrabold	",
        },
        {
          text: "from",
        },
        {
          text: "India.",
          className: "text-orange-500 dark:text-orange-500",
        },
      ];
  return (
   
<>
<div className="flex flex-col items-center justify-center h-[10rem]  ">
      
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Explore my Road of Journey with Me !!
      </p>
      </div>
    </>
  )
}

export default HeroSection