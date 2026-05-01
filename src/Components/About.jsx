import React from "react";

export default function About() {
  return (
    <section id="about" className="about reveal-up">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <p className="about-intro">
          I'm <strong>Vivek Kumar</strong>, a B.Tech CSE student focused on
          building modern, user-friendly web applications with clean UI and
          practical engineering.
        </p>

        <p>
          I have completed full stack development training and actively work
          with <strong>React.js</strong>, <strong>Node.js</strong>,
          <strong> Express.js</strong>, and <strong>MongoDB</strong>. I enjoy
          turning ideas into production-ready interfaces and APIs.
        </p>

        <p>
          I combine creativity with strong fundamentals in
          <strong> DSA</strong>, <strong>DBMS</strong>, and
          <strong> problem solving</strong> to deliver projects that are both
          visually polished and technically reliable.
        </p>

        <div className="about-details">
          <div>
            <h3>Education</h3>
            <ul>
              <li>
                <strong>B.Tech in CSE</strong> - SVIET, Chandigarh
                <br />
                <span>2024 - Present | GPA: 7.7/10</span>
              </li>
              <li>
                <strong>Full Stack Training</strong>
              </li>
              <li>
                <strong>DSA Course</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3>Career Objective</h3>
            <p>
              To contribute as a full stack developer in impactful products
              while continuously improving my engineering depth, product
              thinking, and collaboration skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
