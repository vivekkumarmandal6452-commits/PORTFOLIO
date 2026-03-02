import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k9abcde",
        "template_dzwu7wh",
        e.target,
        "VU1ysN_RvNw7mNlo0"
      )
      .then(
        () => {
          alert("Message sent successfully.");
          e.target.reset();
        },
        (error) => {
          console.log("EmailJS Error:", error);
          alert("Message not sent.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="contact-box">
          <div className="contact-info">
            <p>
              <strong>Email:</strong> vivekkumarmandal778@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 9934363873
            </p>
          </div>

          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Your Name" required />

            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
