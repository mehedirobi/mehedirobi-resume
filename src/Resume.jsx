import React from "react";

// ---------- Data ----------
const profile = {
  name: "Mehedi Robi",
  role: "Aspiring Software Engineer",
  phone: "+8801336458100",
  email: "mehedirobidev@gmail.com",
  location: "Dhaka, Bangladesh",
  links: [
    ["GitHub", "https://github.com/mehedirobi"],
    ["LinkedIn", "https://www.linkedin.com/in/mehedirobi/"],
    ["Portfolio", "https://mehedirobi-portfolio.netlify.app/"],
  ],
};

const objective =
  "Software engineering-focused developer with hands-on experience building full-stack applications, from database to user interface. I aim to write reliable, efficient, and maintainable code that scales with the product. Seeking an entry-level or Junior Software Engineer role to contribute to a collaborative team and keep growing as an engineer.";

const skills = [
  ["Programming Languages", "JavaScript (ES6+), HTML5, CSS3"],
  ["Frontend Development", "React.js, Tailwind CSS, Responsive Web Design"],
  ["Backend Development", "Node.js, Express.js, RESTful APIs"],
  ["Database & Authentication", "MongoDB, Firebase Authentication"],
  ["Tools & Platforms", "Git, GitHub, Netlify, Vercel, VS Code"],
  [
    "Core Technical Skills",
    "REST API Integration, Authentication & Authorization, Role-Based Access Control, CRUD Operations, Full-Stack Application Development",
  ],
];

const TECH = "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase";

const projects = [
  {
    name: "Khelaro",
    live: "https://khelaro-project.netlify.app/",
    client: "https://github.com/mehedirobi/khelaro-client",
    server: "https://github.com/mehedirobi/khelaro-server",
    tech: TECH,
    points: [
      "Developed a full-stack turf booking platform for browsing turfs and reserving date and time slots.",
      "Implemented separate role-based dashboards for customers and turf owners.",
      "Integrated the React client with RESTful APIs built using Express.js and MongoDB.",
    ],
  },
  {
    name: "UrbanFix",
    live: "https://urbanfix-project-01.netlify.app/",
    client: "https://github.com/mehedirobi/urban-fix",
    server: "https://github.com/mehedirobi/urban-fix-server",
    tech: TECH,
    points: [
      "Developed a civic issue reporting platform for citizens to report, track, and manage infrastructure issues.",
      "Implemented Firebase Authentication with protected routes to restrict access to authenticated users.",
      "Built MongoDB-backed REST APIs for issue submission and status tracking.",
    ],
  },
  {
    name: "PawMart",
    live: "https://pawmart-project-01.netlify.app/",
    client: "https://github.com/mehedirobi/pawmart-project",
    server: "https://github.com/mehedirobi/pawmart-project-server",
    tech: TECH,
    points: [
      "Developed a responsive pet adoption and supplies marketplace with filtering, listing CRUD, adoption workflows, and ordering.",
      "Implemented email/password and Google sign-in authentication.",
      "Built listing and order dashboards with downloadable PDF reports.",
    ],
  },
];

const education = {
  degree: "Diploma in Computer Science & Technology (CST)",
  institution:
    "Ahsanullah Institute of Technical & Vocational Education & Training (AITVET), Dhaka, Bangladesh",
  date: "2026",
};

const languages = [
  ["Bengali", "Native"],
  ["English", "Fluent"],
];

// ---------- Reusable components ----------
const Section = ({ title, children }) => (
  <section className="resume-section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="resume-link">
    {children}
  </a>
);

const Divider = () => (
  <span className="resume-divider" aria-hidden="true">|</span>
);

const Project = ({ project }) => (
  <article className="project-item">
    <div className="project-heading">
      <h3 className="project-name">{project.name}</h3>
      <nav aria-label={`${project.name} links`} className="project-links">
        <ExternalLink href={project.live}>Live Demo</ExternalLink>
        <Divider />
        <ExternalLink href={project.client}>Client GitHub</ExternalLink>
        <Divider />
        <ExternalLink href={project.server}>Server GitHub</ExternalLink>
      </nav>
    </div>
    <p className="project-tech">Technologies: {project.tech}</p>
    <ul className="bullet-list">
      {project.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

// ---------- Main component ----------
const Resume = () => (
  <>
    <style>{`
      @page { size: A4; margin: 10mm; }
      * { box-sizing: border-box; }

      .resume-page {
        width: 100%;
        max-width: 210mm;
        min-height: 297mm;
        margin: 0 auto;
        padding: 12mm 15mm;
        background: #fff;
        color: #1f2937;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 10.5pt;
        line-height: 1.4;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      /* Header */
      .resume-header { text-align: center; }
      .resume-name { margin: 0; font-size: 28pt; font-weight: 800; color: #111827; line-height: 1.1; }
      .resume-role { margin: 4px 0 7px; font-size: 13pt; font-weight: 700; color: #374151; }
      .resume-contact, .resume-profiles {
        display: flex; flex-wrap: wrap; justify-content: center;
        align-items: center; gap: 2px 0; font-size: 10.5pt;
      }
      .resume-profiles { margin-top: 3px; }

      /* Sections */
      .resume-content { display: flex; flex-direction: column; gap: 13px; margin-top: 13px; }

      .section-title {
        margin: 0 0 6px; padding-bottom: 2px;
        border-bottom: 1.2px solid #374151;
        font-size: 11.5pt; font-weight: 700;
        text-transform: uppercase; color: #111827;
        break-after: avoid; page-break-after: avoid;
      }

      .objective-text { margin: 0; text-align: justify; line-height: 1.5; }

      .skill-row { margin: 0 0 3px; }
      .skill-row strong { color: #111827; }

      /* Projects */
      .projects-list { display: flex; flex-direction: column; gap: 11px; }
      .project-item { break-inside: avoid; page-break-inside: avoid; }
      .project-heading {
        display: flex; justify-content: space-between;
        align-items: baseline; gap: 12px;
      }
      .project-name { margin: 0; font-size: 11.5pt; font-weight: 700; color: #111827; }
      .project-links { display: flex; flex-shrink: 0; align-items: center; white-space: nowrap; }
      .project-tech { margin: 1px 0 3px; font-size: 9.5pt; font-style: normal; color: #374151; }

      /* Black dot bullets (projects + languages) */
      .bullet-list { margin: 0; padding-left: 18px; list-style: disc; color: #000; }
      .bullet-list li { margin-bottom: 2px; color: #1f2937; }
      .bullet-list li::marker { color: #000; }
      .bullet-list li strong { color: #111827; }

      /* Links: only profile + project links are blue */
      .resume-link { color: #1a5cad; text-decoration: none; }
      .resume-link:hover { text-decoration: underline; }
      .resume-divider { margin: 0 8px; color: #9ca3af; }

      /* Education */
      .education-row { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
      .education-degree { margin: 0; font-size: 11pt; font-weight: 700; color: #111827; }
      .education-date { font-weight: 700; white-space: nowrap; }
      .education-institution { margin: 1px 0 0; color: #4b5563; }

      @media screen {
        .resume-page { margin: 24px auto; box-shadow: 0 4px 25px rgba(15, 23, 42, 0.12); }
      }

      @media print {
        html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; }
        .resume-page { max-width: none; min-height: 0; margin: 0; padding: 0; box-shadow: none; }
      }

      @media (max-width: 600px) {
        .resume-page { min-height: auto; padding: 20px 16px; }
        .resume-name { font-size: 22pt; }
        .project-heading, .education-row { flex-direction: column; gap: 2px; }
        .project-links { flex-wrap: wrap; white-space: normal; }
      }
    `}</style>

    <main className="resume-page">
      <header className="resume-header">
        <h1 className="resume-name">{profile.name.toUpperCase()}</h1>
        <p className="resume-role">{profile.role}</p>

        {/* Location, phone and email are plain black text (not links) */}
        <div className="resume-contact">
          <span>{profile.location}</span>
          <Divider />
          <span>{profile.phone}</span>
          <Divider />
          <span>{profile.email}</span>
        </div>

        <nav aria-label="Professional profiles" className="resume-profiles">
          {profile.links.map(([label, url], i) => (
            <React.Fragment key={url}>
              {i > 0 && <Divider />}
              <ExternalLink href={url}>{label}</ExternalLink>
            </React.Fragment>
          ))}
        </nav>
      </header>

      <div className="resume-content">
        <Section title="Career Objective">
          <p className="objective-text">{objective}</p>
        </Section>

        <Section title="Skills">
          {skills.map(([category, items]) => (
            <p className="skill-row" key={category}>
              <strong>{category}:</strong> {items}
            </p>
          ))}
        </Section>

        <Section title="Projects">
          <div className="projects-list">
            {projects.map((p) => (
              <Project key={p.name} project={p} />
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="education-row">
            <h3 className="education-degree">{education.degree}</h3>
            <span className="education-date">{education.date}</span>
          </div>
          <p className="education-institution">{education.institution}</p>
        </Section>

        <Section title="Languages">
          <ul className="bullet-list">
            {languages.map(([lang, level]) => (
              <li key={lang}>
                <strong>{lang}</strong> — {level}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  </>
);

export default Resume;