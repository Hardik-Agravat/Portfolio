import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar";
import Contact from "./Component/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Projects from "./Pages/Project"; 

function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="bg-gradient-to-b from-gray-900 to-black py-6 text-center">
        <p className="text-gray-300">
          📞 +91 97253-06146 | ✉️ agravathardik855@gmail.com | 🔗{" "}
          <a
            href="https://www.linkedin.com/in/hardik-agravat-522671327/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} Hardik Agravat. All rights reserved.
        </p>
      </footer>
      </div>
  );
}

export default App;