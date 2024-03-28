import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

const SectionTwo = ({ data }) => {  
  return (
    <section className="powerfull-apps">
      <Container>
        {data?.map((card, index) => {
          return (
            <Row key={index}>
              <Col md={6}>
                <h2 className="mb-3">{card.title}</h2>
                {card?.description?.map((text, index) => <p key={index} className="text-secondary">{text}</p> )}
              </Col>
              <Col md={6} className="text-center">
                <LazyLoadImage
                  alt={card.title}
                  src={card.img}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default SectionTwo;
