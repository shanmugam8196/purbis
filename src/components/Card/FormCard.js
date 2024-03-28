import React from "react";

const FormCard = ({ name, title, content, company }) => {
    return (
        <div className="item">

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

export default FormCard;
