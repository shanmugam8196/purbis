import React from "react";
import { TopOverlay, Title } from "./Utils";

import { Container, Row, Col } from "react-bootstrap";
import InterCard from "./Card/InterCard";


const IntegrationCard = ({ title, description, data }) => {
  return (
    <section className="our-work">
      
      <Container>
        <Title title={title} description={description} />
        <div className="row">
          {data?.map((card, i) => {
            return (
              <div className="col-md-2 mb-3" key={i}>
                <InterCard
                 title={card.title}
                 description={card.description}
                  image={card.image}
                  
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default IntegrationCard;
