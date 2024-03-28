import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TitleOne } from "./Utils";
import { BlogApi } from "./Data/BlogApi";
import { BlogCard } from "./Card";

const Blog = () => {
  return (
    <>
      <section className="our-blogs">
        <Container>
            <TitleOne title={"Our Blog"} buttonName={"View All"} />
            <Row>
              {BlogApi?.map((card, index) => {
                return (
                  <Col md={4} key={index}>
                      <BlogCard
                        title={card.title}
                        category={card.category}
                        date={card.date}
                        url={card.url}
                        image={card.img}
                      />
                  </Col>
                );
              })}
            </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
