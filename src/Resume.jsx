import React from "react";

const Resume = () => {
  const projects = [
    {
      name: "UrbanFix",
      tech: "React.js • Tailwind CSS • Node.js • Express.js • Firebase • MongoDB",
      live: "https://urban-fix-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/urban-fix-project",
      points: [
        "Built a full-stack civic issue reporting platform with Firebase authentication, protected routes, REST APIs, and MongoDB data management.",
        "Developed issue reporting and tracking workflows with reusable React components and responsive UI for desktop and mobile devices.",
        "Integrated frontend and backend services to manage user data, issue records, and application workflows efficiently.",
      ],
    },
    {
      name: "ToyVerse",
      tech: "React.js • Tailwind CSS • Node.js • Express.js • Firebase • MongoDB",
      live: "https://toyverse-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/toyverse-project",
      points: [
        "Developed a full-stack toy marketplace with authentication, protected routes, product management, and CRUD functionality.",
        "Built RESTful APIs with Express.js and MongoDB for managing products, users, and marketplace data.",
        "Created reusable and responsive React components with a focus on usability, maintainability, and consistent UI.",
      ],
    },
  ];

  const sectionTitleClass =
    "border-b border-slate-300 pb-1 text-[13px] font-bold uppercase tracking-[0.08em] text-slate-900";

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 font-[Inter] print:bg-white print:px-0 print:py-0">
      <main className="mx-auto max-w-[794px] bg-white px-8 py-7 text-slate-900 shadow-sm print:max-w-full print:px-0 print:py-0 print:shadow-none">

        {/* Header */}
        <header className="border-b border-slate-400 pb-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[28px] font-bold tracking-tight">
              Mehedi Robi
            </h1>

            <p className="mt-0.5 text-[13px] font-semibold tracking-wide text-slate-700">
              MERN Stack Developer
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1 text-[11px] text-slate-700">
              <span>+8801336458100</span>
              <span>•</span>
              <span>mehedirobidev@gmail.com</span>
              <span>•</span>
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="mt-1.5 flex flex-wrap justify-center gap-x-3 text-[11px] font-medium text-slate-700">
              <a
                href="https://mehedirobi-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 hover:underline"
              >
                Portfolio
              </a>

              <span>•</span>

              <a
                href="https://github.com/mehedirobi"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 hover:underline"
              >
                GitHub
              </a>

              <span>•</span>

              <a
                href="https://www.linkedin.com/in/mehedirobii/"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Professional Summary</h2>

          <p className="mt-2 text-[11.5px] leading-[18px] text-slate-800">
            MERN Stack Developer with hands-on experience building responsive
            full-stack web applications using MongoDB, Express.js, React.js,
            and Node.js. Experienced in developing RESTful APIs, CRUD
            operations, Firebase Authentication, protected routes, database
            integration, and reusable React components. Focused on writing
            clean, maintainable code and building practical applications with
            strong usability, performance, and responsive design.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Technical Skills</h2>

          <div className="mt-2 space-y-1 text-[11.5px] leading-[17px] text-slate-800">
            <p>
              <span className="font-bold text-slate-900">Frontend:</span>{" "}
              HTML5, CSS3, JavaScript (ES6+), React.js, React Router,
              Tailwind CSS, Responsive Design
            </p>

            <p>
              <span className="font-bold text-slate-900">Backend:</span>{" "}
              Node.js, Express.js, RESTful APIs
            </p>

            <p>
              <span className="font-bold text-slate-900">Database:</span>{" "}
              MongoDB
            </p>

            <p>
              <span className="font-bold text-slate-900">Authentication:</span>{" "}
              Firebase Authentication, Protected Routes
            </p>

            <p>
              <span className="font-bold text-slate-900">Tools:</span>{" "}
              Git, GitHub, VS Code, Vite, Netlify, Thunder Client
            </p>

            <p>
              <span className="font-bold text-slate-900">Concepts:</span>{" "}
              CRUD Operations, API Integration, Component-Based Architecture,
              State Management, Responsive UI
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Projects</h2>

          <div className="mt-3 space-y-3.5">
            {projects.map((project) => (
              <article key={project.name}>
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-[12.5px] font-bold text-slate-900">
                      {project.name}
                    </h3>

                    <p className="mt-0.5 text-[10.5px] leading-4 text-slate-600">
                      {project.tech}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 text-[10.5px] font-semibold text-slate-700">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      Live
                    </a>

                    <span>•</span>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-2 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <ul className="mt-1.5 space-y-0.5 text-[11px] leading-[17px] text-slate-800">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[1px]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Education</h2>

          <div className="mt-2 flex items-start justify-between gap-4 text-[11.5px]">
            <div>
              <h3 className="font-bold text-slate-900">
                Diploma in Computer Science & Technology (CST)
              </h3>

              <p className="mt-0.5 leading-[17px] text-slate-700">
                Ahsanullah Institute of Technical & Vocational Education &
                Training (AITVET), Dhaka
              </p>
            </div>

            <p className="shrink-0 text-right font-semibold text-slate-700">
              Expected: 2027
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Certifications</h2>

          <div className="mt-2 text-[11.5px] leading-[17px]">
            <p>
              <span className="font-bold text-slate-900">
                Complete Web Development Course
              </span>{" "}
              — Programming Hero
            </p>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Additional Information</h2>

          <div className="mt-2 space-y-1 text-[11.5px] leading-[17px] text-slate-800">
            <p>
              <span className="font-bold text-slate-900">Languages:</span>{" "}
              Bangla (Native), English (Intermediate)
            </p>

            <p>
              <span className="font-bold text-slate-900">Interests:</span>{" "}
              Full-Stack Development, Software Engineering, Web Application
              Architecture
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;