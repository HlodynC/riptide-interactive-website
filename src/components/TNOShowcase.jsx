
import '../styles/TNOShowcase.css';
import AccordionGallery from './AccordionGallery';

const TNOShowcase = () => {
  return (
    <section className="tno-showcase" aria-labelledby="tno-title">
      <div className="tno-shell">
        <header className="tno-header">
          <h2 id="tno-title">Tidal Nexus Online</h2>
          <p className="tno-sub">
            Tidal Nexus Online (TNO) is an open world submarine MMO developed by Riptide Interactive. The game is set in a living ocean where players can explore volcanic rifts, icy corridors, bioluminescent reefs, and shifting factions while enjoying customizable combat and immersive gameplay.
          </p>
          <div className="tno-cta">
            <a className="tno-button" href="https://tidalnexusonline.com" target="_blank" rel="noreferrer">Learn more</a>
          </div>
        </header>
        <AccordionGallery />       
      </div>
      
    </section>
  );
};

export default TNOShowcase;
