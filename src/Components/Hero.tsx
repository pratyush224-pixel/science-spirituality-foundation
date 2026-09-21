import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tagline">
          Science • Spirituality • Consciousness • Wellbeing
        </p>

        <h1>
          A Brighter Understanding
          <span> of Life</span>
        </h1>

        <p className="hero-description">
          Exploring science, spirituality, consciousness and wellbeing through
          knowledge, inner growth and meaningful personal exploration.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="hero-button primary">
            Explore Our Services
          </a>

          <a href="#booking" className="hero-button secondary">
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
