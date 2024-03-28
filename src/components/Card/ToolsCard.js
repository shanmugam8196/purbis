import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ToolsCard = ({ data }) => {
  return (
    <ul className="ul-tools">
      {data?.map((card, i) => {
        return (
          <li key={i}>
            <div className="icon">
              <div>
                <LazyLoadImage
                  alt={card.title}
                  height="300"
                  src={card.image}
                  width="100%"
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ToolsCard;
