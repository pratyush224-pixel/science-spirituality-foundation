import React from "react";

const Dowsing: React.FC = () => {
  return (
    <section id="dowsing" className="dowsing-section">
      <div className="dowsing-container">
        <div className="dowsing-visual">
          <div className="dowsing-circle">
            <span>✦</span>
            <small>DOWSING</small>
          </div>
        </div>

        <div className="dowsing-content">
          <p className="section-tag">DOWSING</p>

          <h2>
            Explore the Practice of
            <span> Dowsing</span>
          </h2>

          <p>
            Dowsing is a traditional practice that uses tools such as pendulums
            or rods as part of intuitive exploration and personal reflection.
          </p>

          <p>
            Sessions can provide a structured space to explore questions,
            awareness and personal perspectives through traditional dowsing
            techniques.
          </p>

          <div className="dowsing-features">
            <div>
              <strong>01</strong>
              <span>Intuitive Exploration</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Personal Reflection</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Traditional Techniques</span>
            </div>
          </div>

          <a href="#booking" className="dowsing-button">
            Explore a Dowsing Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dowsing;
