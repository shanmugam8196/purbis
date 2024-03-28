import React from "react";
import { Container } from "react-bootstrap";
import { Title } from "./Utils";

const HeroSubpage = ({ title, description }) => {
  return (
    <section className="hero-subpage">
      <Container>
        <Title title={title} description={description} />
      </Container>
    </section>
  );
};

export default HeroSubpage;
