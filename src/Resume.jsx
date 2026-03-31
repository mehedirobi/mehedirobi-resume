import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-100 flex justify-center py-10 px-4 print:bg-white print:py-0">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 sm:p-8 text-gray-800 print:shadow-none print:rounded-none">
        
        {/* Header */}
        <header className="border-b pb-4 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Mehedi Robi</h1>
              <p className="text-gray-600 text-sm">React Frontend Developer</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-600 mt-2 sm:mt-0">
              <span>mehedirobidev@gmail.com</span>
              <span>+8801336458100</span>

              <a href="https://github.com/mehedirobi" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mehedirobii/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
              <a href="https://mehedi-robi-portfolio.netlify.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                Portfolio
              </a>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="text-base font-semibold mb-1">Summary</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>React Frontend Developer</strong> building scalable, high-performance web applications.
            Skilled in <strong>JavaScript, React, Tailwind CSS</strong> with basic MERN stack experience.
            Focused on clean, maintainable code, reusable components, and modern UI/UX.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-base font-semibold mb-2">Skills</h2>

          <div className="flex flex-wrap gap-8 text-sm">
            <div className="flex flex-col gap-1 min-w-[140px]">
              <h3 className="font-medium">Frontend</h3>
              <span>HTML5, CSS3, Tailwind</span>
              <span>JavaScript (ES6+)</span>
              <span>React.js</span>
              <span>Responsive Design</span>
            </div>

            <div className="flex flex-col gap-1 min-w-[140px]">
              <h3 className="font-medium">Backend</h3>
              <span>Node.js, Express.js</span>
              <span>MongoDB (Basic)</span>
              <span>MERN Stack</span>
              <span>Next.js (Basic)</span>
            </div>

            <div className="flex flex-col gap-1 min-w-[140px]">
              <h3 className="font-medium">Tools</h3>
              <span>Git & GitHub</span>
              <span>Firebase</span>
              <span>REST API</span>
              <span>Performance Optimization</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2 className="text-base font-semibold mb-2">Projects</h2>

          <div className="space-y-3 text-sm">
            <div>
              <h3 className="font-medium">UrbanFix</h3>
              <p className="text-gray-600">
                Platform for reporting and tracking city infrastructure issues. Improves transparency and response time.
              </p>
              <p className="text-xs text-gray-500">React, Tailwind, Firebase</p>
              <p className="text-xs text-blue-600">
                <a href="https://urban-fix-project-01.netlify.app/" target="_blank" rel="noreferrer" className="hover:underline">Live</a> |{" "}
                <a href="https://github.com/mehedirobi/urban-fix-project" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </p>
            </div>

            <div>
              <h3 className="font-medium">ToyVerse</h3>
              <p className="text-gray-600">
                Toy browsing platform with authentication and protected routes using modern React architecture.
              </p>
              <p className="text-xs text-gray-500">React, Firebase, Tailwind</p>
              <p className="text-xs text-blue-600">
                <a href="https://toyverse-project-01.netlify.app/" target="_blank" rel="noreferrer" className="hover:underline">Live</a> |{" "}
                <a href="https://github.com/mehedirobi/toyverse-project" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </p>
            </div>

            <div>
              <h3 className="font-medium">PawMart</h3>
              <p className="text-gray-600">
                Pet adoption and e-commerce platform for browsing, adopting, and purchasing pet products.
              </p>
              <p className="text-xs text-gray-500">React, Tailwind, Firebase</p>
              <p className="text-xs text-blue-600">
                <a href="https://pawmart-project-01.netlify.app/" target="_blank" rel="noreferrer" className="hover:underline">Live</a> |{" "}
                <a href="https://github.com/mehedirobi/pawmart-project" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-base font-semibold mb-2">Education</h2>
          <div className="text-sm">
            <h3 className="font-medium">Diploma in Computer Science & Technology</h3>
            <p className="text-gray-700">
              AITVET, Dhaka <br />
              2023 – Present
            </p>
          </div>
        </section>

        {/* Additional */}
        <section>
          <h2 className="text-base font-semibold mb-2">Additional</h2>
          <ul className="text-sm list-disc list-inside text-gray-700 space-y-1">
            <li>Problem-solving and debugging skills</li>
            <li>Real-world project experience</li>
            <li>Clean code and performance-focused development</li>
            <li>Continuous learning mindset</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Resume;