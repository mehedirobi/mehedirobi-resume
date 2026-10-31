import React from "react";

// Profile information
const profile = {
  name: "Mehedi Robi",
  role: "MERN Stack Developer",
  phone: "+8801336458100",
  email: "mehedirobidev@gmail.com",
  location: "Dhaka, Bangladesh",
  links: [
    ["Portfolio", "https://mehedirobi-portfolio.netlify.app/"],
    ["GitHub", "https://github.com/mehedirobi"],
    ["LinkedIn", "https://www.linkedin.com/in/mehedirobi/"],
  ],
};

// Certificate URL
const certificateUrl =
  "https://drive.google.com/file/d/1ycYUNKL_90HHyelDT5o1Ts3Q7LIHFquP/view?usp=sharing";

// Skills, Projects, Education, and Activities
const skills = [
  {
    category: "Languages",
    items: "JavaScript (ES6+), HTML5, CSS3",
  },
  {
    category: "Frontend",
    items:
      "React.js, React Router, Tailwind CSS, Responsive Design, Reusable Components",
  },
  {
    category: "Backend",
    items: "Node.js, Express.js, RESTful API Development, CRUD Operations",
  },
  {
    category: "Databases",
    items: "MongoDB",
  },
  {
    category: "Authentication",
    items:
      "Firebase Authentication, Protected Routes, User Authentication & Authorization",
  },
  {
    category: "Integrations",
    items: "REST API Integration",
  },
  {
    category: "Tools",
    items: "Git, GitHub, VS Code",
  },
  {
    category: "Soft Skills",
    items:
      "Problem-Solving, Communication, Time Management, Continuous Learning",
  },
];

// Projects
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
      "Developed a full-stack platform for discovering sports turfs and exploring available booking options.",
      "Implemented date and time-slot selection with booking management for customers and turf owners.",
      "Built RESTful API integrations and role-based workflows for customer and owner dashboards.",
    ],
  },
  {
    name: "UrbanFix",
    description: "Civic Infrastructure Issue Reporting Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB",
    live: "https://urbanfix-project-01.netlify.app/",
    repositories: [
      ["Client", "https://github.com/mehedirobi/urban-fix"],
      ["Server", "https://github.com/mehedirobi/urban-fix-server"],
    ],
    points: [
      "Built a full-stack platform for citizens to report, track, and manage civic infrastructure issues.",
      "Integrated Firebase Authentication and protected routes for authenticated user access.",
      "Developed RESTful APIs and MongoDB-backed workflows for issue management and status tracking.",
    ],
  },
  {
    name: "PawMart",
    description: "Pet Adoption & Supply Marketplace",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase",
    live: "https://pawmart-project-01.netlify.app/",
    repositories: [
      ["Client", "https://github.com/mehedirobi/pawmart-project"],
      ["Server", "https://github.com/mehedirobi/pawmart-project-server"],
    ],
    points: [
      "Developed a responsive marketplace for pet adoption and pet-supply shopping with browsing and filtering.",
      "Implemented email/password and Google authentication, listing CRUD, adoption workflows, and product ordering.",
      "Built listing and order dashboards with PDF reports and REST API integrations.",
    ],
  },
];

// Education
const education = {
  degree: "Diploma in Computer Science & Technology (CST)",
  institution:
    "Ahsanullah Institute of Technical & Vocational Education & Training (AITVET)",
  location: "Dhaka, Bangladesh",
  duration: "2023 – Present",
};

// Activities
const activities = [
  "Continuously learning modern web technologies through self-directed projects.",
  "Regularly solving programming problems and building full-stack applications.",
];

const Section = ({ title, children, className = "" }) => (
  <section className={`resume-section ${className}`}>
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const ExternalLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`resume-link ${className}`}
  >
    {children}
  </a>
);

const Project = ({ project }) => (
  <article className="project-item">
    <div className="project-heading">
      <div className="project-info">
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>

      <nav
        aria-label={`${project.name} project links`}
        className="project-links"
      >
        <ExternalLink href={project.live}>Live Demo</ExternalLink>

        {project.repositories.map(([label, url]) => (
          <ExternalLink key={url} href={url}>
            {label}
          </ExternalLink>
        ))}
      </nav>
    </div>

    <p className="project-tech">
      <strong>Tech Stack:</strong> {project.tech}
    </p>

    <ul className="project-points">
      {project.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

// Main Resume Component
const Resume = () => {
  return (
    <>
      <style>{`
        @page {
          size: A4;
          margin: 8mm;
        }

        * {
          box-sizing: border-box;
        }

        .resume-page {
          width: 100%;
          max-width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          padding: 10mm;
          background: #ffffff;
          color: #1f2937;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 9pt;
          font-weight: 500;
          line-height: 1.34;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .resume-header {
          text-align: center;
          padding-bottom: 9px;
          border-bottom: 2px solid #475569;
        }

        .resume-name {
          margin: 0;
          color: #111827;
          font-size: 27pt;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.7px;
        }

        .resume-role {
          margin: 5px 0 0;
          color: #1f2937;
          font-size: 12pt;
          font-weight: 700;
          line-height: 1.25;
        }

        .resume-contact,
        .resume-profiles {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 4px 9px;
          margin-top: 8px;
          font-size: 9pt;
          font-weight: 600;
          line-height: 1.4;
        }

        .resume-profiles {
          margin-top: 5px;
        }

        .resume-contact a {
          color: #1f2937;
          text-decoration: none;
        }

        .resume-divider {
          color: black;
          font-weight: 500;
        }

        .resume-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 10px;
        }

        .resume-section {
          min-width: 0;
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .section-title {
          margin: 0 0 6px;
          padding-bottom: 4px;
          border-bottom: 2px solid #555555;
          color: #111827;
          font-size: 10.5pt;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.65px;
          text-transform: uppercase;
        }

        .objective-text {
          margin: 0;
          color: #263445;
          font-size: 9pt;
          font-weight: 500;
          line-height: 1.42;
          text-align: left;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .skill-row {
          margin: 0;
          color: #263445;
          font-size: 8.9pt;
          font-weight: 500;
          line-height: 1.34;
        }

        .skill-row strong {
          color: #111827;
          font-weight: 700;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-item {
          min-width: 0;
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .project-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }

        .project-info {
          min-width: 0;
        }

        .project-info h3 {
          margin: 0;
          color: #111827;
          font-size: 10pt;
          font-weight: 700;
          line-height: 1.25;
        }

        .project-description {
          margin: 2px 0 0;
          color: #374151;
          font-size: 8.7pt;
          font-weight: 500;
          line-height: 1.25;
        }

        .project-links {
          display: flex;
          flex-shrink: 0;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 3px 8px;
          padding-top: 1px;
          font-size: 8.3pt;
        }

        .resume-link {
          color: #1769aa;
          font-weight: 600;
          text-decoration: none;
        }

        .resume-link:hover {
          color: #0b4f86;
          text-decoration: none;
        }

        .project-tech {
          margin: 4px 0 3px;
          color: #374151;
          font-size: 8.6pt;
          font-weight: 500;
          line-height: 1.3;
        }

        .project-tech strong {
          color: #111827;
          font-weight: 700;
        }

        .project-points {
          margin: 2px 0 0;
          padding-left: 17px;
          color: #263445;
          font-size: 8.7pt;
          font-weight: 500;
          line-height: 1.34;
          list-style-type: disc;
        }

        .project-points li {
          padding-left: 1px;
          margin-bottom: 2px;
        }

        .education-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .education-degree {
          margin: 0;
          color: #111827;
          font-size: 9.3pt;
          font-weight: 700;
          line-height: 1.3;
        }

        .education-institution {
          margin: 3px 0 0;
          color: #374151;
          font-size: 8.8pt;
          font-weight: 500;
          line-height: 1.3;
        }

        .education-duration {
          flex-shrink: 0;
          color: #1f2937;
          font-size: 8.8pt;
          font-weight: 700;
          white-space: nowrap;
        }

        .compact-info p {
          margin: 0;
          color: #263445;
          font-size: 9pt;
          font-weight: 500;
          line-height: 1.35;
        }

        .compact-info strong {
          color: #111827;
          font-weight: 700;
        }

        .activity-list {
          margin: 0;
          padding-left: 17px;
          color: #263445;
          font-size: 8.9pt;
          font-weight: 500;
          line-height: 1.35;
          list-style-type: disc;
        }

        .activity-list li {
          margin-bottom: 2px;
        }

        @media screen {
          .resume-page {
            margin: 24px auto;
            box-shadow: 0 4px 25px rgba(15, 23, 42, 0.10);
          }
        }

        @media print {
          html,
          body {
            width: 100%;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
          }

          .resume-page {
            width: 100%;
            max-width: none;
            min-height: 0;
            margin: 0;
            padding: 0;
            box-shadow: none;
            font-size: 9pt;
          }

          .resume-content {
            gap: 7px;
            margin-top: 8px;
          }

          .resume-section,
          .project-item {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          a,
          .resume-link {
            color: #1769aa;
            text-decoration: none !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .section-title {
            border-bottom-color: #64748b !important;
          }
        }

        @media (max-width: 600px) {
          .resume-page {
            min-height: auto;
            padding: 24px 18px;
            font-size: 9pt;
          }

          .resume-name {
            font-size: 24pt;
          }

          .resume-contact,
          .resume-profiles {
            gap: 5px 7px;
          }

          .project-heading {
            flex-direction: column;
            gap: 4px;
          }

          .project-links {
            justify-content: flex-start;
          }

          .education-heading {
            flex-direction: column;
            gap: 3px;
          }
        }
      `}</style>

      <main className="resume-page">
        <header className="resume-header">
          <h1 className="resume-name">{profile.name}</h1>

          <p className="resume-role">{profile.role}</p>

          <div className="resume-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span className="resume-divider" aria-hidden="true">
              |
            </span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <span className="resume-divider" aria-hidden="true">
              |
            </span>
            <span>{profile.location}</span>
          </div>

          <nav aria-label="Professional profiles" className="resume-profiles">
            {profile.links.map(([label, url], index) => (
              <React.Fragment key={label}>
                {index > 0 && (
                  <span className="resume-divider" aria-hidden="true">
                    |
                  </span>
                )}
                <ExternalLink href={url}>{label}</ExternalLink>
              </React.Fragment>
            ))}
          </nav>
        </header>

        <div className="resume-content">
          {/* Career Objective */}
          <Section title="Career Objective">
            <p className="objective-text">
              Motivated MERN Stack Developer with hands-on experience building
              responsive, full-stack web applications using MongoDB, Express.js,
              React.js, and Node.js. Skilled in developing reusable components,
              RESTful APIs, authentication systems, and database-driven
              applications. Committed to writing clean, maintainable code,
              improving application performance, and delivering scalable,
              user-friendly solutions. Eager to contribute technical skills,
              solve real-world problems, and grow as a software development
              professional.
            </p>
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <div className="skills-list">
              {skills.map(({ category, items }) => (
                <p className="skill-row" key={category}>
                  <strong>{category}:</strong> {items}
                </p>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section title="Projects">
            <div className="projects-list">
              {projects.map((project) => (
                <Project key={project.name} project={project} />
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="education-heading">
              <div>
                <h3 className="education-degree">{education.degree}</h3>
                <p className="education-institution">
                  {education.institution}, {education.location}
                </p>
              </div>

              <span className="education-duration">{education.duration}</span>
            </div>
          </Section>

          {/* Certifications and Achievements */}
          <Section title="Certifications and Achievements">
            <div className="compact-info">
              <p>
                <strong>Complete Web Development Course — </strong>
                {certificateUrl ? (
                  <ExternalLink href={certificateUrl}>
                    Programming Hero
                  </ExternalLink>
                ) : (
                  <span>Programming Hero</span>
                )}
              </p>
            </div>
          </Section>

          {/* Extra-Curricular Activities */}
          <Section title="Extra-Curricular Activities">
            <ul className="activity-list">
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </Section>

          {/* Languages */}
          <Section title="Languages">
            <div className="compact-info">
              <p>
                <strong>Bangla:</strong> Native
                <span className="resume-divider"> | </span>
                <strong>English:</strong> Intermediate
              </p>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
};

export default Resume;
