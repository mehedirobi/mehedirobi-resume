
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
  {
    category: "Frontend",
    items:
      "HTML5, CSS3, JavaScript (ES6+), React.js, React Router, Tailwind CSS",
  },
  {
    category: "Backend",
    items: "Node.js, Express.js, RESTful API Development",
  },
  {
    category: "Database & Authentication",
    items: "MongoDB, Firebase Authentication, Protected Routes",
  },
  {
    category: "Tools & Concepts",
    items:
      "Git, GitHub, CRUD Operations, API Integration, Responsive Design",
  },
];

const projects = [
  {
    name: "Khelaro",
    description: "Sports Turf Booking Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB",
    live: "https://khelaro-project.netlify.app/",
    repositories: [
      ["Client", "https://github.com/mehedirobi/khelaro-client"],
      ["Server", "https://github.com/mehedirobi/khelaro-server"],
    ],
    points: [
      "Developed a full-stack turf booking platform featuring turf discovery, date and time selection, and booking management.",
      "Integrated customer and turf-owner workflows with RESTful APIs and backend data operations.",
    ],
  },
  {
    name: "UrbanFix",
    description: "Civic Issue Reporting Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB",
    live: "https://urbanfix-project-01.netlify.app/",
    repositories: [
      ["Client", "https://github.com/mehedirobi/urban-fix"],
      ["Server", "https://github.com/mehedirobi/urban-fix-server"],
    ],
    points: [
      "Built a full-stack platform for reporting, tracking, and managing civic infrastructure issues.",
      "Integrated Firebase Authentication, protected routes, RESTful APIs, and MongoDB data operations.",
    ],
  },
  {
    name: "PawMart",
    description: "Pet Adoption & Supply Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase",
    live: "https://pawmart-project-01.netlify.app/",
    repositories: [
      ["Client", "https://github.com/mehedirobi/pawmart-project"],
      ["Server", "https://github.com/mehedirobi/pawmart-project-server"],
    ],
    points: [
      "Developed a responsive platform for pet adoption and pet-supply shopping with category-based browsing and filtering.",
      "Implemented email/password and Google authentication, listing CRUD operations, adoption workflows, and product ordering.",
      "Built listing and order dashboards, PDF order reports, and REST API integrations.",
    ],
  },
];

const Section = ({ title, children }) => (
  <section className="resume-section min-w-0">
    <h2 className="mb-1.5 border-b border-slate-300 pb-1 text-[11px] font-bold uppercase tracking-[0.09em] text-slate-900">
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
    className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 hover:text-slate-950 print:text-slate-800 print:no-underline"
  >
    {children}
  </a>
);

const Project = ({ project }) => (
  <article className="project-item min-w-0 break-inside-avoid">
    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3 print:flex-row print:items-start print:justify-between print:gap-3">
      <div className="min-w-0">
        <h3 className="text-[12px] font-bold text-slate-950">
          {project.name}
        </h3>
        <p className="text-[10.5px] text-slate-600">
          {project.description}
        </p>
      </div>

      <nav
        aria-label={`${project.name} project links`}
        className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] sm:justify-end print:shrink-0 print:justify-end"
      >
        <ExternalLink href={project.live}>Live Demo</ExternalLink>

        {project.repositories.map(([label, url]) => (
          <ExternalLink key={url} href={url}>
            {label}
          </ExternalLink>
        ))}
      </nav>
    </div>

    <p className="mt-1 text-[10.5px] leading-[1.4] text-slate-600">
      <span className="font-semibold text-slate-800">Tech Stack:</span>{" "}
      {project.tech}
    </p>

    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[10.5px] leading-[1.4] text-slate-800">
      {project.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

const Resume = () => {
  return (
    <main className="resume-page mx-auto w-full max-w-[210mm] bg-white px-5 py-6 font-sans text-[11px] leading-[1.45] text-slate-800 sm:px-9 sm:py-8 print:w-full print:max-w-none print:px-0 print:py-0">
      <header className="border-b border-slate-300 pb-3 text-center">
        <h1 className="text-[28px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[30px]">
          {profile.name}
        </h1>

        <p className="mt-1 text-[13px] font-semibold tracking-wide text-slate-700">
          {profile.role}
        </p>

        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px]">
          <a
            className="break-all hover:underline"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <span className="text-slate-400" aria-hidden="true">•</span>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <span className="text-slate-400" aria-hidden="true">•</span>
          <span>{profile.location}</span>
        </div>

        <nav
          aria-label="Professional profiles"
          className="mt-1.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px]"
        >
          {profile.links.map(([label, url], index) => (
            <React.Fragment key={label}>
              {index > 0 && (
                <span className="text-slate-400" aria-hidden="true">
                  •
                </span>
              )}
              <ExternalLink href={url}>{label}</ExternalLink>
            </React.Fragment>
          ))}
        </nav>
      </header>

      <div className="mt-3.5 space-y-3.5 print:mt-3 print:space-y-3">
        <Section title="Professional Summary">
          <p>
            MERN Stack Developer and Diploma student in Computer Science
            &amp; Technology with hands-on experience building responsive,
            full-stack web applications using MongoDB, Express.js, React.js,
            and Node.js. Skilled in reusable React components, RESTful API
            integration, authentication, protected routes, and database-driven
            CRUD operations. Focused on clean, maintainable code, responsive
            UI development, and building reliable, user-friendly web
            applications.
          </p>
        </Section>

        <Section title="Technical Skills">
          <div className="space-y-1">
            {skills.map(({ category, items }) => (
              <p key={category}>
                <span className="font-semibold text-slate-900">
                  {category}:
                </span>{" "}
                {items}
              </p>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="space-y-3 print:space-y-2.5">
            {projects.map((project) => (
              <Project key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-semibold text-slate-900">
                Diploma in Computer Science &amp; Technology (CST)
              </h3>
              <p className="mt-0.5 text-slate-700">
                Ahsanullah Institute of Technical &amp; Vocational Education
                &amp; Training (AITVET), Dhaka
              </p>
            </div>
            <span className="shrink-0 text-[10px] font-medium text-slate-600">
              In Progress
            </span>
          </div>
        </Section>

        <Section title="Training & Languages">
          <div className="space-y-1">
            <p>
              <span className="font-semibold text-slate-900">Training:</span>{" "}
              Complete Web Development Course — Programming Hero
            </p>
            <p>
              <span className="font-semibold text-slate-900">Languages:</span>{" "}
              Bangla (Native), English (Intermediate)
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
};

export default Resume;
