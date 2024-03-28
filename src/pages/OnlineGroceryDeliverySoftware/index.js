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
  IndustrySection,
  OurCustomerSay,
  OurClients,
  Faq,
  Diagram
} from "../../components";
import {
  IconsCardApi,
  PowerFullApi,
  LandingSectionContentApi,
  PortfolioTabApi,
  LandingSectionIntegrationApi,
  FaqApi,
} from "./api";

import {
  BusinessSolution,
} from "../Home/api";


const OnlineGroceryDeliverySoftware = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              {" "}
              <span>Online Grocery</span> Ordering and Delivery Software{" "}
            </>
          }
          description={
            "Power up your grocery business with our easy-to-use readymade online shopping, ordering and delivery platform"
          }
          buttonName={"Get a Quote"}
          image={"images/grocery-banner.png"}
        />
        <LandingSectionOne
          title={
            <>
              Turnkey <span>grocery ordering</span> delivery software
            </>
          }
          description={
            "Purbis have a readymade online grocery ordering, shopping, and delivery software, our systems are designed to simplify and optimize the process of all sizes of retails, hyperlocal, supermarket, and grocery store businesses. We offer a user-friendly interface and secure payment processing applications that provides a hassle-free online shopping experience for customers. We bring you convenient features by customized solutions to manage your grocery ordering and delivery services."
          }
          data={LandingSectionContentApi}
        />
        <Diagram
          title={<>Start Your <span>Online Grocery Shopping</span> Software Business With Purbis </>}
          description={"One Time Cost + 100% Source Code + will delivery in 5days + RTL"}
          image="images/grocery/diagram.jpg"
          paddingTopZero={true}
        />

        <LandingSectionTwo
          title={
            <>
              An intelligent <span>eCommerce shopping software</span> for
              grocery business{" "}
            </>
          }
          description={
            "Save time and increase efficiency with our turnkey online grocery ordering and delivery software. Get what you need from us based on your business needs."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <SectionTwo data={PowerFullApi} />
        <OneClickSection
          title={"Get customizable hyperlocal grocery software now"}
          description={"We help you to automate your retail, supermarket, grocery store business digitally with our customizable marketplace solutions"}
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <PortfolioTabSection
          title={
            "Important features are available in the Purbis, grocery ordering system "
          }
          data={PortfolioTabApi}
        />
        <LandingSectionIntegration data={LandingSectionIntegrationApi} />
        <IndustrySection
          title={"Our Business Solutions"}
          description={
            "Purbis has a wide range of business solutions to help on-demand service providers get into the digitalized world with its advanced technology."
          }
          data={BusinessSolution}
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
export default OnlineGroceryDeliverySoftware;
