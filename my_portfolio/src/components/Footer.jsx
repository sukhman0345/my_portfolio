import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
    <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">PORTFOILO</div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sukhman012358/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/sukhman_saini30/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/sukhman0345" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <p>Copyright © 2025. Sukhman Singh</p>
      </footer>
</div>

  );
};

