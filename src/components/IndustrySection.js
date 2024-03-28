import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, TopOverlay } from "./Utils";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const IndustrySection = ({ title, description, data, landingPage }) => {

  const scroll = () => {
    const element = document.getElementById('scroll-footer');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className={landingPage ? "industry_section_white_bg" : "industry_section"} >
      {!landingPage && <TopOverlay color="#eef6ff" />}
      <Container>
        <Title title={title} description={description} />
        <div className="industry-icons-set">

          {data?.map((card, i) => {
            return (
              <div className="box" key={i}>
                <Link to={card.url}>
                  <div className="icon">
                    <Icon icon={card.icon} />
                  </div>
                  <div className="title">{card.title}</div>
                </Link>
              </div>
            )
          })}

        </div>

        {!landingPage && (
          <div className="text-center mt-5">
            <Link to="/" onClick={scroll} className="btn-link text-primary">
              Looking for some other solutions?{" "}
              <span className="fw-bold">Contact us</span>
            </Link>
          </div>
        )}

      </Container>
    </section>
  );
};

export default IndustrySection;
