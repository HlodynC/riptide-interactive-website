import React, { useState } from 'react';
import '../styles/AboutRiptide.css';

// Replace with a real studio or mood image (1600×1000+ works well)
import studioImg from '../assets/logo.png';

const AboutRiptide = () => {
  const [view, setView] = useState('info'); // 'info' or 'contact'

  const switchView = (next) => {
    setView(next);
    // keep the user in the section
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="about" id="about">
      <div className="about-shell">
        <div className="about-grid">
          {/* Left: copy */}
          <div className="about-copy">
            <h2 className="about-title">About Riptide Interactive</h2>
            <p className="about-lede">
              Riptide Interactive is an independent game studio focused on atmospheric online worlds.
              We blend tight systems design with strong art direction and ship in public with frequent playtests.
            </p>

            {/* Toggle buttons */}
            <div className="about-cta" role="tablist" aria-label="About section tabs">
              <button
                role="tab"
                aria-selected={view === 'info'}
                className={`about-button ${view === 'info' ? 'is-active' : ''}`}
                onClick={() => switchView('info')}
              >
                Info
              </button>
              <button
                role="tab"
                aria-selected={view === 'contact'}
                className={`about-button ghost ${view === 'contact' ? 'is-active' : ''}`}
                onClick={() => switchView('contact')}
              >
                Contact
              </button>
            </div>

            {/* Panels */}
            {view === 'info' ? (
              <div className="about-panel" role="tabpanel" aria-label="Studio info">
                <ul className="about-points">
                  <li><span className="dot"></span> Player first development with clear roadmaps and regular builds.</li>
                  <li><span className="dot"></span> Small team, senior ownership, fast iteration, measurable results.</li>
                  <li><span className="dot"></span> Tooling that serves the game: clean data, observability, build stability.</li>
                  <li><span className="dot"></span> Player first monetization and project management.</li>
                </ul>

                <div className="about-stats">
                  <div className="stat">
                    <div className="stat-num">2023</div>
                    <div className="stat-label">Founded</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">Community</div>
                    <div className="stat-label">Development</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">Playtests</div>
                    <div className="stat-label">Frequent</div>
                  </div>
                </div>

                {/* Optional: lightweight stack badges */}
                <ul className="about-stack" aria-label="Studio toolchain">
                  <li>Unity</li>
                  <li>HDRP</li>
                  <li>C#</li>
                  <li>Photon</li>
                  <li>Custom Shaders</li>
                  <li>Custom Art and Assets</li>
                </ul>
              </div>
            ) : (
              <div className="about-panel" role="tabpanel" aria-label="Contact details">
                <div className="contact-grid">
                  <a className="contact-card" href="mailto:tidalnexusonline@gmail.com">
                    <div className="contact-title">Email</div>
                    <div className="contact-desc">Contact us about any inquiry</div>
                  </a>

                  <a className="contact-card" href="https://discord.gg/MSeuGYnbZB" target="_blank" rel="noreferrer">
                    <div className="contact-title">Discord</div>
                    <div className="contact-desc">Join our community server</div>
                  </a>

                  <a className="contact-card" href="https://www.linkedin.com/company/riptideinteractive" target="_blank" rel="noreferrer">
                    <div className="contact-title">LinkedIn</div>
                    <div className="contact-desc">Follow studio updates</div>
                  </a>

                  <a className="contact-card" href="https://store.steampowered.com/search/?developer=Riptide%20Interactive" target="_blank" rel="noreferrer">
                    <div className="contact-title">Steam</div>
                    <div className="contact-desc">Keep Up With Our Games and Projects</div>
                  </a>
                </div>

                <p className="contact-note">
                  *For press and partnership inquiries, include your org and timeline. We try to respond within 2 to 3 business days. You can directly reach us through our Discord as well.
                </p>
              </div>
            )}
          </div>

          {/* Right: image */}
          <figure className="about-visual">
            <img
              src={studioImg}
              alt="Riptide Interactive studio collage with concept art and in engine shots"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutRiptide;
