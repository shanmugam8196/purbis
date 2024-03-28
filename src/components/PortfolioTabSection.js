import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import { PortfolioTab } from "./Tab";
import { Title } from "./Utils";


const PortfolioTabSection = ({ title, description, data }) => {
  return (
    <>
      <section className="portfolio">
        <Container>
          <Title title={title} description={description} />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <Tabs
              defaultActiveKey="1"
              id="uncontrolled-tab-example"
              className="mb-5 justify-content-center d-inline-flex w-auto"
              variant="pills"
            >
              {data?.map((tab, i) => {
                return (
                  <Tab eventKey={tab.id} title={tab.name} key={i}>
                    <PortfolioTab
                      title={tab.title}
                      description={tab.description}
                      image={tab.image}
                      data={tab.data}
                    />
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PortfolioTabSection;
