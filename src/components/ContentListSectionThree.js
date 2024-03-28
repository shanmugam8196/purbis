import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Title } from "./Utils";


const ContentListSectionThree = ({ title, description, data }) => {
  return (
    <section className="content-listing-3">
      <Title title={title} description={description} />
      <Container>

        {data?.map((card, i) => {
          return (
            <Row key={i} className="align-items-center">
              <Col md={6}>
                {card.title ? <h3 className="mb-4">{card.title}</h3> : ""}
                {card.description ? <p>{card.description}</p> : ""}
                <Row className="mt-4">
                  {card.collection.map((list, index) => {
                    return (
                      <Col md={6}>
                        <div className="boxed">
                          <div className="icon"><Icon icon={list.icon} /></div>
                          <h3>{list.title}</h3>
                        </div>
                      </Col>
                    )
                  })}
                </Row>

              </Col>
              <Col md={6} className="text-center">
                <LazyLoadImage alt={card.title} src={card.image} />
              </Col>
            </Row>
          )
        })}
      </Container>
    </section>
  );
};

export default ContentListSectionThree;
