import React from "react";

const TestimonialCard = ({ name, title, content, company }) => {
  return (
    <div className="item">
      <p className="d-flex text-warning">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
      </p>
      <h3>{title}</h3>
      <p className="main-paragraph">
        <sup>“</sup>
        {content}
        <sub>“</sub>
      </p>
      <h3 className="testimonial-name">{name}</h3>
      <p className="fw-light">{company}</p>
    </div>
  );
};

export default TestimonialCard;
