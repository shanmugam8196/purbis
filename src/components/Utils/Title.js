import React from "react";

const Title = ({ title, description,subtitle }) => {
  return (
    <div className="text-center mb-5">
      <div className="w-75 d-inline-block">
      <p className="text-secondary">{subtitle}</p>
      <h2>{title}</h2>
      {description && (
        <p className="text-secondary">{description}</p>
      )}
      
      
      </div>
    </div>
  );
};

export default Title;
