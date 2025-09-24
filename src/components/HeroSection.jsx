import React, { useState } from 'react';
import '../styles/HeroSection.css';
import companyLogo from '../assets/logo.png';
import DcLogo from '../assets/discord-logo.png';
import SteamLogo from '../assets/steam-logo.png';
import LinkedInLogo from '../assets/linkedin-logo.png';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <div className="hero-container" id="home">
      <header className="navbar">
        <div className="nav-left">
          <button
            className="hamburger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            ☰
          </button>

          {/* Desktop menu */}
          <nav className="menu-desktop">
            <button className="nav-link" onClick={() => go('home')}>Home</button>
            <button className="nav-link" onClick={() => go('projects')}>Projects</button>
            <button className="nav-link" onClick={() => go('about')}>Info and Contact</button>
          </nav>
        </div>

        <div className="nav-center">
          <img src={companyLogo} alt="Company Logo" className="logo-img" />
        </div>

        <div className="nav-right">
          <div className="navbar-social-links">
            <a href="https://discord.gg/MSeuGYnbZB" target="_blank" rel="noopener noreferrer">
              <img src={DcLogo} alt="Discord" className="dc-logo" />
            </a>
            <a href="https://store.steampowered.com/app/2937310/Tidal_Nexus_Online/" target="_blank" rel="noopener noreferrer">
              <img src={SteamLogo} alt="Steam" className="steam-logo" />
            </a>
            <a href="https://www.linkedin.com/company/riptideinteractive" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInLogo} alt="LinkedIn" className="linkedin-logo" />
            </a>
          </div>
        </div>

        {/* Mobile dropdown */}
        <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <button className="mobile-link" onClick={() => go('home')}>Home</button>
          <button className="mobile-link" onClick={() => go('projects')}>Projects</button>
          <button className="mobile-link" onClick={() => go('about')}>Contact</button>
        </nav>
      </header>

      <main className="main-content">
        <h1 className="main-heading">Explore the Worlds We Create</h1>
        <div className="button-group">
          <button className="hero-button" onClick={() => go('contact')}>Contact</button>
          <button className="hero-button" onClick={() => go('projects')}>Projects</button>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
