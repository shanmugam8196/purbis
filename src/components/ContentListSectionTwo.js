import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Title } from "./Utils";
import { Container, Row, Col } from "react-bootstrap";
import RequestDemoModal from "./RequestDemoModal";

const ContentListSectionTwo = ({ title, description, data,subtitle }) => {
  return (
    <section className="content-listing-list">
      <Container>
        <Title title={title} description={description} subtitle={subtitle} />
        {data?.map((list, i) => {
          return (
            <Row key={i}>
              <Col md={6}>
                <h2>{list.title}</h2>
                {list.description?.map((para, count) => {
                  return(
                  <p key={count}>{para}</p>
                )})}
              <div className="list-group-purbis mt-3">
                <div className="line-track" />
                {list.list?.map((card, index) => {
                  return(
                <div className="box" key={index}>
                  <h3>{card.title}</h3>
                  <p>
                    {card.content}
                  </p>
                </div>  
                  )})}
              </div>
              <RequestDemoModal />
              </Col>
              <Col md={6}>
                <LazyLoadImage
                  alt={list.title}
                  src={list.image}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default ContentListSectionTwo;
