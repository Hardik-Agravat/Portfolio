import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Exterior Design",
    description:
      "AI-powered app that generates building exterior designs from prompts and reference images.",
    image: "Project/AI Exterior desingning.png", // only this one has image
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and TailwindCSS.",
    image: "Project/Screenshot 2025-09-03 172338.png"
  },
  {
    title: "Smart Home IoT",
    description:
      "IoT project using ESP8266 to control lights and fans with speed regulation.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-blue-500/50 overflow-hidden transition"
          >
            {/* Show image only if project has one */}
            {project.image && (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full object-contain max-h-[500px] bg-black"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            )}

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
