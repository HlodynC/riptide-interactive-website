import React from 'react';
import '../styles/Footer.css';


import FooterLogo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: Logo */}
        <div className="footer-left">
          
          <img src={FooterLogo} alt="Footer Logo" className="footer-logo" />
          
        </div>
        
        {/* Center: Main text & links */}
        <div className="footer-center">
          <p className="footer-center-text">
            RIPTIDE INTERACTIVE
          </p>
          <div className="footer-links">
            <a href="https://tidalnexusonline.com/legal">LEGAL</a>
            <span className="footer-separator">|</span>
            <a href="https://tidalnexusonline.com/legal">PRIVACY NOTICE</a>
            <span className="footer-separator">|</span>
            <a href="https://tidalnexusonline.com/legal">COOKIE NOTICE</a>
          </div>
        </div>
        
        {/* Right: Disclaimer or Copyright */}
        <div className="footer-right">
          <p>
            ©2025 Riptide Interactive<br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
