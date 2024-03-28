import React from "react";
import { Title } from "./Utils";

const LandingSectionThree = ({ title, description, data }) => {
  return (
    <section className="business-solution">
      <div className="container">
        <div className="row">
          <Title title={title} />
          <div className="col-md-6">
            <p className="line-height-1-9 text-secondary">{description}</p>
          </div>
          <div className="col-md-6">
            {data?.map((para, i) => {
              return (
                <p className="line-height-1-9 text-secondary" key={i}>
                  {para.content}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSectionThree;
