import React from "react";
import Seo from "./seo";
import {
  PageLayout,
  HeroSection,
  IndustrySection,
  SectionTwo,
  SectionThree,
  OurCustomerSay,
  OurClients,
  LandingSectionIntegration,
  OneClickSection,
} from "../../components";
import {
  BusinessSolution,
  PowerFullApi,
  WhyChooseApi,
  // ToolsCardApi,
  HeroSlideApi,
  LandingSectionIntegrationApi,
} from "./api";
import SuccessSection from "../../components/SuccessSection";

const Home = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSection
          title={
            <>
              Transform Your Business with Viable <span> Digital
                Solutions </span>
            </>
          }
          description={
            "We have perfect online ordering, booking, and scheduling applications with delivery management software to automate your business operations easily."
          }
          button={"Get Started"}
          data={HeroSlideApi}
        />
        <SuccessSection />
        <IndustrySection
          title={<>Our Business <span>Solutions</span> </>}
          description={
            "Purbis has a wide range of business solutions to help on-demand service providers get into the digitalized world with its advanced technology."
          }
          data={BusinessSolution}
        />
        <SectionTwo data={PowerFullApi} />
        <OneClickSection
          title={"Go with Purbis!"}
          description={
            "Our experts will help your business to meet technology, get a free consultation now"
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={<>Why <span>Choose</span> Us?</>}
          description={
            "We have a suite of revolutionizing technologies to create unparalleled future mobile experiences for your business"
          }
          data={WhyChooseApi}
        />
        <LandingSectionIntegration data={LandingSectionIntegrationApi} />
        {/* <SectionFour data={ToolsCardApi} /> */}
        <OurCustomerSay />
        <OurClients />

      </PageLayout>
    </>
  );
};
export default Home;
