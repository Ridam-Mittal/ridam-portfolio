import { useEffect } from "react";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";


export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Ridam<span className="text-blue-500"> Mittal</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
            <a
              href="https://leetcode.com/u/Ridam_Mittal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 text-2xl hove:text-white transition-colors"
            >
              {" "}
              <SiLeetcode />
             {" "}
            </a>
            <a
              href="https://www.linkedin.com/in/ridam-mittal-2b602a25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-2xl hove:text-white transition-colors"
            >
              {" "}
              <FaLinkedin />
             {" "}
            </a>
            <a
              href="https://github.com/Ridam-Mittal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hove:text-white transition-colors"
            >
              {" "}
              <FaGithub/>
             {" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};