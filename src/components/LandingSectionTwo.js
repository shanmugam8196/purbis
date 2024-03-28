import React from "react";
import { TopOverlay, Title } from "./Utils";
import { IconsCard } from "./Card";
import { Container, Row, Col } from "react-bootstrap";


const LandingSectionTwo = ({ title, description, data }) => {
  return (
    <section className="our-works">
      <TopOverlay color="#fef3f6" />
      <Container>
        <Title title={title} description={description} />
        <Row>
          {data?.map((card, i) => {
            return (
              <Col key={i}>
                <IconsCard
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default LandingSectionTwo;
