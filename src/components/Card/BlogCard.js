import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, date, buttonLink, category }) => {
  return (
    <div className="blog-box">
      <div className="image">
        <Link to={buttonLink}>
          <LazyLoadImage alt={title} height="300" src={image} width="100%" />
        </Link>
      </div>
      <div className="content">
        <Link to={buttonLink} className="title h3">
          {title}
        </Link>
        <p className="mb-0 d-flex text-secondary">
          <span className="me-3">
            <i className="fa-solid fa-calendar-days me-2" /> {date}
          </span>{" "}
          <span>
            <i className="fa-solid fa-tag me-2" /> {category}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
