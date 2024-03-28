import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioCard } from "./Card";
import { TopOverlay, TitleOne, Title } from "./Utils";

const Portfolio = ({ data, title, button, landingPage, description }) => {
  return (
    <>
      {/* our work */}
        <section className="portfolio-section home">
          <TopOverlay color="#fef3f6" />
          <Container>
            {landingPage ? (
              <Title title={title} description={description} />
            ) : (
              <TitleOne title={title} buttonName={button} buttonLink="/" />
            )}
            <Row>
              {data?.map((card, Index) => {
                return (
                  <Col md={4} key={Index}>
                      <PortfolioCard
                        title={card.title}
                        image={card.image}
                        description={card.description}
                        button={"Learn More"}
                        buttonLink={card.link}
                        badge={card.badge}
                      />                    
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      {/* our work */}
    </>
  );
};

export default Portfolio;
