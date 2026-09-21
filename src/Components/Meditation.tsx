import React from "react";

const Meditation: React.FC = () => {
  return (
    <section id="meditation" className="meditation-section">
      <div className="meditation-container">
        <div className="meditation-visual">
          <div className="meditation-circle">
            <span>✦</span>
            <small>MEDITATION</small>
          </div>
        </div>

        <div className="meditation-content">
          <p className="section-tag">MEDITATION</p>

          <h2>
            Find Stillness Through
            <span> Meditation</span>
          </h2>

          <p>
            Meditation is a practice of cultivating attention, awareness and a
            calmer relationship with thoughts and emotions.
          </p>

          <p>
            Different techniques can be explored according to individual
            interests, including mindfulness, breath awareness, guided
            meditation and visualization.
          </p>

          <div className="meditation-features">
            <div>
              <strong>01</strong>
              <span>Mindfulness</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Breath Awareness</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Guided Meditation</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Visualization</span>
            </div>
          </div>

          <a href="#booking" className="meditation-button">
            Explore Meditation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Meditation;
