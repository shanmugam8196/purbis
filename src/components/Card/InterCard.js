import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const InterCard = ({ image, title, description }) => {
  return (
        <div className="card-2 text-center rounded-4 shadow-sm">
          <LazyLoadImage alt={title}  src={image}  />
          <h3 className="mb-0 mt-2 mb-0 d-none">{title}</h3>
          <p className="mt-2 mb-0 fw-18 text-secondary">
            {description}
          </p>
        </div>
  );
};

export default InterCard;
