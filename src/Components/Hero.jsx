import React from "react";
import profileImg from "../assets/art.jpg";

export default function Hero() {
  return (
    <>
    <section id="home" className="home">
      <div className="home-container">

      
        <div className="profile-img">
          <img src={profileImg} alt="Vivek Kumar" />
        </div>

        <h1>
          Hi, I’m <span>Vivek Kumar</span>
        </h1>

        <h2>Frontend Developer | React</h2>

        <p>
          I build modern, responsive and user-friendly web applications
          using React and modern web technologies.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>

      </div>
    </section>
    </>
  );
}
