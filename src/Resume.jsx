
import React from "react";

const profile = {
  name: "Mehedi Robi",
  role: "MERN Stack Developer",
  phone: "+8801336458100",
  email: "mehedirobidev@gmail.com",
  location: "Dhaka, Bangladesh",
  links: [
    ["Portfolio", "https://mehedirobi-portfolio.netlify.app/"],
    ["GitHub", "https://github.com/mehedirobi"],
    ["LinkedIn", "https://www.linkedin.com/in/mehedirobii/"],
  ],
};

const skills = [
  [
    "Frontend",
    "HTML5, CSS3, JavaScript (ES6+), React.js, React Router, Tailwind CSS",
  ],
  ["Backend", "Node.js, Express.js, RESTful APIs"],
  [
    "Database & Authentication",
    "MongoDB, Firebase Authentication, Protected Routes",
  ],
  [
    "Tools & Concepts",
    "Git, GitHub, CRUD Operations, API Integration, Responsive Design",
  ],
];

const projects = [
  {
    name: "Khelaro",
    description: "Sports Turf Booking Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB",
    live: "https://khelaro.netlify.app/",
    repositories: [
      ["Client", "https://github.com/mehedirobi/khelaro-client"],
      ["Server", "https://github.com/mehedirobi/khelaro-server"],
    ],
    points: [
      "Developed a full-stack turf booking platform with turf discovery, date and time availability, and booking management.",
      "Implemented customer and turf-owner workflows with frontend-backend REST API integration.",
    ],
  },
  {
    name: "UrbanFix",
    description: "Civic Issue Reporting Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB",
    live: "https://urban-fix-project-01.netlify.app/",
    repositories: [
      ["Client", "https://github.com/mehedirobi/urban-fix"],
      ["Server", "https://github.com/mehedirobi/urban-fix-server"],
    ],
    points: [
      "Built a full-stack platform for reporting and tracking civic infrastructure issues.",
      "Integrated Firebase Authentication, protected routes, REST APIs, and MongoDB data management.",
    ],
  },
  {
    name: "PawMart",
    description: "Pet Adoption & Supply Portal",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase",
    live: "https://pawmart-project-01.netlify.app/",
    repositories: [
      ["Client", "https://github.com/mehedirobi/pawmart-project"],
      ["Server", "https://github.com/mehedirobi/pawmart-project-server"],
    ],
    points: [
      "Built a responsive platform for pet adoption and pet supply shopping with category-based browsing and filtering.",
      "Implemented Firebase email/password and Google authentication, listing CRUD operations, pet adoption, and product ordering.",
      "Developed My Listings and My Orders dashboards, PDF order reports, dark/light mode, and REST API integration.",
    ],
  },
];

const Section = ({ title, children }) => (
  <section className="resume-section">
    <h2 className="mb-2 border-b border-slate-300 pb-1.5 text-[12px] font-bold uppercase tracking-[0.09em] text-slate-900">
      {title}
    </h2>
    {children}
  </section>
);

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-800 underline-offset-2 hover:underline print:no-underline"
  >
    {children}
  </a>
);

const Resume = () => {
  return (
    <main className="resume-page mx-auto flex min-h-[297mm] w-full max-w-[210mm] flex-col justify-between gap-4 bg-white px-8 py-8 font-sans text-[11.5px] leading-[1.45] text-slate-800 sm:px-10 print:min-h-0 print:w-full print:max-w-none print:gap-3 print:px-0 print:py-0">
      {/* Header */}
      <header className="border-b border-slate-300 pb-4 text-center">
        <h1 className="text-[30px] font-bold leading-tight tracking-tight text-slate-950">
          {profile.name}
        </h1>

        <p className="mt-1.5 text-[14px] font-semibold text-slate-700">
          {profile.role}
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-x-2.5 gap-y-1.5 text-[10.5px]">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="text-slate-400">•</span>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <span className="text-slate-400">•</span>
          <span>{profile.location}</span>
        </div>

        <nav
          aria-label="Professional profiles"
          className="mt-2 flex flex-wrap justify-center gap-x-3.5 text-[10.5px] font-medium"
        >
          {profile.links.map(([label, url], index) => (
            <React.Fragment key={label}>
              {index > 0 && (
                <span className="text-slate-400">•</span>
              )}
              <ExternalLink href={url}>{label}</ExternalLink>
            </React.Fragment>
          ))}
        </nav>
      </header>

      {/* Professional Summary */}
      <Section title="Professional Summary">
        <p className="text-justify">
          MERN Stack Developer with hands-on project experience building
          responsive, full-stack web applications using MongoDB, Express.js,
          React.js, and Node.js. Skilled in RESTful API development, CRUD
          operations, Firebase Authentication, protected routes, and
          database integration. Focused on reusable components, clean code,
          maintainability, and practical problem-solving, with a long-term
          goal of becoming a Software Engineer.
        </p>
      </Section>

      {/* Technical Skills */}
      <Section title="Technical Skills">
        <div className="space-y-1.5">
          {skills.map(([label, value]) => (
            <p key={label}>
              <span className="font-semibold text-slate-900">
                {label}:
              </span>{" "}
              {value}
            </p>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div className="space-y-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="break-inside-avoid"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-[13px] font-bold text-slate-950">
                    {project.name}
                  </h3>

                  <p className="text-[11.5px] text-slate-600">
                    {project.description}
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap justify-end gap-x-2.5 gap-y-1 pt-0.5 text-[10.5px] font-medium">
                  {project.live && (
                    <ExternalLink href={project.live}>
                      Live Demo
                    </ExternalLink>
                  )}

                  {project.repositories.map(([label, url]) => (
                    <ExternalLink key={url} href={url}>
                      {label}
                    </ExternalLink>
                  ))}
                </div>
              </div>

              <p className="mt-1.5 text-[10.8px] text-slate-600">
                <span className="font-semibold text-slate-800">
                  Tech Stack:
                </span>{" "}
                {project.tech}
              </p>

              <ul className="mt-1.5 list-disc space-y-0.5 pl-4">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-semibold text-slate-900">
              Diploma in Computer Science &amp; Technology (CST)
            </h3>

            <p className="mt-1">
              Ahsanullah Institute of Technical &amp; Vocational Education
              &amp; Training (AITVET), Dhaka
            </p>
          </div>

          <span className="shrink-0 text-[10.5px] font-medium">
             In Progress
          </span>
        </div>
      </Section>

      {/* Certification & Languages */}
      <Section title="Certification & Additional Information">
        <div className="space-y-1.5">
          <p>
            <span className="font-semibold text-slate-900">
              Certification:
            </span>{" "}
            Complete Web Development Course — Programming Hero
          </p>

          <p>
            <span className="font-semibold text-slate-900">
              Languages:
            </span>{" "}
            Bangla (Native), English (Intermediate)
          </p>
        </div>
      </Section>
    </main>
  );
};

export default Resume;
