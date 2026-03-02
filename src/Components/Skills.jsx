import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-box">
            <h3>Frontend Development</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (Basics)</li>
              <li>React.js</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>UI/UX and Motion</h3>
            <ul>
              <li>UI/UX Principles</li>
              <li>Adobe After Effects</li>
              <li>Motion Graphics</li>
              <li>Creative Design</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>Full Stack (Learning)</h3>
            <ul>
              <li>Backend Basics</li>
              <li>Database Concepts</li>
              <li>API Fundamentals</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>Tools and Software</h3>
            <ul>
              <li>Blender</li>
              <li>Microsoft Office</li>
              <li>ADCA (DCA - 1 Year)</li>
              <li>Git and GitHub (Basic)</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>Soft Skills</h3>
            <ul>
              <li>Creative Thinking</li>
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
