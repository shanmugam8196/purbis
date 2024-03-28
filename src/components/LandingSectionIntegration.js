import React from "react";
import { ContentOne } from "./Utils";
import { ToolsCard } from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingSectionIntegration = ({ data }) => {
  return (
    <section className="p-0">
        <Container>
          <div className="box-integration">
            {/* row */}
            {data.map((row, i) => {
              return (
                <Row className="align-items-center" key={i}>
                  <Col md={7}>
                   
                    <ContentOne
                      title={row.title}
                      description={row.description}
                      buttonName={row.buttonName}
                      buttonLink={row.buttonLink}
                      
                    />
                    
                  </Col>
                  <Col md={5}>
                    <ToolsCard data={row.tools} />
                  </Col>
                </Row>
              );
            })}
          </div>
        </Container>
    </section>
  );
};

export default LandingSectionIntegration;
