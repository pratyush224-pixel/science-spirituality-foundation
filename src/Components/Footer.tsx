import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Science & Spirituality</h2>
          <span>Foundation</span>

          <p>
            Exploring consciousness, spirituality, self-awareness and holistic
            wellbeing.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#booking">Book a Session</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-services">
          <h3>Explore</h3>

          <a href="#reiki">Reiki Healing</a>
          <a href="#dowsing">Dowsing</a>
          <a href="#past-life">Past Life Exploration</a>
          <a href="#meditation">Meditation</a>
          <a href="#manifestation">Manifestation</a>
          <a href="#fingerprint-analysis">Fingerprint Analysis</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>+91 83289 09832</p>

          <a
            href="https://wa.me/918328909832"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <p>India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Science & Spirituality Foundation. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
