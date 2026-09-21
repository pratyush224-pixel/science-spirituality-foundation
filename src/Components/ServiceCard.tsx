import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

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

      <a href={link} className="service-card-link">
        Learn More
        <span>→</span>
      </a>
    </article>
  );
};

export default ServiceCard;
