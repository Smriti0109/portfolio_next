import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import GridBackground from './GridBackground';

const AboutContent = () => {
  return (
    <div>
      <div id="about" className="min-h-screen bg-gray-950 flex flex-col items-center justify-center ml-9 mr-9">
        <GridBackground />
      </div>
    </div>
  );
};

export default AboutContent;
