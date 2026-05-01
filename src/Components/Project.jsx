import React from "react";

const projects = [
  {
    title: "Farm Fusion Marketplace",
    description:
      "Full-stack agriculture marketplace connecting farmers and buyers with clean navigation, service discovery, and responsive user flow.",
    stack: "React.js, Node.js, Express.js, MongoDB",
    link: "https://stellar-caramel-59398f.netlify.app",
  },
  {
    title: "Ecommerce Shopping Website",
    description:
      "Responsive ecommerce experience with organized product sections, structured layouts, and smooth browsing interactions.",
    stack: "HTML5, CSS3, JavaScript",
    link: "https://astonishing-concha-e7e2b8.netlify.app",
  },
  {
    title: "Neon Snake Game",
    description:
      "Arcade-style web game featuring smooth controls, live score tracking, and a neon visual system optimized for desktop and mobile.",
    stack: "HTML5, CSS3, JavaScript",
    link: "https://melodious-cactus-f9956e.netlify.app",
  },
];

export default function Project() {
  return (
    <section id="projects" className="projects reveal-up">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="projects-tagline">
          Selected work focused on full stack development, UI quality, and practical product thinking.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.stack}</span>
              <div className="project-actions">
                <a className="btn primary project-link" href={project.link} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
