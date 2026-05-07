import React from "react";

const Resume = () => {
  const projects = [
    {
      name: "UrbanFix",
      tech: "React.js • Node.js • Express.js • MongoDB",
      live: "https://urban-fix-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/urban-fix-project",
      points: [
        "Built a civic issue reporting platform with authentication and role-based workflows.",
        "Integrated Firebase authentication with responsive React interfaces.",
      ],
    },

    {
      name: "ToyVerse",
      tech: "React.js • Node.js • Express.js • MongoDB",
      live: "https://toyverse-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/toyverse-project",
      points: [
        "Developed a full-stack toy marketplace with dashboard and protected routes.",
        "Implemented CRUD operations and REST API integration using MongoDB.",
      ],
    },

    {
      name: "PawMart",
      tech: "React.js • Node.js • Express.js • MongoDB",
      live: "https://pawmart-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/pawmart-project",
      points: [
        "Created a pet adoption and e-commerce platform with secure user workflows.",
        "Focused on responsive UI, clean structure and maintainable frontend architecture.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-6 px-4 print:bg-white print:py-0">

      <div className="max-w-[794px] mx-auto bg-white px-8 py-6 shadow-sm text-slate-900 print:shadow-none print:max-w-full print:p-0">

        {/* ================= HEADER ================= */}

        <header className="text-center border-b border-slate-300 pb-3">

          <h1 className="text-[30px] font-bold tracking-tight leading-none">
            Mehedi Robi
          </h1>

          <p className="mt-1 text-[14px] font-semibold text-slate-700">
            Frontend Developer | React.js | Modern Web Applications
          </p>

          <div className="mt-1.5 flex flex-wrap justify-center items-center gap-x-2 text-[12px] font-medium text-slate-700">
            <span>+8801336458100</span>
            <span>|</span>
            <span>mehedirobidev@gmail.com</span>
            <span>|</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="mt-1 flex justify-center gap-3 text-[12px] font-medium text-slate-800">

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

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold">
            Professional Summary
          </h2>

          <p className="mt-1.5 text-[12px] leading-[20px] text-slate-800">
            Frontend developer focused on building responsive and user-friendly
            web applications using React.js, Tailwind CSS and modern JavaScript.
            Experienced in developing MERN applications with authentication,
            CRUD functionality and clean UI architecture.
          </p>

        </section>

        {/* ================= SKILLS ================= */}

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold">
            Technical Skills
          </h2>

          <div className="mt-1.5 space-y-1 text-[12px] leading-[19px] text-slate-800">

            <p>
              <span className="font-bold">Frontend:</span>{" "}
              React.js | JavaScript (ES6+) | Tailwind CSS | HTML5 | CSS3
            </p>

            <p>
              <span className="font-bold">Backend:</span>{" "}
              Node.js | Express.js | MongoDB | Firebase | REST APIs
            </p>

            <p>
              <span className="font-bold">Tools:</span>{" "}
              Git | GitHub | VS Code | Vite
            </p>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold">
            Projects
          </h2>

          <div className="mt-2.5 space-y-4">

            {projects.map((project, index) => (
              <div key={index}>

                <div className="flex justify-between items-start gap-3">

                  <div>

                    <h3 className="text-[13px] font-bold text-slate-900">
                      {project.name}
                    </h3>

                    <p className="mt-0.5 text-[11px] font-medium text-slate-600">
                      {project.tech}
                    </p>

                  </div>

                  <div className="flex gap-2 whitespace-nowrap text-[11px] font-semibold">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Live
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

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold">
            Education
          </h2>

          <div className="mt-1.5 flex justify-between items-start text-[12px]">

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

        <section className="mt-4">

          <h2 className="border-b border-slate-300 pb-1 text-[14px] font-bold">
            Certification
          </h2>

          <p className="mt-1.5 text-[12px] text-slate-800">
            <span className="font-bold">
              Complete Web Development Course
            </span>{" "}
            — Programming Hero
          </p>

        </section>

      </div>

    </div>
  );
};

export default Resume;