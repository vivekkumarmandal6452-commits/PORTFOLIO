import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <p className="about-intro">
          I'm <strong>Vivek Kumar</strong>, a dedicated and creative B.Tech
          Computer Science Engineering student with a strong passion for
          technology, design, and development.
        </p>

        <p>
          I have a keen interest in <strong>UI/UX design</strong>,
          <strong> frontend development</strong>, and
          <strong> motion graphics</strong>. Currently, I am actively learning
          full-stack development while working on real-world projects to
          strengthen my practical and problem-solving skills.
        </p>

        <p>
          I enjoy combining creativity with logic to build user-friendly,
          visually appealing web interfaces and engaging digital experiences.
        </p>

        <div className="about-details">
          <div>
            <h3>Education</h3>
            <ul>
              <li>
                <strong>B.Tech in CSE</strong> - Swami Vivekanand Group of
                Institutes &amp; Technology, Banur <br />
                <span>2nd Year | 2024 - Present</span>
              </li>
              <li>
                <strong>Class 12th</strong> - S.G.M College, Ranchi (2024)
              </li>
              <li>
                <strong>Class 10th</strong> - High School, Ghutiya Peshra
                (2022)
              </li>
            </ul>
          </div>

          <div>
            <h3>Career Objective</h3>
            <p>
              To build a strong career in the IT industry, especially in
              software development, web development, and the gaming industry,
              where I can continuously learn, grow, and contribute with my
              skills and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
