import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      {/* Heading Animation */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/50 transition"
        >
          <h2 className="text-2xl font-semibold">B.E. in Computer Engineering</h2>
          <p className="mt-2 text-gray-300">SSASIT, Currently Pursuing</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/50 transition"
        >
          <h2 className="text-2xl font-semibold">Higher Secondary Education</h2>
          <p className="mt-2 text-gray-300">Science Stream, Gujarat Board</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
