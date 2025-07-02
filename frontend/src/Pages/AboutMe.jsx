import React from 'react';
import { FaUserGraduate, FaLaptopCode, FaRocket, FaHandsHelping, FaCode, FaBrain } from 'react-icons/fa';
import myImage from '../assets/Pamudu.png';

function AboutMe() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Left Column - Profile Image */}
        <div className="flex justify-center">
          <img
            src={myImage}
            alt="Pamudu Wijayabandara"
            className="rounded-xl shadow-lg w-64 h-80 object-cover"
          />
        </div>

        {/* Right Columns - Info */}
        <div className="md:col-span-2 space-y-8">

          {/* Personal Intro */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <FaCode className="text-blue-500 text-3xl mt-1" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-1">Short Personal Intro</h2>
                <p className="text-justify">
                  I’m a dedicated and enthusiastic Software Engineering undergraduate with a strong foundation in full-stack web development and a passion for building clean, efficient, and scalable applications.
                  With hands-on experience in both academic and personal projects, I enjoy translating complex ideas into real-world digital solutions using technologies like React, Node.js, and Java.
                  I thrive in collaborative environments, continuously seek to improve my skills, and stay up-to-date with modern development practices.
                  My ultimate goal is to contribute meaningfully to innovative projects that solve real-world problems and improve user experiences.
                </p>
              </div>
            </div>

          {/* Education */}
          <div className="flex items-start gap-4">
            <FaUserGraduate className="text-green-600 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Education</h2>
              <p>Currently pursuing BSc (Hons) in Software Engineering at Saegis Campus, Nugegoda.</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex items-start gap-4">
            <FaLaptopCode className="text-purple-600 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Technologies I Enjoy</h2>
              <p>
                I work mostly with MERN Stack, Java, Springboot, MySQL and MongoDB. I love building responsive, scalable apps.
              </p>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="flex items-start gap-4">
            <FaHandsHelping className="text-yellow-500 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Soft Skills & Qualities</h2>
              <p>I’m a fast learner, team player, and love collaborating on projects.</p>
            </div>
          </div>

          {/* Career Goals */}
          <div className="flex items-start gap-4">
            <FaRocket className="text-red-500 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Career Goal</h2>
              <p>
                I’m currently seeking internship opportunities where I can grow as a full-stack developer and contribute to real-world projects.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="flex items-start gap-4">
            <FaBrain className="text-indigo-500 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-1">Interests</h2>
              <p>
                I'm especially interested in full-stack development, web and backend engineering, and I'm eager to learn more about Artificial Intelligence and Machine Learning.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
