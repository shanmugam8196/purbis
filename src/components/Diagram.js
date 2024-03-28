import React from "react";
import { Title } from "./Utils";
import { Container} from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Diagram = ({ title, description, image, paddingTopZero }) => {
  return (
    <section className={paddingTopZero ? "diagram-section pt-0" : "diagram-section" }>
      <Container className="relative">
      <svg
        className="vector-flying-1"
        width={31}
        height={92}
        viewBox="0 0 31 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.5568 1.12005C18.9659 8.73665 -2.5392 29.6133 4.16747 52.1872C4.66376 54.7691 8.11116 69.7944 12.8903 65.4444C17.6725 61.0916 19.8202 51.3593 14.4622 47.7387C13.5109 47.0958 12.2313 46.9238 10.5156 47.55C4.64322 49.6933 1.08107 56.0464 1.49036 62.2843C1.98041 69.7532 6.21128 80.6234 22.5577 91.0049"
          stroke="#434445"
        />
      </svg>
        <Title title={title} description={description} />
        <div className="img-centers">
            <LazyLoadImage alt={title} src={image} />
        </div>
      </Container>
    </section>
  );
};

export default Diagram;
