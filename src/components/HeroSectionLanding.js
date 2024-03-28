import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import RequestDemoModal from "./RequestDemoModal";
import { Link } from "react-router-dom";

const HeroSectionLanding = ({ title, description, buttonName, image }) => {

  const scroll = () => {
    const element = document.getElementById('scroll-footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* hero section */}
      <section className="hero-section">
        <Container>
          {/* content area */}
          <div className="hero-section-content text-center">
            <h1>{title}</h1>
            <p className="fs-5 text-secondary mt-4">{description}</p>
            <div className="mt-4 d-flex justify-content-center">
              <RequestDemoModal />
              <button onClick={scroll} className="btn btn-outline-primary btn-lg fw-bold">
                {buttonName}
              </button>
            </div>
          </div>
          {/* content area */}
          <div className="mt-4">
            <img
              src={image}
              alt="Hero Banner"
              className="hero-img"
              width="100%"
              height="auto"
            />
          </div>
        </Container>
        <div className="hero-overlay">
          <svg
            width={1485}
            height={652}
            viewBox="0 0 1485 652"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              id="path-anime"
              className="transition"
              d="M1224.29 113.136C1237.15 118.331 1262.33 134.585 1260.18 158.036C1260.2 160.665 1259.77 176.075 1254.23 172.747C1248.69 169.416 1244.67 160.294 1249.22 155.693C1250.02 154.876 1251.24 154.456 1253.05 154.734C1259.23 155.684 1263.97 161.215 1264.79 167.412C1265.77 174.832 1263.76 186.321 1249.76 199.707"
              stroke="black"
            />
            <circle cx={1329} cy={14} r="3.5" stroke="#8FE9E1" />
            <circle cx={1384} cy={607} r="3.5" stroke="#8FE9E1" />
            <circle cx={1210} cy={4} r={4} fill="#FFC3C3" />
            <circle cx={1330} cy={263} r={3} fill="#434343" />
            <circle cx={1221} cy={589} r={3} fill="#434343" />
            <circle cx={3} cy={89} r={3} fill="#434343" />
            <circle cx={156} cy={506} r={3} fill="#434343" />
            <circle cx={1422} cy={390} r={4} fill="#8FE9E1" />
            <circle cx={4} cy={553} r={4} fill="#8FE9E1" />
            <circle cx={178} cy={237} r="2.5" stroke="#282828" />
            <circle cx="214.5" cy="80.5" r={2} stroke="#3F3F3F" />
            <path
              className="anime-triangle"
              d="M1226.47 236.06L1228.9 262.475L1199.94 236.391L1226.47 236.06Z"
              fill="#C0BEF8"
            />
            <path
              d="M1196.54 242.076L1221.33 241.766L1223.6 266.449L1196.54 242.076Z"
              stroke="#C0BEF8"
            />
            <path
              className="anime-triangle"
              d="M139.085 618.479L139.374 591.954L165.505 620.866L139.085 618.479Z"
              fill="#FAA6D2"
            />
            <path
              d="M169.47 615.56L144.784 613.329L145.054 588.544L169.47 615.56Z"
              stroke="#FAA6D2"
            />
          </svg>
        </div>
      </section>
      {/* hero section */}
    </>
  );
};

export default HeroSectionLanding;
