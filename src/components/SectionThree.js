import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { WhyChooseCard } from "./Card";
import { Title } from "./Utils";

const SectionThree = ({ title, description, data, darkMode }) => {
  return (
    <>
      {/* why choose us */}
      <section className={darkMode ? "why_choose dark_mode" : "why_choose" }>
        <Container>
          <Title title={title} description={description} />
          <Row>
            {data?.map((card, i) => {
              return (
                <Col md={4} key={i}>
                  <WhyChooseCard
                    title={card.title}
                    img={false}
                    icon={card.icon}
                    description={card.description}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      {/* why choose us */}
    </>
  );
};

export default SectionThree;
