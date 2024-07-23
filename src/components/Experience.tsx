'use client'

import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

const Experience = () => {
  return (
    <div id="experience">
    <h1 className='text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-white py-6 text-center mt-32'>Experience</h1>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={proj} />
    </div>
    </div>
  )
}


export const proj = [
  {
    title: "Octanet pvt. Limited",
    description:
      "Developed and maintained web applications using technologies such as JavaScript, React, Node.js, and Express.",
    link: "",
  },
  {
    title: "Cognifyz Technologies",
    description:
      "Implemented responsive design techniques to provide an optimal user experience across various devices.",
    link: "",
  },
  {
    title: "CodeYourself",
    description:
      "Developed and maintained full-stack web applications using a combination of front-end and back-end technologies. Collaborated with product managers and designers to understand requirements and deliver high-quality solutions.",
    link: "",
  },
  
];


export default Experience