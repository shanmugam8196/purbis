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
  SectionThree,
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
  WhyChooseApi
} from "./api";

const FuelOrdering = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              Online <span>Fuel Ordering</span> and Delivery System
            </>
          }
          description={
            "Want to simplify your fuel business? then, get your advanced online ordering and delivery software to transform your fuel management operations easily."
          }
          buttonName={"Get a Quote"}
          image={"images/fuel/fuel-banner.png"}
        />
        <LandingSectionOne
          title={
            <>
              Empower fuel business with our <span>fuel delivery software</span>
            </>
          }
          description={
            "Looking for a cost-effective online fuel ordering and delivery system for your energy sector?  Then, Purbis is the best choice to handle the entire business process to provide a better user experience. Whether you're running a small business or a large enterprise scale, our fuel delivery software helps you to automate your operations. With this fuel ordering system, you can ensure quick and reliable delivery with increasing productivity and customer satisfaction. "
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={
            <>
              Utilize Online <span>Fuel Ordering</span> and Delivery Management System
            </>
          }
          description={
            "Purbis, online fuel ordering and delivery software is a valuable platform to save your time, money and improve business efficiency."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <SectionTwo data={PowerFullApi} />
        <OneClickSection
          title={"Efficient Fuel Logistics: Optimize Operations with Innovative Software"}
          description={"Praesent feugiat vulputate semper metus pulvinar."}
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <PortfolioTabSection
          title={
            "Stakeholders with Features of Fuel dispatch software "
          }
          description={"Purbis, an online fuel ordering and delivery system comes with the following four stakeholders along with listed some important features of our platform below.   "}
          data={PortfolioTabApi}
        />
        <SectionThree
          title={<>Why choose Purbis, <span>fuel ordering</span> and delivery software?</>}
          description={
            "Purbis have decades of experience in providing comprehensive solutions to fuel, fleet management and with help of our services revolutionize your fuel operations easily."
          }
          data={WhyChooseApi}
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
export default FuelOrdering;
