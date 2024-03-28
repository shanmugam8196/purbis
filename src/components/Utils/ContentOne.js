import React from "react";
import { Link } from 'react-router-dom';

const ContentOne = ({ title, description, buttonLink, buttonName }) => {
  return (
      <div className="content-1">
        <h2>{title}</h2>
        <p className="mb-4 text-secondary mt-4">{description}</p>
        <Link to={buttonLink} className="btn btn-primary btn-lg fw-bold">{buttonName}</Link>
      </div>
  );
};

export default ContentOne;
