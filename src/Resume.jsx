import React from "react";

const Resume = () => {
  const projects = [
    {
      name: "UrbanFix",
      tech: "React • Tailwind • Firebase",
      desc: "Civic issue reporting platform with real-time updates and role-based workflow system.",
      live: "https://urban-fix-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/urban-fix-project",
    },
    {
      name: "ToyVerse",
      tech: "React • Node • Express",
      desc: "Marketplace platform with authentication, dashboard and product management system.",
      live: "https://toyverse-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/toyverse-project",
    },
    {
      name: "PawMart",
      tech: "React • Firebase • MongoDB",
      desc: "Pet adoption and e-commerce system with secure listings and user workflows.",
      live: "https://pawmart-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/pawmart-project",
    },
  ];

  return (
    <div className="bg-slate-100 flex justify-center px-4 py-6 print:bg-white">
      <div className="w-full max-w-[800px] bg-white p-7 text-slate-800 print:p-0">

        {/* ================= HEADER ================= */}
        <header className="border-b pb-4">
          <div className="flex justify-between items-start gap-6">

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Mehedi Robi
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Frontend Developer | React.js | Modern Web Applications
              </p>
            </div>

            <div className="text-[12px] text-right text-slate-600 space-y-1">
              <p>mehedirobidev@gmail.com</p>
              <p>+8801336458100</p>
              <p>Dhaka, Bangladesh</p>

              <div className="flex gap-3 justify-end text-blue-600 text-sm mt-1">
                <a href="https://github.com/mehedirobi">GitHub</a>
                <a href="https://linkedin.com">LinkedIn</a>
                <a href="https://mehedi-robi-portfolio.netlify.app/">Portfolio</a>
              </div>
            </div>

          </div>
        </header>

        {/* ================= SUMMARY ================= */}
        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2">
            Summary
          </h2>

          <p className="text-sm leading-6 text-slate-700">
            Frontend developer focused on building scalable, responsive and
            production-ready web applications using React, Tailwind CSS and
            modern JavaScript. Strong focus on UI/UX, reusable components and
            performance optimization.
          </p>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3">
            Skills
          </h2>

          <div className="grid grid-cols-3 gap-6 text-sm">

            <div>
              <p className="font-semibold text-slate-900 mb-1">Frontend</p>
              <p className="text-slate-700 leading-5">
                React.js, JavaScript, Tailwind CSS, HTML5, CSS3
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-1">Backend</p>
              <p className="text-slate-700 leading-5">
                Node.js, Express.js, MongoDB, Firebase, REST APIs
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-1">Tools</p>
              <p className="text-slate-700 leading-5">
                Git, GitHub, Vite, VS Code, Postman
              </p>
            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3">
            Projects
          </h2>

          <div className="space-y-3">
            {projects.map((p, i) => (
              <div key={i} className="border-l-2 border-slate-200 pl-3">

                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {p.name}
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    {p.tech}
                  </span>
                </div>

                <p className="text-sm text-slate-700 mt-1 leading-5">
                  {p.desc}
                </p>

                <div className="text-[12px] text-blue-600 flex gap-4 mt-1">
                  <a href={p.live}>Live</a>
                  <a href={p.github}>GitHub</a>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2">
            Experience / Practical Work
          </h2>

          <p className="text-sm text-slate-700 leading-6">
            • Built 3 full-stack MERN applications with authentication and CRUD systems<br />
            • Developed responsive UI using React and Tailwind CSS<br />
            • Integrated Firebase authentication and real-time features<br />
            • Focused on clean architecture and reusable components
          </p>
        </section>

        {/* ================= CERTIFICATION ================= */}
        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2">
            Certification
          </h2>

          <p className="text-sm font-semibold">
            Complete Web Development Course
          </p>
          <p className="text-sm text-slate-600">
            Programming Hero • 2026
          </p>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="mt-5">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2">
            Education
          </h2>

          <div className="text-sm space-y-2">

            <div>
              <p className="font-semibold">
                Diploma in Computer Science & Technology
              </p>
              <p className="text-slate-600">
                AITVET, Dhaka (2023 – Present)
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Higher Secondary Certificate (Science)
              </p>
              <p className="text-slate-600">
                Khepupara Government Model School (2022)
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;