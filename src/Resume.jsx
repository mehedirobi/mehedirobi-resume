import React from "react";

const Resume = () => {
  const projects = [
    {
      name: "UrbanFix",
      tech: "React.js • Tailwind CSS • Node.js • Express.js • Firebase • MongoDB",
      live: "https://urban-fix-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/urban-fix-project",
      points: [
        "Developed a full-stack civic issue reporting platform with secure authentication, protected routes, and role-based dashboards.",
        "Integrated REST APIs and optimized data handling to improve application performance and user experience.",
        "Built responsive user interfaces and implemented issue reporting, tracking workflows, and MongoDB-powered data management.",
      ],
    },
    {
      name: "ToyVerse",
      tech: "React.js • Tailwind CSS • Node.js • Express.js • Firebase • MongoDB",
      live: "https://toyverse-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/toyverse-project",
      points: [
        "Built a full-stack toy marketplace featuring authentication, protected routes, dashboard functionality, and CRUD operations.",
        "Integrated REST APIs and MongoDB to manage product listings, user data, and marketplace workflows efficiently.",
        "Designed responsive and reusable UI components to deliver a consistent experience across desktop and mobile devices.",
      ],
    },
  ];

  const sectionTitleClass =
    "border-b border-slate-300 pb-1 text-[14px] font-bold uppercase tracking-wide";

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 font-[Inter] print:bg-white print:py-0">
      <div className="mx-auto max-w-[794px] bg-white px-8 py-6 text-slate-900 shadow-sm print:max-w-full print:p-0 print:shadow-none">
        
        {/* Header */}
        <header className="border-b border-slate-300 pb-4 text-center">
          <h1 className="text-[30px] font-bold tracking-tight text-slate-900">
            Mehedi Robi
          </h1>

          <p className="mt-1 text-[14px] font-semibold text-slate-700">
            Frontend Developer | React.js & MERN Stack
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 text-[12px] text-slate-700">
            <span>+8801336458100</span>
            <span>|</span>
            <span>mehedirobidev@gmail.com</span>
            <span>|</span>
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[12px] font-medium text-slate-700">
            <a
              href="https://mehedirobi-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black hover:underline"
            >
              Portfolio
            </a>

            <span>|</span>

            <a
              href="https://github.com/mehedirobi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black hover:underline"
            >
              GitHub
            </a>

            <span>|</span>

            <a
              href="https://www.linkedin.com/in/mehedirobii/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Professional Summary</h2>

          <p className="mt-2 text-[12px] leading-[19px] text-slate-800">
            Frontend Developer with hands-on experience building responsive and
            scalable web applications using React.js, JavaScript, Tailwind CSS,
            and the MERN stack. Experienced in developing full-stack
            applications, integrating REST APIs, implementing authentication,
            and building reusable UI components. Passionate about creating
            clean, maintainable, and user-focused solutions through real-world
            project development.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Technical Skills</h2>

          <div className="mt-2 space-y-1 text-[12px] leading-[18px] text-slate-800">
            <p>
              <span className="font-bold text-slate-900">Frontend:</span>{" "}
              React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3
            </p>

            <p>
              <span className="font-bold text-slate-900">Backend:</span>{" "}
              Node.js, Express.js
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
              Git, GitHub, VS Code, Vite
            </p>

            <p>
              <span className="font-bold text-slate-900">Concepts:</span>{" "}
              REST APIs, CRUD Operations, Responsive Design,
              Component-Based Architecture
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Projects</h2>

          <div className="mt-3 space-y-4">
            {projects.map((project) => (
              <article key={project.name}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[13px] font-bold text-slate-900">
                      {project.name}
                    </h3>

                    <p className="mt-0.5 text-[11px] text-slate-600">
                      {project.tech}
                    </p>
                  </div>

                  <div className="flex gap-2 whitespace-nowrap text-[11px] font-medium text-slate-700">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black hover:underline"
                    >
                      Live Demo
                    </a>

                    <span>|</span>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <ul className="mt-1.5 space-y-1 text-[12px] leading-[18px] text-slate-800">
                  {project.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Education</h2>

          <div className="mt-2 flex items-start justify-between text-[12px]">
            <div>
              <h3 className="font-bold text-slate-900">
                Diploma in Computer Science & Technology (CST)
              </h3>

              <p className="text-slate-700">
                Ahsanullah Institute of Technical & Vocational Education &
                Training (AITVET), Dhaka
              </p>
            </div>

            <p className="whitespace-nowrap font-medium text-slate-700">
              Expected Graduation: 2027
            </p>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-4">
          <h2 className={sectionTitleClass}>Additional Information</h2>

          <div className="mt-2 space-y-1 text-[12px] text-slate-800">
            <p>
              <span className="font-bold text-slate-900">
                Certification:
              </span>{" "}
              Complete Web Development Course — Programming Hero
            </p>

            <p>
              <span className="font-bold text-slate-900">
                Languages:
              </span>{" "}
              Bangla (Native), English (Intermediate)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;