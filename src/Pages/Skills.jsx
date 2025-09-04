import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "Python","SQL","Git",
  "Node.js", "React.js", "GitHub", "MongoDB","MySql","Github"
];

// Animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Skills = () => {
  // Split skills into 2 columns
  const leftSkills = skills.slice(0, 6);
  const rightSkills = skills.slice(6);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-6 flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Column */}
        <motion.div className="flex flex-col gap-6" variants={container}>
          {leftSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-48 text-center border border-cyan-400 rounded-xl py-4
                         hover:bg-cyan-500/20 hover:scale-105 transition-transform duration-300
                         shadow-[0_0_10px_#22d3ee]"
              variants={item}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div className="flex flex-col gap-6" variants={container}>
          {rightSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-48 text-center border border-cyan-400 rounded-xl py-4
                         hover:bg-cyan-500/20 hover:scale-105 transition-transform duration-300
                         shadow-[0_0_10px_#22d3ee]"
              variants={item}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
