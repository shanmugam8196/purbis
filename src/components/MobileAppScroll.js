import React from "react";
import { TopOverlay, Title } from "./Utils";
import { AppSlider } from "./Slider";
import { Container } from "react-bootstrap";

const MobileAppScroll = ({ title, description, data, white }) => {
  return (
    <section className={white ? "our-works white_bg" : "our-works" }>
      {!white && <TopOverlay color="#fef3f6" /> }
      <Container>
        <Title title={title} description={description} />
          <AppSlider data={data} />
      </Container>
    </section>
  );
};

export default MobileAppScroll;
