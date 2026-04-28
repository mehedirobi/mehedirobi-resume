import React from "react";

const Resume = () => {
  const projects = [
    {
      name: "UrbanFix",
      tech: "React • Tailwind CSS • Firebase",
      description:
        "Developed a civic issue management platform with role-based access, real-time updates, and streamlined workflows for reporting and resolving urban infrastructure issues.",
      live: "https://urban-fix-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/urban-fix-project",
    },
    {
      name: "ToyVerse",
      tech: "React • Node.js • Express.js",
      description:
        "Built a scalable toy marketplace with authentication, dynamic product management, dashboards, and user-focused engagement features.",
      live: "https://toyverse-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/toyverse-project",
    },
    {
      name: "PawMart",
      tech: "React • Firebase • MongoDB",
      description:
        "Created a pet adoption and e-commerce platform integrating marketplace workflows, user-generated listings, and secure transactions.",
      live: "https://pawmart-project-01.netlify.app/",
      github: "https://github.com/mehedirobi/pawmart-project",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen flex justify-center px-4 py-8 print:bg-white print:p-0">
      <div className="w-full max-w-[850px] bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10 text-slate-800 print:shadow-none print:border-none print:rounded-none">

        {/* Header */}
        <header className="pb-6 border-b border-slate-200">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Mehedi Robi
              </h1>
              <p className="mt-2 text-sm font-medium text-slate-600">
                Frontend Developer | React.js | Modern Web Applications
              </p>
            </div>

            <div className="text-sm text-slate-600 md:text-right space-y-1">
              <p>mehedirobidev@gmail.com</p>
              <p>+8801336458100</p>
              <p>Dhaka, Bangladesh</p>
              <div className="flex md:justify-end gap-3 pt-1 text-blue-600 font-medium">
                <a href="https://github.com/mehedirobi" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/mehedirobii/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://mehedi-robi-portfolio.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a>
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-900 mb-3">
            Professional Summary
          </h2>
          <p className="text-sm leading-7 text-slate-700">
            Frontend-focused developer with hands-on experience building scalable,
            responsive, and production-ready web applications using React.js,
            JavaScript (ES6+), Tailwind CSS, Node.js, and Firebase. Strong in
            reusable component architecture, UI/UX alignment, clean code practices,
            and performance optimization for modern digital products.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-900 mb-4">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-slate-700 leading-7">
                React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Responsive Design
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-slate-700 leading-7">
                Node.js, Express.js, MongoDB, Firebase, REST APIs
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="text-slate-700 leading-7">
                Git, GitHub, Vite, VS Code, Performance Optimization
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-900 mb-4">
            Featured Projects
          </h2>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-slate-200 pl-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="text-base font-semibold text-slate-900">
                    {project.name}
                  </h3>
                  <span className="text-xs text-slate-500">{project.tech}</span>
                </div>

                <p className="mt-2 text-sm text-slate-700 leading-6">
                  {project.description}
                </p>

                <div className="mt-2 flex gap-4 text-sm text-blue-600 font-medium">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certification */}
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-900 mb-4">
            Certifications
          </h2>

          <div className="border-l-2 border-slate-200 pl-4">
            <h3 className="text-base font-semibold text-slate-900">
              Complete Web Development Course
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Programming Hero • 2026
            </p>
            <p className="mt-2 text-sm text-slate-700 leading-6">
              Full-stack web development training with real-world project implementation.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-[2px] text-slate-900 mb-4">
            Education
          </h2>

          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold">
                Diploma in Computer Science & Technology
              </h3>
              <p className="text-slate-700">AITVET, Dhaka</p>
              <p className="text-slate-500">2023 – Present</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Higher Secondary Certificate (Science)
              </h3>
              <p className="text-slate-700">
                Khepupara Government Model Secondary High School
              </p>
              <p className="text-slate-500">Completed in 2022</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;