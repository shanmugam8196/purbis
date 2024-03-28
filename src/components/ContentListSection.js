import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Title } from "./Utils";
import { Container, Row, Col } from "react-bootstrap";

const ContentListSection = ({ title, description, data }) => {
  return (
    <section className="content-listing-list">
      <Container>
        <Title title={title} description={description} />
        {data?.map((list, i) => {
          return (
            <Row key={i}>
              <Col md={6}>
                <h2>{list.title}</h2>
                {list.description?.map((para, count) => {return(
                  <p>{para}</p>
                )})}
                <ul className="ul_style">{list?.list?.map( (li, count) => <li>{li}</li> )}</ul>
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

export default ContentListSection;
