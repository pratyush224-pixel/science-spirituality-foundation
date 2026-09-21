import React from "react";

const ChakraHealing: React.FC = () => {
  return (
    <section id="chakras" className="chakra-section">
      <div className="chakra-container">
        <div className="chakra-visual">
          <div className="chakra-circle">
            <span>✦</span>
            <small>CHAKRA</small>
          </div>
        </div>

        <div className="chakra-content">
          <p className="section-tag">CHAKRA WELLNESS</p>

          <h2>
            Discover Your
            <span> Chakra System</span>
          </h2>

          <p>
            Chakra-focused practices are rooted in traditional spiritual systems
            and are commonly used for meditation, relaxation and self-awareness.
          </p>

          <p>
            Sessions can provide a peaceful environment to explore breath,
            visualization, meditation and personal awareness through
            chakra-based practices.
          </p>

          <div className="chakra-features">
            <div>
              <strong>01</strong>
              <span>Chakra Awareness</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Meditation & Visualization</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Relaxation & Reflection</span>
            </div>
          </div>

          <a href="#booking" className="chakra-button">
            Explore a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChakraHealing;
