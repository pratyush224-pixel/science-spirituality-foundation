import React from "react";

const ReikiHealing: React.FC = () => {
  return (
    <section id="reiki" className="reiki-section">
      <div className="reiki-container">
        <div className="reiki-content">
          <p className="section-tag">REIKI HEALING</p>

          <h2>
            Reconnect With Your
            <span> Inner Energy</span>
          </h2>

          <p>
            Reiki is a traditional Japanese energy-based spiritual practice
            often used for relaxation, mindfulness and personal wellbeing.
          </p>

          <p>
            Sessions provide a calm space for self-reflection, relaxation and
            exploring one's sense of energetic balance.
          </p>

          <div className="reiki-features">
            <div>
              <strong>01</strong>
              <span>Relaxation</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Mindfulness</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Inner Awareness</span>
            </div>
          </div>

          <a href="#booking" className="reiki-button">
            Book a Reiki Session
          </a>
        </div>

        <div className="reiki-visual">
          <div className="reiki-circle">
            <span>REIKI</span>
            <small>Energy • Awareness • Balance</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReikiHealing;
