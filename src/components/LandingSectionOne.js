import React from "react";

const LandingSectionOne = ({ title, description, data }) => {
  return (
    <section className="business-solution">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {title && <h2 className="mb-4">{title}</h2>}
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

export default LandingSectionOne;
