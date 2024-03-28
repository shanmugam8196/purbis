import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TopOverlay } from "./Utils";
import { Link } from "react-router-dom";

const SectionOne = ({ title, description, button, highlight, data, landingPage }) => {
  return (
    <section className={!landingPage ? "our_business_solutions" : "our_business_solutions_landing"} >
      {!landingPage && <TopOverlay color="#eef6ff" /> }
      <div className="container">
        <div className="text-center mb-5">
          <h2>
            {title} <span className="text-primary">{highlight}</span>
          </h2>
          <p className="w-50 d-inline-block text-secondary">{description}</p>
        </div>
        <div className="row mb-5">
          {data?.map((card, i) => {
            return (
              <div className="col" key={i}>
                <div className="business_solution_card">
                  <div className="icon">
                    <LazyLoadImage
                      alt={card.title}
                      height="80"
                      src={card.img}
                      width="80"
                    />
                  </div>
                  <p className="mb-0">{card.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {!landingPage && (
        <div className="text-center mt-5">
          <Link to="/" className="btn-link text-primary">
            Looking for some other solutions?{" "}
            <span className="fw-bold">Contact us</span>
          </Link>
        </div>
        )}
      </div>
    </section>
  );
};

export default SectionOne;
