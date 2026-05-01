import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© {year} Vivek Kumar. Built with React and passion for clean UI.</p>
        <a href="#home" className="footer-top-link">Back to top</a>
      </div>
    </footer>
  );
}
