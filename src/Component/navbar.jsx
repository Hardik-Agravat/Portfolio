import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg fixed top-0 left-0 w-full z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left side - Portfolio */}
      <motion.div
        className="text-2xl font-bold tracking-wide"
        whileHover={{ scale: 1.05, color: "#facc15" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Hardik Agravat
      </motion.div>

      {/* Center - Navbar links */}
      <div className="flex space-x-6">
        {["Home", "About", "Skills", "Education", "Projects", "Contact"].map(
          (item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-cyan-600 text-white" // visited/active section
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {/* Hover animated background */}
                <span className="relative z-10">{item}</span>
                <motion.span
                  className="absolute inset-0 rounded-full bg-yellow-500 opacity-0"
                  whileHover={{ opacity: 0.2, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </NavLink>
            </motion.div>
          )
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
