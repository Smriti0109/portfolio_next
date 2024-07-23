'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from "../../public/utils/cn";

// Tabs Component
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center">
      <div className="tab-titles flex space-x-4 mb-8">
        <motion.p
          className={`tab-links cursor-pointer ${activeTab === 'skills' ? 'active-links text-blue-500 font-bold' : ''}`}
          onClick={() => openTab('skills')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Skills
        </motion.p>
        <motion.p
          className={`tab-links cursor-pointer ${activeTab === 'certifications' ? 'active-links text-blue-500 font-bold' : ''}`}
          onClick={() => openTab('certifications')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Certifications
        </motion.p>
        <motion.p
          className={`tab-links cursor-pointer ${activeTab === 'education' ? 'active-links text-blue-500 font-bold' : ''}`}
          onClick={() => openTab('education')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Education
        </motion.p>
      </div>

      <div className="tab-contents w-full">
        {activeTab === 'skills' && (
          <motion.div
            id="skills"
            className="active-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <span className="font-semibold">Language:</span> C++ / Java / Python / Ruby / Erlang
              </li>
              <li className="mb-2"><span className="font-semibold">Database:</span> Mysql</li>
              <li className="mb-2">
                <span className="font-semibold">Web Development:</span> HTML / CSS / JavaScript / Bootstrap
              </li>
              <li className="mb-2">
                <span className="font-semibold">Data structure & Algorithm:</span> Arrays / Strings / Linked Lists / Stack & Queue
              </li>
              <li className="mb-2"><span className="font-semibold">Operating System:</span> Windows / Linux</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'certifications' && (
          <motion.div
            id="certifications"
            className="active-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="list-disc list-inside">
              <li className="mb-2"><span className="font-semibold">NPTEL:</span> Introduction to Operating Systems</li>
              <li className="mb-2"><span className="font-semibold">NPTEL:</span> Database Management Systems</li>
              <li className="mb-2"><span className="font-semibold">UDEMY:</span> Data Structure & Algorithms</li>
              <li className="mb-2"><span className="font-semibold">COURSERA:</span> Cyber Security</li>
              <li className="mb-2"><span className="font-semibold">COURSERA:</span> OOPs in Java</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'education' && (
          <motion.div
            id="education"
            className="active-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="list-disc list-inside">
              <li className="mb-2"><span className="font-semibold">2017-2018:</span> 10th at DAV Public School</li>
              <li className="mb-2"><span className="font-semibold">2019-2020:</span> 12th at Central Academy</li>
              <li className="mb-2">
                <span className="font-semibold">2021-2025:</span> BTech at Bharati Vidyapeeth College of Engineering <br />CGPA - 9.7
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Main Component
const GridBackground = () => {
  return (
    <div className="relative min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Container for content */}
      <div className="relative z-20 flex flex-col items-center gap-2 px-4">
        <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-white py-6 text-center">
          About Me
        </p>
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-8 relative border-4 border-blue-500 rounded-full overflow-hidden ">
          <Image
            src="/images/about-photo.png"
            alt="About Photo"
            layout="fill"
            className="object-cover"
          />
        </div>

        <div className="bio text-center ">
          <p className="text-base sm:text-lg md:text-l text-gray-700 dark:text-gray-300 mx-4 sm:mx-12 md:mx-24 lg:mx-40 font-sans italic text-center opacity-80 hover:opacity-100 duration-500">
            Hello there! I&apos;m Smriti Singh, a dedicated fourth-year engineering student pursuing a degree in computer science. I have knowledge about various programming languages like C++, C, Java, Python, Ruby, Haskell, etc.
          </p>

          <div className={cn("max-w-2xl mx-auto border border-gray-200 rounded-lg shadow dark:border-gray-700 overflow-hidden mt-8 bg-opacity-20 bg-gray-200 dark:bg-opacity-60 dark:bg-gray-800")}>
            <div className="p-5">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
