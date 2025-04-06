import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "React-Redux",
  ];

  const backendSkills = ["Node.js", "Express.js", "Mongoose", "MongoDB", "MySql", "Postman"];

  const ProgLang = ['C', 'C++', 'Basic Java', 'Basic Python', 'JavaScript'];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed text-[17px] max-w-3xl mx-auto text-center">
            I’m a Computer Science undergraduate with a strong interest in full-stack development.
            I enjoy building clean, scalable web applications using modern technologies.
            I focus on writing efficient code and solving real-world problems through tech.
            Always committed to learning and improving with every project I take on.
            </p>

            <div className="grid grid-cols-1 gap-0.5">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {ProgLang.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science </strong> - Bennett University
                  | (2022- 2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures & Algorithms, Object Oriented Programming, Operating Systems, DBMS, Software Engineering,
                  Machine Learning...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏆 Achivements </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Dean’s List Award: 
                  </h4>
                  <p>
                    - Recognized for academic excellence with a GPA of 9.67/10.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Smart India Hackathon (SIH) 2024:
                  </h4>
                  <p>
                    Secured 88th rank among 400+ teams (university level).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Competitive Programming: 
                  </h4>
                  <p>
                    Solved 400+ problems on LeetCode and 250+ on GeeksforGeeks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};