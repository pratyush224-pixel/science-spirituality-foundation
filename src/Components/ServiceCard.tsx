import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const BASE_PATH = window.location.hostname.endsWith("github.io")
  ? "/science-spirituality-foundation"
  : "";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <article className="service-card">
      <div className="service-card-icon">✦</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <a
        href={`${BASE_PATH}${link}`}
        className="service-card-link"
      >
        Learn More
        <span>→</span>
      </a>
    </article>
  );
};

export default ServiceCard;
