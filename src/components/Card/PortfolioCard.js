import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';

const PortfolioCard = ({
  image,
  title,
  button,
  buttonLink,
  description,
  badge,
}) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-img">
        <span className="badge rounded-pill text-bg-primary">{badge}</span>
        <Link to={buttonLink}>
          <LazyLoadImage alt={title} height="300" src={image} width="100%" />
        </Link>
      </div>
      <div className="portfolio-content">
        <p className="mb-0 fw-light text-secondary">{title}</p>
        <h3>{description}</h3>
        <Link to={buttonLink}>{button}</Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
