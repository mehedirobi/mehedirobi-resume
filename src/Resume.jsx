import React from "react";

const Resume = () => {
  const projects = [
    {
      name: "UrbanFix",
      tech: "React.js • Firebase • MongoDB",
      live: "https://urban-fix-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/urban-fix-project",
      points: [
        "Developed a civic issue reporting platform with authentication and role-based workflows.",
        "Built responsive user interfaces and integrated Firebase authentication with MongoDB-based functionality.",
      ],
    },

    {
      name: "ToyVerse",
      tech: "React.js • Tailwind CSS • Node.js • MongoDB",
      live: "https://toyverse-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/toyverse-project",
      points: [
        "Built a full-stack toy marketplace with dashboard, protected routes and CRUD functionality.",
        "Integrated REST APIs and developed responsive user-focused interfaces using React.js and Tailwind CSS.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 font-[Inter] print:bg-white print:py-0">

      <div className="mx-auto max-w-[794px] bg-white px-8 py-6 text-slate-900 shadow-sm print:max-w-full print:p-0 print:shadow-none">

        {/* ================= HEADER ================= */}

        <header className="border-b border-slate-300 pb-3 text-center">

          <h1 className="text-[30px] font-bold tracking-[-0.5px] leading-none text-slate-900">
            Mehedi Robi
          </h1>

          <p className="mt-1 text-[14px] font-semibold text-slate-700">
            Frontend Developer | React.js & MERN Stack
          </p>

          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 text-[12px] font-medium text-slate-700">
            <span>+8801336458100</span>
            <span>|</span>
            <span>mehedirobidev@gmail.com</span>
            <span>|</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="mt-1 flex justify-center gap-3 text-[12px] font-medium text-slate-700">

            <a
              href="https://mehedirobi-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:text-black hover:underline"
            >
              Portfolio
            </a>

            <span>|</span>

            <a
              href="https://www.linkedin.com/in/mehedirobii/"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:text-black hover:underline"
            >
              LinkedIn
            </a>

            <span>|</span>

            <a
              href="https://github.com/mehedirobi"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:text-black hover:underline"
            >
              GitHub
            </a>

          </div>

        </header>

        {/* ================= SUMMARY ================= */}

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
            Professional Summary
          </h2>

          <p className="mt-1.5 text-[12px] leading-[20px] text-slate-800">
            Frontend developer and Diploma in Computer Science & Technology
            student with experience building responsive and user-focused web
            applications using React.js, JavaScript and modern frontend
            technologies. Skilled in developing MERN stack applications with
            authentication, REST API integration and clean UI architecture.
            Strong interest in problem solving, communication and collaborative
            work environments.
          </p>

        </section>

        {/* ================= SKILLS ================= */}

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
            Technical Skills
          </h2>

          <div className="mt-1.5 space-y-1 text-[12px] leading-[19px] text-slate-800">

            <p>
              <span className="font-bold text-slate-900">Frontend:</span>{" "}
              React.js | JavaScript (ES6+) | Tailwind CSS | HTML5 | CSS3 |
              Responsive Design
            </p>

            <p>
              <span className="font-bold text-slate-900">Backend:</span>{" "}
              Node.js | Express.js | MongoDB | Firebase | REST APIs
            </p>

            <p>
              <span className="font-bold text-slate-900">Tools:</span>{" "}
              Git | GitHub | VS Code | Postman | Vite
            </p>

            <p>
              <span className="font-bold text-slate-900">Soft Skills:</span>{" "}
              Communication | Problem Solving | Team Collaboration
            </p>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
            Projects
          </h2>

          <div className="mt-2.5 space-y-4">

            {projects.map((project, index) => (
              <div key={index}>

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <h3 className="text-[13px] font-bold text-slate-900">
                      {project.name}
                    </h3>

                    <p className="mt-0.5 text-[11px] font-medium text-slate-600">
                      {project.tech}
                    </p>

                  </div>

                  <div className="flex gap-2 whitespace-nowrap text-[11px] font-semibold text-slate-700">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all hover:text-black hover:underline"
                    >
                      Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all hover:text-black hover:underline"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

                <ul className="mt-1.5 space-y-0.5 text-[12px] leading-[19px] text-slate-800">

                  {project.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </section>

        {/* ================= EDUCATION ================= */}

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
            Education
          </h2>

          <div className="mt-1.5 flex items-start justify-between text-[12px]">

            <div>

              <h3 className="font-bold text-slate-900">
                Diploma in Computer Science & Technology
              </h3>

              <p className="text-slate-700">
                AITVET, Dhaka
              </p>

            </div>

            <p className="whitespace-nowrap font-medium text-slate-700">
              2023 – Present
            </p>

          </div>

        </section>

        {/* ================= CERTIFICATION ================= */}

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
            Certification
          </h2>

          <p className="mt-1.5 text-[12px] leading-[19px] text-slate-800">
            <span className="font-bold text-slate-900">
              Complete Web Development Course
            </span>{" "}
            — Programming Hero
          </p>

        </section>

        {/* ================= LANGUAGES ================= */}

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
            Languages
          </h2>

          <p className="mt-1.5 text-[12px] text-slate-800">
            Bangla — Native | English — Intermediate
          </p>

        </section>

      </div>

    </div>
  );
};

export default Resume;