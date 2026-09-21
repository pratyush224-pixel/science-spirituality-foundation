import React from "react";

const FingerprintAnalysis: React.FC = () => {
  return (
    <section id="fingerprint-analysis" className="fingerprint-section">
      <div className="fingerprint-container">
        <div className="fingerprint-visual">
          <div className="fingerprint-circle">
            <span>◉</span>
            <small>FINGERPRINT</small>
          </div>
        </div>

        <div className="fingerprint-content">
          <p className="section-tag">FINGERPRINT ANALYSIS</p>

          <h2>
            Explore Your Unique
            <span> Fingerprint Patterns</span>
          </h2>

          <p>
            Fingerprint analysis is an approach that examines the unique
            patterns found in fingerprints as part of personal exploration and
            interpretation.
          </p>

          <p>
            A session can provide an opportunity to discuss individual
            characteristics, interests and personal development from the
            perspective of fingerprint-based analysis.
          </p>

          <div className="fingerprint-features">
            <div>
              <strong>01</strong>
              <span>Pattern Analysis</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Personal Exploration</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Self-Understanding</span>
            </div>
          </div>

          <a href="#booking" className="fingerprint-button">
            Explore Fingerprint Analysis
          </a>
        </div>
      </div>
    </section>
  );
};

export default FingerprintAnalysis;
