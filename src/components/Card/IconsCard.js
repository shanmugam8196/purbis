import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IconsCard = ({ image, title, description }) => {
  return (
        <div className="card-1 text-center rounded-4 shadow-sm">
          <LazyLoadImage alt={title} height="120" src={image} width="120" />
          <h3 className="mb-0 mt-2 mb-0 ">{title}</h3>
          <p className="mt-2 mb-0 fw-18 text-secondary">
            {description}
          </p>
        </div>
  );
};

export default IconsCard;
