import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact reveal-up">
      <div className="contact-container">
        <h2 className="section-title">Connect with me</h2>
        <p className="contact-text">
          Feel free to reach out for collaborations, internships, or freelance opportunities.
        </p>

        <div className="contact-quick-links" aria-label="Quick contact links">
          <a className="contact-icon" href="mailto:vivekkumarmandal6452@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a className="contact-icon" href="tel:+917209635560" aria-label="Phone">
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

        <form
          action="https://formspree.io/f/mwvrrrkb"
          method="POST"
          className="contact-form contact-form-full"
        >
          <div className="contact-grid">
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" placeholder="Your name" autoComplete="name" required />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" placeholder="Your email address" autoComplete="email" required />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-number">Phone</label>
              <input id="contact-number" type="tel" name="number" placeholder="Your phone number" autoComplete="tel" required />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-city">City</label>
              <input id="contact-city" type="text" name="city" placeholder="Your city" autoComplete="address-level2" required />
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project"
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
