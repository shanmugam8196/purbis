import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PortfolioCard = ({
  image,
  title,
  description,
  data
}) => {
  return (
    <div className="d-inline-block w-100">
      <div className="row align-items-center">
        <div className="col-md-6">
          {title ? <h3>{title}</h3> : ""}
          {description ? <p>{description}</p> : ""}
          <div className="list-group-purbis mt-5">
            <div className="line-track" />

            {data?.map((card, i) => {
              return (
                <div className="box" key={i}>
                  <h5>{card.title}</h5>
                  <p>
                    {card.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-md-6 text-center">
          <LazyLoadImage alt={title} src={image} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
