import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("✅ Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* Animated RGB Glow Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md p-[2px] rounded-2xl"
      >
        {/* RGB Border Animation */}
        <div className="absolute inset-0 rounded-2xl animate-rgb-glow"></div>

        {/* Contact Card */}
        <div className="relative bg-[#13223d] shadow-lg rounded-2xl p-8 z-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Contact Us
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-1">Your Name</label>
              <motion.input
                type="text"
                name="user_name"
                required
                whileFocus={{ scale: 1.03, boxShadow: "0px 0px 12px #22d3ee" }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#1c2e4a] text-white border border-gray-600 rounded-lg px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-1">Your Email</label>
              <motion.input
                type="email"
                name="user_email"
                required
                whileFocus={{ scale: 1.03, boxShadow: "0px 0px 12px #22d3ee" }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#1c2e4a] text-white border border-gray-600 rounded-lg px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <motion.textarea
                name="message"
                rows="4"
                required
                whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px #22d3ee" }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#1c2e4a] text-white border border-gray-600 rounded-lg px-3 py-2 focus:outline-none"
              ></motion.textarea>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* 🔥 RGB Animation Keyframes */}
      <style>
        {`
          @keyframes rgbGlow {
            0% { box-shadow: 0 0 15px #ff0000, 0 0 30px #ff0000; }
            25% { box-shadow: 0 0 15px #00ff00, 0 0 30px #00ff00; }
            50% { box-shadow: 0 0 15px #0000ff, 0 0 30px #0000ff; }
            75% { box-shadow: 0 0 15px #ff00ff, 0 0 30px #ff00ff; }
            100% { box-shadow: 0 0 15px #ff0000, 0 0 30px #ff0000; }
          }
          .animate-rgb-glow {
            animation: rgbGlow 6s infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
