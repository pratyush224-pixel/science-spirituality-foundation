import React from "react";

const SpiritualHealing: React.FC = () => {
  return (
    <section id="spiritual-wellness" className="spiritual-healing-section">
      <div className="spiritual-healing-container">
        <div className="spiritual-healing-content">
          <p className="section-tag">SPIRITUAL WELLNESS</p>

          <h2>
            Nurture Your
            <span> Inner Self</span>
          </h2>

          <p>
            Spiritual wellness practices can create a space for reflection,
            mindfulness, self-awareness and exploration of one's inner journey.
          </p>

          <p>
            Sessions may incorporate meditation, visualization, breath awareness
            and other spiritual practices according to an individual's interests
            and goals.
          </p>

          <div className="spiritual-features">
            <div>
              <strong>01</strong>
              <span>Self-Awareness</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Mindfulness</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Personal Growth</span>
            </div>
          </div>

          <a href="#booking" className="spiritual-button">
            Explore Spiritual Wellness
          </a>
        </div>

        <div className="spiritual-healing-visual">
          <div className="spiritual-healing-circle">
            <span>✧</span>
            <small>INNER JOURNEY</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualHealing;
