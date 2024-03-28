import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const NotFound = () => {
  return (
    <>
      <section className="notfound">
        <Container>
              <div className="text-center">
                <LazyLoadImage alt={"Looks Like You're Lost"} height="355" src="/images/error.jpg" width="500" />
                <h1 className="mb-0">oops, sorry we can't find that page!</h1>
                <p className="text-secondary my-4">The page you were trying to reach on a website couldn't be found!</p>
                <Link to="/" className="btn btn-primary fw-bold btn-lg">Back to Home</Link>
              </div>
        </Container>
      </section>
    </>
  );
};
export default NotFound;
