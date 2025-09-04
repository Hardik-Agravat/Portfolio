import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (

    <motion.div
      className="p-10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

    <section
    id="about"
    className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-900 via-purple-900 to-black  text-white px-6" 
    >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi, I’m <span className="text-blue-400 font-semibold">Hardik Agravat</span>, 
            a passionate Web Developer currently studying at <span className="text-blue-300">SSASIT</span>. 
            I enjoy building scalable, responsive, and AI-powered applications that solve real-world problems.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            I specialize in <span className="text-blue-400">React.js</span>, 
            <span className="text-blue-400"> Node.js</span>, and 
            <span className="text-blue-400"> AI integration</span>. 
            My focus is on creating smooth user experiences, optimizing performance, 
            and experimenting with new technologies. Apart from coding, I love solving logical problems, 
            collaborating with teams, and continuously improving my skills.
            I am also available for  <span className="text-blue-400">Data Analytics</span>. Also i know the Ms Excel, Power BI, Tableau..
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Highlighted Projects</h3>
          <ul className="space-y-3 text-left mx-auto max-w-2xl">
            <li className="bg-black/30 p-4 rounded-xl shadow-md hover:bg-black/50  transition">
              <span className="text-blue-400 font-semibold">AI Design Generator:</span> 
              A tool where users can create AI-powered designs using prompts or reference images.
            </li>
            <li className="bg-black/30 p-4 rounded-xl shadow-md hover:bg-black/50 transition">
              <span className="text-blue-400 font-semibold">IoT Smart Home:</span> 
              Built with ESP8266 to control lights and fans with speed regulation via a mobile app.
            </li>
            <li className="bg-black/30 p-4 rounded-xl shadow-md hover:bg-black/50 transition">
              <span className="text-blue-400 font-semibold">Portfolio Website:</span> 
              A responsive one-page scrolling portfolio showcasing my skills, education, and projects.
            </li>
          </ul>
        </div>
      </section>

    </motion.div>
  );
};

export default About;
