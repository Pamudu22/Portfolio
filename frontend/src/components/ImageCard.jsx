import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiJavascript,
  SiTypescript, SiPhp, SiPython, SiGit, SiGithub, SiJira,
  SiTailwindcss, SiBootstrap, SiHtml5, SiCss3
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';           
import { SiSpring } from 'react-icons/si';  
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


import Mycv from '../assets/PamuduWijayabandara - CV SE(intern).pdf'
import myProfile from '../assets/PamuduWijayabandara.jpg';
import { Suspense, lazy } from 'react';

const DeveloperAnimation = lazy(() => import('./DeveloperAnimation'));

function ImageCard() {
  const titles = ["Software Engineer", "Full-Stack Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const techStack = [
  { icon: <SiReact className="text-sky-500" />, name: "React" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-800" />, name: "Express" },
  { icon: <FaJava className="text-orange-600" />, name: "Java" },
  { icon: <SiSpring className="text-green-700" />, name: "Spring" },
  { icon: <SiMysql className="text-blue-700" />, name: "MySQL" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
   { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <SiCss3 className="text-blue-600" />, name: "CSS" },
  { icon: <SiPhp className="text-indigo-600" />, name: "PHP" },
  { icon: <SiPython className="text-blue-400" />, name: "Python" },
  { icon: <SiGit className="text-orange-500" />, name: "Git" },
  { icon: <SiGithub className="text-black" />, name: "GitHub" },
  { icon: <SiJira className="text-blue-500" />, name: "JIRA" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" },
  { icon: <SiBootstrap className="text-purple-600" />, name: "Bootstrap" }
 
];


  return (
    <div className="flex flex-col md:flex-row items-start gap-10 mt-10 mx-6 md:mx-10">
      
        {/* Profile Image + Animation Section */}
        <div className="flex-1 flex flex-col items-center">
        <div className="p-2 border-4 border-gray-500 rounded-xl shadow-lg w-fit">
            <img
            alt="Pamudu Wijayabandara"
            src={myProfile}
            className="w-64 h-64 object-cover rounded-lg"
            />
        </div>

        {/* Animated Developer Illustration */}
       <Suspense fallback={<div className="h-64" />}>
       <DeveloperAnimation />

       </Suspense>
        </div>
    {/* Middle: Intro Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900">Hi, I'm Pamudu Wijayabandara</h1>
        <AnimatePresence mode="wait">
          <motion.h2
            key={titles[currentTitleIndex]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-blue-600 mt-2"
          >
            {titles[currentTitleIndex]}
          </motion.h2>
        </AnimatePresence>
        <p className="mt-4 text-gray-700">
          I’m a passionate software engineering undergraduate with experience in building full-stack web applications. 
          I enjoy learning new technologies and solving real-world problems through code.
        </p>
        <p className="mt-14 text-gray-700 font-semibold text-center md:text-left">
        Connect with me on
        </p>
        <div className="mt-12 flex justify-center md:justify-start gap-6 text-6xl">
                <a
                    href="https://www.linkedin.com/in/pamudu-wijayabandara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition duration-200"
                    title="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Pamudu22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition duration-200"
                    title="GitHub"
                >
                    <FaGithub />
                </a>
                
             <a
                href="mailto:pamuduwijayabandara@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition duration-200"
                title="Send me an email"
                >
                <MdEmail />
                </a>
                </div>


                <div className="mt-14">
                    <a
                        href={Mycv}
                        download
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition duration-200"
                    >
                        Download My CV
                    </a>
                    </div>


      </div>

      {/* Right: Tech Stack Icons */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">Tech Stack</h3>
        <div className="grid grid-cols-3 gap-4 justify-items-center md:justify-items-start">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-sm text-gray-600">
              <div className="text-3xl">{tech.icon}</div>
              <span className="mt-1">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
