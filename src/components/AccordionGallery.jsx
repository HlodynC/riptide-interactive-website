import React, { useState, useEffect } from 'react';
import '../styles/AccordionGallery.css';

const images = [
  { 
    id: 1, 
    src: "https://res.cloudinary.com/diceogust/image/upload/v1743803855/imageA4-7_vgkggq.png", 
    title: 'Dive Into The Depths of Aquathar', 
    description: "Engage in dynamic PvP skirmishes and large-scale battles, establish trade routes, or simply explore the mysterious underwater realm. Whether you're a warrior, merchant, or adventurer, there's always something waiting beneath the waves of Aquathar." 
  },
  { 
    id: 2, 
    src: "https://res.cloudinary.com/diceogust/image/upload/v1743803861/imageA4-6_ctcvsk.png", 
    title: 'Customize Your Playstyle', 
    description: "From high-defense Tank modules to aggressive Combat configurations, players can fine-tune their approach and master the deep with a setup that suits their unique strategy." 
  },
  { 
    id: 3, 
    src: "https://res.cloudinary.com/diceogust/image/upload/v1743803860/imageA4-2_vdvvde.png", 
    title: 'Station Docking', 
    description: "Stations across Aquathar serve as essential hubs for submarine management and customization. Players can dock at these facilities to inspect their vessels, apply visual modifications, upgrade internal modules, and fine-tune loadouts to better suit their chosen playstyle." 
  },
  { 
    id: 4, 
    src: "https://res.cloudinary.com/diceogust/image/upload/v1743803856/imageA4-3_yngvcj.png", 
    title: 'Dynamic Events and Missions', 
    description: "Tidal Nexus Online offers a constantly evolving gameplay experience through a variety of dynamic events and mission types. From large-scale underwater incursions to faction-based skirmishes and time-limited challenges, players can always find action in the deep either as a team/clan or solo." 
  },
  { 
    id: 5, 
    src: "https://res.cloudinary.com/diceogust/image/upload/v1743803861/imageA4-5_hgcsfl.png", 
    title: 'Classic MMO Experience, Reinvented', 
    description: "Enjoy the timeless charm of classic MMO gameplay, now reimagined with modern visuals and cutting-edge technology. Tidal Nexus Online delivers a familiar yet fresh experience, blending nostalgia with immersive, next-generation features beneath the ocean's surface." 
  },
];

const AccGalleryShow = () => {
  const [activeIndex, setActiveIndex] = useState(0);     // drives flex-grow
  const [hoverIndex, setHoverIndex] = useState(null);    // drives overlay
  const [paused, setPaused] = useState(false);           // pause autoplay on hover

  // autoplay the expanded card when not paused
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="container">
      {images.map((img, index) => {
        const isActive  = index === activeIndex;          // only flex
        const isHover   = index === hoverIndex;           // only overlay
        return (
          <div
            key={img.id}
            className={`card ${isActive ? 'is-active' : ''} ${isHover ? 'is-hovered' : ''}`}
            onMouseEnter={() => { setHoverIndex(index); setPaused(true); }}
            onMouseLeave={() => { setHoverIndex(null); setPaused(false); }}
          >
            <img src={img.src} alt={img.title} />
            <div className="card__overlay">
              <div className="card__head">{img.title}</div>
              <div className="card__desc">{img.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccGalleryShow;
