import React from "react";
import { Link } from "react-router-dom";
import { Container, Accordion } from "react-bootstrap";
import { PortfolioCard } from "./Card";
import { Title } from "./Utils";

const Faq = ({ data, title, paddingBottom }) => {
  return (
    <>
      {/* our work */}
      <section className={paddingBottom ? "faq-section pb-0" : "faq-section"}>
        <Container>
          <Title title={title} />
          <Accordion defaultActiveKey="1">
            {data?.map((content, i) => {
              return (
                <Accordion.Item eventKey={`${content.id}`} key={i}>
                  <Accordion.Header>{content.title}</Accordion.Header>
                  <Accordion.Body>{content.description}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container>
      </section>
      {/* our work */}
    </>
  );
};

export default Faq;
