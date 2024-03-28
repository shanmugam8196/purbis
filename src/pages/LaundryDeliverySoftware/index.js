import React from "react";
import Seo from "./seo";
import {
  PageLayout,
  HeroSectionLanding,
  LandingSectionOne,
  LandingSectionTwo,
  SectionTwo,
  OneClickSection,
  PortfolioTabSection,
  LandingSectionIntegration,
  SectionOne,
  OurCustomerSay,
  OurClients,
  Faq,
} from "../../components";
import {
  IconsCardApi,
  PowerFullApi,
  LandingSectionContentApi,
  PortfolioTabApi,
  LandingSectionIntegrationApi,
  BusinessSolutionApi,
  FaqApi,
} from "./api";

const LaundryDeliverySoftware = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              <span>Laundry Pickup</span> and Delivery Software
            </>
          }
          description={
            "Streamline your laundry, dry cleaning business with our book, schedule and track delivery, and calculate fees online."
          }
          buttonName={"Get a Quote"}
          image={"images/laundry/landry-banner.png"}
        />
        <LandingSectionOne
          title={
            <>
              <span>Proactive laundry</span> pickup and delivery software
            </>
          }
          description={
            "Laundry pickup and delivery, dry cleaning services have become increasingly popular in recent years, and to manage such services efficiently, businesses require advanced technology solutions. That's where the laundry pickup and delivery management system comes in. It provides a comprehensive solution for managing the entire laundry process from booking appointments to delivery. We give convenient features and allow you to deliver your laundry service from anywhere to anywhere. Grow your business with our automated workflow laundry software that assists to handle your online laundry pickup and delivery services."
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={
            <>
              Suits all types of <span>e-laundry services business</span>
            </>
          }
          description={
            "Use technology and creativity to run any type of laundry service without the cumbersome stacks of paper by using automated laundry software."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <SectionTwo data={PowerFullApi} />
        <OneClickSection
          title={
            "Simplify Your Laundry Business with Our Pickup and Delivery Software"
          }
          description={
            "Whitelabel Solutions + 100% Source Code + Free Technical Support "
          }
          buttonName={"Enquire now"}
        />
        <PortfolioTabSection
          title={"Features of laundry pickup, management and delivery software"}
          description={
            "Get customizable laundry management software to transform your laundry and dry cleaning business with Purbis. Here are the most reliable features to streamline your business operation."
          }
          data={PortfolioTabApi}
        />
        <LandingSectionIntegration data={LandingSectionIntegrationApi} />
        <SectionOne
          title={"Our Business Solutions"}
          description={
            "Purbis has a wide range of business solutions to help on-demand service providers get into the digitalized world with its advanced technology."
          }
          data={BusinessSolutionApi}
          landingPage={true}
        />
        {/* <MobileAppScroll
          title={"Customer mobile apps like Talabat clone"}
          data={AppScreenApi}
        /> */}
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
export default LaundryDeliverySoftware;
