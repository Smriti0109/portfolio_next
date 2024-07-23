'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "../../public/utils/cn";

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

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden", className)}>
      <div className="p-5">{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12">
      <Card>
        <Tabs />
      </Card>
    </div>
  );
};

export default App;
