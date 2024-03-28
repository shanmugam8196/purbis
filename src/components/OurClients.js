import React from "react";
import { Container } from "react-bootstrap";
import { ClientsApi } from "./Data/ClientsApi";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OurClients = () => {
  return (
    <>
      <section className="happy-client sm">
        <Container>
          <h2 className="text-center">
            <span>Join 20+ countries </span> around the world have clients
            that use Purbis to expand their businesses.
          </h2>
          <div className="clients-boxed">
            {ClientsApi?.map((card, i) => {
              return (
                <div className="clients-inside" key={i}>
                  <LazyLoadImage
                    alt={card.title}
                    height="100"
                    src={card.img}
                    width="200"
                  />

                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurClients;
