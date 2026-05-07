import React from "react";

const Resume = () => {
  const projects = [
    {
      name: "UrbanFix",
      tech: "React.js • Tailwind CSS • Firebase",
      live: "https://urban-fix-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/urban-fix-project",
      points: [
        "Developed a civic issue reporting platform with authentication and role-based workflows.",
        "Built responsive React interfaces using reusable component architecture.",
        "Integrated Firebase authentication and real-time database functionality.",
      ],
    },

    {
      name: "ToyVerse",
      tech: "React.js • Node.js • Express.js • MongoDB",
      live: "https://toyverse-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/toyverse-project",
      points: [
        "Built a full-stack toy marketplace with protected routes and dashboard functionality.",
        "Implemented CRUD operations and REST API integration using Express.js and MongoDB.",
        "Designed responsive UI with React.js and Tailwind CSS.",
      ],
    },

    {
      name: "PawMart",
      tech: "React.js • Firebase • MongoDB",
      live: "https://pawmart-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/pawmart-project",
      points: [
        "Created a pet adoption and e-commerce platform with secure user workflows.",
        "Integrated Firebase authentication and MongoDB database operations.",
        "Focused on clean UI structure, responsiveness and maintainable code.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200 py-6 px-4 print:bg-white">

      <div className="max-w-[850px] mx-auto bg-white px-9 py-8 shadow-sm print:shadow-none print:p-0 text-slate-900">

        {/* ================= HEADER ================= */}

        <header className="text-center border-b border-slate-400 pb-4">

          <h1 className="text-[32px] font-bold tracking-tight leading-none">
            Mehedi Robi
          </h1>

          <p className="mt-1 text-[15px] font-semibold text-slate-700">
            Frontend Developer | React.js | Modern Web Applications
          </p>

          <div className="mt-2 flex flex-wrap justify-center items-center gap-x-2 text-[13px] font-medium text-slate-700">
            <span>+8801336458100</span>
            <span>|</span>
            <span>mehedirobidev@gmail.com</span>
            <span>|</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="mt-1 flex justify-center gap-3 text-[13px] font-medium text-slate-800">

            <a
              href="https://mehedirobi-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Portfolio
            </a>

            <span>|</span>

            <a
              href="https://www.linkedin.com/in/mehedirobii/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              LinkedIn
            </a>

            <span>|</span>

            <a
              href="https://github.com/mehedirobi"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              GitHub
            </a>

          </div>

        </header>

        {/* ================= SUMMARY ================= */}

        <section className="mt-5">

          <h2 className="border-b border-slate-400 pb-1 text-[15px] font-bold">
            Professional Summary
          </h2>

          <p className="mt-2 text-[13px] leading-[22px] text-slate-800">
            Frontend developer focused on building responsive and user-friendly
            web applications using React.js, Tailwind CSS and modern JavaScript.
            Experienced in developing full-stack MERN applications with
            authentication, CRUD functionality and clean UI architecture.
          </p>

        </section>

        {/* ================= SKILLS ================= */}

        <section className="mt-5">

          <h2 className="border-b border-slate-400 pb-1 text-[15px] font-bold">
            Technical Skills
          </h2>

          <div className="mt-2 space-y-1.5 text-[13px] text-slate-800">

            <p>
              <span className="font-bold">Frontend:</span>{" "}
              React.js | JavaScript (ES6+) | Tailwind CSS | HTML5 | CSS3 |
              Responsive Design
            </p>

            <p>
              <span className="font-bold">Backend:</span>{" "}
              Node.js | Express.js | MongoDB | Firebase | REST APIs
            </p>

            <p>
              <span className="font-bold">Tools:</span>{" "}
              Git | GitHub | VS Code | Postman | Vite
            </p>

            <p>
              <span className="font-bold">Soft Skills:</span>{" "}
              Problem Solving | Communication | Team Collaboration
            </p>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section className="mt-5">

          <h2 className="border-b border-slate-400 pb-1 text-[15px] font-bold">
            Projects
          </h2>

          <div className="mt-3 space-y-5">

            {projects.map((project, index) => (
              <div key={index}>

                <div className="flex justify-between items-start gap-4">

                  <div>

                    <h3 className="text-[14px] font-bold text-slate-900">
                      {project.name}
                    </h3>

                    <p className="mt-0.5 text-[12px] font-medium text-slate-600">
                      {project.tech}
                    </p>

                  </div>

                  <div className="flex gap-3 whitespace-nowrap text-[12px] font-semibold">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Live Link
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

                <ul className="mt-2 space-y-1 text-[13px] leading-[20px] text-slate-800">

                  {project.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </section>

        {/* ================= PRACTICAL EXPERIENCE ================= */}

        <section className="mt-5">

          <h2 className="border-b border-slate-400 pb-1 text-[15px] font-bold">
            Practical Experience
          </h2>

          <div className="mt-2 space-y-1 text-[13px] leading-[20px] text-slate-800">

            <p>
              • Built multiple full-stack MERN applications with authentication
              and CRUD functionality.
            </p>

            <p>
              • Developed responsive and reusable frontend interfaces using
              React.js and Tailwind CSS.
            </p>

            <p>
              • Worked with Firebase authentication, REST APIs and MongoDB
              database operations.
            </p>

            <p>
              • Focused on maintainable code structure and scalable UI
              development practices.
            </p>

          </div>

        </section>

        {/* ================= EDUCATION ================= */}

        <section className="mt-5">

          <h2 className="border-b border-slate-400 pb-1 text-[15px] font-bold">
            Education
          </h2>

          <div className="mt-2 flex justify-between items-start text-[13px]">

            <div>

              <h3 className="font-bold text-slate-900">
                Diploma in Computer Science & Technology
              </h3>

              <p className="text-slate-700">
                Ahsanullah Institute of Technical & Vocational Education and Training (AITVET), Dhaka
              </p>

            </div>

            <p className="whitespace-nowrap font-medium text-slate-700">
              2023 – Present
            </p>

          </div>

        </section>

        {/* ================= CERTIFICATION ================= */}

        <section className="mt-5">

          <h2 className="border-b border-slate-400 pb-1 text-[15px] font-bold">
            Certification
          </h2>

          <div className="mt-2 text-[13px]">

            <p className="font-bold text-slate-900">
              Complete Web Development Course
            </p>

            <p className="text-slate-700">
              Programming Hero
            </p>

          </div>

        </section>

      </div>

    </div>
  );
};

export default Resume;