import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icon } from "@iconify/react";

const WhyChooseCard = ({ img, title, description, icon  }) => {
  return (
    <div className="why_choose_card">
      <div className="icon">
        {img ? <LazyLoadImage alt={title} height="49" src={img} width="45" /> : <Icon icon={icon} />  }
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p className="mb-0 text-secondary font">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
