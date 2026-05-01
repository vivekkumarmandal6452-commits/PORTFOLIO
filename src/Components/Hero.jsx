import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import profileImg from "../assets/art.jpeg";

export default function Hero() {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="hero-content reveal-up">
          <h1 className="hero-title">
            Hi, I'm <span>Vivek Kumar</span>
          </h1>

          <h2 className="hero-role">
            Full Stack Developer
            <span className="hero-role-highlight"> React | Node.js | MongoDB</span>
          </h2>

          <p>
            I am a Computer Science student and Full Stack Developer who builds
            responsive web applications using React.js, Node.js, Express.js, and
            MongoDB, with a strong focus on clean UI and problem solving.
          </p>

          <div className="home-socials">
            <a
              className="contact-icon"
              href="mailto:vivekkumarmandal6452@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a className="contact-icon" href="tel:7209635560" aria-label="Phone">
              <FaPhoneAlt />
            </a>
            <a
              className="contact-icon"
              href="https://github.com/vivekkumarmandal6452-commits"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="contact-icon"
              href="https://www.linkedin.com/in/vivek-kumar-60b076321"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="home-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile-img hero-media reveal-up delay-2">
          <img src={profileImg} alt="Vivek Kumar" />
        </div>
      </div>
    </section>
  );
}
