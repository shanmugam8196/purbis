import React from "react";
import { useState, useEffect } from "react";

function NumberCounter({ value, description, delay }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount(count + 1);
      }
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [count, value, delay]);
  return (
    <div className="col-md-3">
      <h4>{count}+ </h4>
      <p>{description}</p>
    </div>
  );
}
const SuccessSection = () => {
  return (
    <>
      <section className="success">
        <div className="container">
          <div className="text-center mb-5">
            <div className="w-75 d-inline-block">
              <p className="text-secondary"></p>
              <h2>
                {" "}
                <span>Key Facts & Stats</span>
              </h2>

              <h2> Greater Resources Drive to Success</h2>
            </div>
          </div>

          <div className="row d-flex text-center">
            <NumberCounter
              value={12}
              description="Years of Experience"
              delay={100}
            />
            <NumberCounter
              value={70}
              description="Professional Crew"
              delay={12}
            />
            <NumberCounter
              value={499}
              description="Successful Launch"
              delay={2}
            />
            <NumberCounter
              value={150}
              description="Supported Countries"
              delay={8}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessSection;
