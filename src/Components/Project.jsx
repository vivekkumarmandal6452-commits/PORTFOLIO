import React from "react";

const dummyProject = {
  title: "Demo Project (Dummy)",
  description:
    "This is a sample card layout to show how your project section will look before publishing final projects.",
  stack: "React, CSS, Responsive Layout",
};

const realProjects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a modern personal portfolio with smooth navigation and responsive sections.",
    stack: "React, Vite, CSS",
  },
  {
    title: "Contact Form Integration",
    description:
      "Implemented a live contact form with EmailJS to send user messages directly from the website.",
    stack: "React, EmailJS",
  },
];

export default function Project() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <article className="project-card">
            <h3>{dummyProject.title}</h3>
            <p>{dummyProject.description}</p>
            <span>{dummyProject.stack}</span>
          </article>

          {realProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.stack}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
