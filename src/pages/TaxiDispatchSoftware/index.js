import React from "react";
import Seo from "./seo";
import {
  PageLayout,
  HeroSectionLanding,
  LandingSectionOne,
  LandingSectionTwo,
  OneClickSection,
  PortfolioTabSection,
  LandingSectionIntegration,
  OurCustomerSay,
  OurClients,
  SectionThree,
  Faq,
} from "../../components";
import {
  IconsCardApi,
  LandingSectionContentApi,
  PortfolioTabApi,
  LandingSectionIntegrationApi,
  FaqApi,
  WhyChooseApi,
} from "./api";

const TaxiDispatchSoftware = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              Online <span>Taxi Booking</span> and Dispatch Software
            </>
          }
          description={
            "Control all aspects of the taxi business operations effectively with our application for taxi clients, drivers, dispatches."
          }
          buttonName={"Get a Quote"}
          image={"images/taxi/taxi-banner.png"}
        />
        <LandingSectionOne
          title={
            <>
              Efficient <span>taxi dispatch</span> system for your business
            </>
          }
          description={
            "Are you tired of handling your taxi fleet manually? Do you want to offer your passengers a hassle-free booking and dispatch experience? Our taxi booking and dispatch system is the perfect solution for your transportation business!Our automated ride hailing system helps your business to notify the traffic zones, and best-optimized routes, and also alert new taxi, bike bookings. Get our best solutions to manage your transportation services with an excellent cab management system. Modernize your taxi business using our online taxi dispatching software that will reduce your costs and save more time."
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={
            <>
              Opt <span>taxi booking</span> dispatch software from Purbis
            </>
          }
          description={
            "Looking for an efficient taxi dispatch system to streamline your transportation services? We are a leading taxi booking, ride hailing and shuttle service app development company that helps transform your business into a digital platform."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <PortfolioTabSection
          title={"Stakeholders and features of taxi booking software"}
          description={
            "Our taxi booking and dispatch system offers a range of features to enhance your business operations and customer experience. Here are some of the key features"
          }
          data={PortfolioTabApi}
        />
        <OneClickSection
          title={"Dedicated Solutions for your Transportation services business"}
          description={"Get a complete transportation management software from us that automates you cab, taxi, bike booking and ride hailing services"}
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              Reasons to choose the our <span>taxi dispatch software</span>
            </>
          }
          description={
            "Purbis have decades of experience in providing comprehensive solutions to fuel, fleet management and with help of our services revolutionize your fuel operations easily."
          }
          data={WhyChooseApi}
        />

        <LandingSectionIntegration data={LandingSectionIntegrationApi} />
        <OurCustomerSay />
        <OurClients />

        <Faq
          title="Frequently asked questions"
          data={FaqApi}
          paddingBottom={true}
        />
      </PageLayout>
    </>
  );
};
export default TaxiDispatchSoftware;
