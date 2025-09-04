import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section (Text) */}
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold">Hello, It's Me</h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Hardik Agravat</h1>
          <h3 className="text-xl mt-2">
            And I'm a{" "}
            <motion.span
              className="text-cyan-400 font-semibold drop-shadow-[0_0_10px_#22d3ee]"
              initial={{ x: -50 }}
              animate={{ x: [ -50, 0, 50, 0 ] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              Web Developer
            </motion.span>
          </h3>

          <p className="mt-4 text-gray-300">
            I specialize in building modern, responsive websites and applications
            using React, Tailwind CSS, and JavaScript.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition transform duration-300"
            >
              <FaFacebook />
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition transform duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="mt-6">
            <a
              href="/Resume.pdf" // Place Resume.pdf inside public/ folder
              download="Hardik_Agravat_CV.pdf"
              className="relative inline-block px-6 py-3 rounded-full font-semibold text-white
               bg-cyan-500 hover:bg-cyan-600 transition-all duration-300
               shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee]
               hover:shadow-[0_0_25px_#22d3ee,0_0_50px_#22d3ee]"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Section (Profile Image) */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-72 h-72 rounded-3xl overflow-hidden border-4 border-cyan-500 shadow-[0_0_25px_#22d3ee] hover:scale-105 transition-transform duration-500">
            <img
              src="/images/hardik1.2.jpg" // put your profile image in public/images
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
