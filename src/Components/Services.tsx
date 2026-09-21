import React from "react";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  const services = [
    {
      title: "Reiki Healing",
      description:
        "A gentle practice for relaxation, energetic awareness and inner balance.",
      link: "/services/reiki",
    },
    {
      title: "Dowsing",
      description:
        "An intuitive practice for personal exploration, reflection and awareness.",
      link: "/services/dowsing",
    },
    {
      title: "Past Life Regression",
      description:
        "A guided exploration of inner experiences, imagery, emotions and consciousness.",
      link: "/services/past-life-regression",
    },
    {
      title: "Chakra Wellness",
      description:
        "Chakra-focused practices supporting meditation, relaxation and self-awareness.",
      link: "/services/chakra-wellness",
    },
    {
      title: "Spiritual Wellness",
      description:
        "Practices for mindfulness, reflection, inner awareness and personal growth.",
      link: "/services/spiritual-wellness",
    },
    {
      title: "Meditation",
      description:
        "Guided practices using breath, attention and visualization to cultivate inner calm.",
      link: "/services/meditation",
    },
    {
      title: "Manifestation",
      description:
        "Explore intention, visualization and focused action for personal development.",
      link: "/services/manifestation",
    },
    {
      title: "Fingerprint Analysis",
      description:
        "An interpretive exploration of fingerprint patterns for self-understanding and reflection.",
      link: "/services/fingerprint-analysis",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <p className="services-eyebrow">SCIENCE & SPIRITUALITY FOUNDATION</p>

          <h2>Explore Our Services</h2>

          <p className="services-header-text">
            Explore different approaches to wellbeing, consciousness, inner
            awareness and personal growth.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
