import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContentOne } from "./Utils";
import { ToolsCard } from "./Card";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SectionFour = ({ data }) => {
  return (
      <section>
        <Container>
          <Row className="align-items-center">
          <Col md={6} className="pe-5">
              <ContentOne
              title={<>Third-Party Integrations</>}
              description={"We integrate any of the third-party integrations according to your business.  "}
              buttonName={"Explore More"}
              />
          </Col>
          <Col md={6}>
            <LazyLoadImage alt={"Grow business with connections."} height="300" src={"images/connections.png"} width="100%" />            
          </Col>
          </Row>
          <div className="height-100"></div>
          <Row className="align-items-center">
          <Col md={5}>
            <ToolsCard data={data} />            
          </Col>
          <Col md={7} className="ps-150">
              <ContentOne
              title={<>Technologies</>}
              description={"Purbis using a various technologies to build a application to ensure the coding standards "}
              buttonName={"View All Integration"}
              />
          </Col>
          </Row>
        </Container>
      </section>
  );
};

export default SectionFour;
