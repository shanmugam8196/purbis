import React from "react";
import { Link } from "react-router-dom";
import { HeroSvg } from "./Utils";
import { HeroSlider } from "./Slider";
import { motion } from "framer-motion";
import RequestDemoModal from "./RequestDemoModal";

const HeroSection = ({ title, description, button = "Request Demo", data }) => {
  return (
    <>
      {/* home banner */}
      <motion.section className="hero-banner"
      // className="home_banner"
      // initial={{ backgroundPosition: "0px 0%" }}
      // animate={{ backgroundPosition: "45px 55%" }}
      // viewport={{ once: true }}
      >
        <div className="container pt-5">
          <div className="row align-items-center pt-5">
            <div className="col-md-6">
              <div className="showcase-image">
                <h1>{title}</h1>
                <p className="fs-5 pt-3 pb-3 text-secondary">{description}</p>
                <Link to="/request-for-demo">
                  <button className="btn btn-primary btn-lg fw-bold">
                    {button}
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner_set_container">
                <HeroSvg />
                {/* <HeroSlider data={data} /> */}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* home banner */}
    </>
  );
};

export default HeroSection;
