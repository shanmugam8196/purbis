import React from "react";
import { Link } from "react-router-dom";

const TitleOne = ({ title, buttonName, buttonLink }) => {
  return (
    <div className="d-flex-1 mb-5">
      <h2>{title}</h2>
      <Link to={buttonLink} className="btn btn-outline-primary fw-bold">
        {buttonName}
      </Link>
    </div>
  );
};

export default TitleOne;
