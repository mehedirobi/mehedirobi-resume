import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-100 flex justify-center py-10 px-4 print:bg-white print:py-0">
      {/* A4 Container */}
      <div
        className="w-full max-w-[794px] bg-white shadow-md rounded-xl p-6 text-gray-800 
                      print:shadow-none print:rounded-none print:max-w-full print:p-4"
      >
        {/* Header */}
        <header className="border-b pb-3 mb-4">
          <div className="flex justify-between items-center">
            {/* Left */}
            <div>
              <h1 className="text-2xl font-bold leading-tight whitespace-nowrap">
                Mehedi Robi
              </h1>
              <p className="text-gray-600 text-xs">React Frontend Developer</p>
            </div>

            {/* Right (NO WRAP GUARANTEED) */}
            <div className="flex gap-3 text-[11px] text-gray-600 whitespace-nowrap">
              <span>mehedirobidev@gmail.com</span>
              <span>+8801336458100</span>

              <a
                href="https://github.com/mehedirobi"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mehedirobii/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                LinkedIn
              </a>

              <a
                href="https://mehedi-robi-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                Portfolio
              </a>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-4">
          <h2 className="text-sm font-semibold mb-1">Summary</h2>
          <p className="text-xs text-gray-700 leading-relaxed">
            <strong>React Frontend Developer</strong> building scalable,
            high-performance web applications. Skilled in{" "}
            <strong>JavaScript, React, Tailwind CSS</strong> with MERN
            fundamentals. Focused on clean architecture, reusable components,
            and performance.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-sm font-semibold mb-2">Skills</h2>

          <div className="flex justify-between text-xs">
            <div className="flex flex-col gap-1">
              <h3 className="font-medium">Frontend</h3>
              <span>HTML5, CSS3, Tailwind</span>
              <span>JavaScript (ES6+)</span>
              <span>React.js</span>
              <span>Responsive Design</span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-medium">Backend</h3>
              <span>Node.js, Express.js</span>
              <span>MongoDB</span>
              <span>MERN Stack</span>
              <span>Next.js (Basic)</span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-medium">Tools</h3>
              <span>Git & GitHub</span>
              <span>Firebase</span>
              <span>REST API</span>
              <span>Optimization</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h2 className="text-sm font-semibold mb-2">Projects</h2>

          <div className="space-y-3 text-xs leading-relaxed">
            {/* UrbanFix */}
            <div>
              <h3 className="font-medium">UrbanFix</h3>
              <p className="text-gray-600">
                City infrastructure management platform enabling users to
                report, track, and resolve issues with real-time updates and
                role-based access.
              </p>
              <p className="text-gray-500">
                React, Tailwind, Firebase, Node.js, Express.js
              </p>
              <p className="text-blue-600 whitespace-nowrap">
                <a
                  href="https://urban-fix-project-01.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/mehedirobi/urban-fix-project"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>

            {/* ToyVerse */}
            <div>
              <h3 className="font-medium">ToyVerse</h3>
              <p className="text-gray-600">
                Toy browsing platform with authentication, product details,
                ratings, and personalized user features such as profile and
                order management.
              </p>
              <p className="text-gray-500">
                React, Tailwind, Firebase, Node.js, Express.js
              </p>
              <p className="text-blue-600 whitespace-nowrap">
                <a
                  href="https://toyverse-project-01.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/mehedirobi/toyverse-project"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>

            {/* PawMart */}
            <div>
              <h3 className="font-medium">PawMart</h3>
              <p className="text-gray-600">
                Pet adoption and e-commerce platform allowing users to list,
                adopt pets, and purchase pet products through an integrated
                marketplace.
              </p>
              <p className="text-gray-500">
                React, Tailwind, Firebase, Node.js, Express.js
              </p>
              <p className="text-blue-600 whitespace-nowrap">
                <a
                  href="https://pawmart-project-01.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Live
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/mehedirobi/pawmart-project"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-4">
          <h2 className="text-sm font-semibold mb-1">Education</h2>
          <div className="text-xs">
            <h3 className="font-medium">
              Diploma in Computer Science & Technology
            </h3>
            <p className="text-gray-700">AITVET, Dhaka | 2023 – Present</p>
          </div>
        </section>

        {/* Additional */}
        <section>
          <h2 className="text-sm font-semibold mb-1">Additional</h2>
          <ul className="text-xs list-disc list-inside text-gray-700 space-y-1">
            <li>Problem-solving & debugging</li>
            <li>Real-world project experience</li>
            <li>Clean, maintainable code</li>
            <li>Continuous learning</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
