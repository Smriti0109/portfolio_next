'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 100) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div id="contact" className="bg-black bg-opacity-90 text-white py-20 flex items-center justify-center min-h-screen">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex flex-wrap justify-center items-center">
          <motion.div
            className="w-full text-center"
            variants={itemVariants}
          >
            <h1 className="sub-title text-3xl font-bold mb-6">Contact Me</h1>
        

            <p className="flex items-center justify-center mb-4">
              <FaPaperPlane className="mr-2" /> smritisingh0109@gmail.com
            </p>
            <p className="flex items-center justify-center mb-4">
              <FaPhone className="mr-2" /> 91+ 8407875045
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <form className="text-center">
              <input type="text" name="Name" placeholder="Your Name" required className="w-full mb-4 p-2 rounded-md bg-gray-800"/>
              <input type="email" name="email" placeholder="Your Email" required className="w-full mb-4 p-2 rounded-md bg-gray-800"/>
              <textarea name="Message" rows={6} placeholder="Your Message" className="w-full mb-4 p-2 rounded-md bg-gray-800"></textarea>
              <button type="submit" className="btn btn2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">Submit</button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      
    </div>
  );
}
