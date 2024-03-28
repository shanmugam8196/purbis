import React from "react";
import RequestDemoModal from "./RequestDemoModal";

const HeroSubSection = ({ title, description, button, buttonName, image }) => {
  const scroll = () => {
    const element = document.getElementById("scroll-footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* home banner */}
      <section className="hero-subsection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="showcase-image">
                <h1>{title}</h1>
                <p className="fs-5 text-secondary">{description}</p>
                <div className="mt-4 d-flex ">
                  <RequestDemoModal />
                  <button
                    onClick={scroll}
                    className="btn btn-outline-primary btn-lg fw-bold"
                  >
                    {buttonName}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mt-4">
                <img
                  src={image}
                  alt="Hero Sub Banner"
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSubSection;
