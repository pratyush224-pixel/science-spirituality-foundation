import React from "react";

const Manifestation: React.FC = () => {
  return (
    <section id="manifestation" className="manifestation-section">
      <div className="manifestation-container">
        <div className="manifestation-content">
          <p className="section-tag">MANIFESTATION</p>

          <h2>
            Turn Intention Into
            <span> Conscious Action</span>
          </h2>

          <p>
            Manifestation practices can combine intention setting,
            visualization, positive reflection and focused action as tools for
            personal development.
          </p>

          <p>
            The sessions encourage individuals to clarify what they want to work
            towards and develop practical habits and perspectives that support
            their personal goals.
          </p>

          <div className="manifestation-features">
            <div>
              <strong>01</strong>
              <span>Intention Setting</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Visualization</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Mindset & Awareness</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Focused Action</span>
            </div>
          </div>

          <a href="#booking" className="manifestation-button">
            Explore Manifestation
          </a>
        </div>

        <div className="manifestation-visual">
          <div className="manifestation-circle">
            <span>✧</span>
            <small>INTENTION</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifestation;
