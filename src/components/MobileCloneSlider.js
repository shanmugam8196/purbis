import React from "react";
import { Title } from "./Utils";
import { Container } from "react-bootstrap";
import CloneSlider from "./Slider/CloneSlider";

const MobileCloneSlider = ({ title, description, data, white }) => {
  return (
    <section className={white ? "our-works white_bg" : "our-works"}>
      {/* {!white && <TopOverlay color="#fef3f6" /> } */}
      <Container>
        <Title title={title} description={description} />
        <CloneSlider data={data} />
      </Container>
    </section>
  );
};

export default MobileCloneSlider;
