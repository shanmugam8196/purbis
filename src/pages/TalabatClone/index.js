import React from "react";
import Seo from "./seo";
import {
  PageLayout,
  HeroSectionLanding,
  LandingSectionTwo,
  OneClickSection,
  LandingSectionIntegration,
  OurCustomerSay,
  OurClients,
  SectionThree,
  Faq,
  ContentListSectionTwo,
} from "../../components";
import {
  IconsCardApi,
  LandingSectionContentApi,
  LandingSectionIntegrationApi,
  FaqApi,
  ContentListApi,
  WhyChooseApiSecond
} from "./api";
import LandingSectionThree from "../../components/LandingSectionThree";

const TalabatClone = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              Top-Notch <span>Talabat Clone</span> Script
            </>
          }
          description={
            "Launch your on-demand food delivery business with a custom-built app like Talabat clone, loaded with highly advanced features."
          }
          buttonName={"Get a Quote"}
          buttonLink="/"
          image={"images/fooddelivery/resaturantpanelweb-and-mobile.png"}
        />
        <LandingSectionThree
          title={<> A Customizable <span>Talabat Clone</span> Platform
          </>}
          description={
            <>
              The on-demand food delivery marketplace has completely transformed several business verticals all around the world. Purbis offers a talabat clone to manage the complete multi restaurant online food ordering and delivery system. Purbis has a ready made Talabat clone script in which your customers can easily place an order from their favorite restaurant and also can deliver to customers doorstep easily. We have listed the latest features in our talabat clone app that makes it very simple and faster for customers and restaurant owners.
            </>
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={false}
          description={false}
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionTwo
          title={<>Important Features of our <span>Talabat Clone</span> Script</>}
          description={"We have inbuilt the most advanced trending features to kick start your multi vendor food ordering delivery business instantly. Contact us to view the Talabat clone demo."}
          data={ContentListApi}
        />
        <OneClickSection
          title={"Start Your Multi Service Company with Purbis!"}
          description={
            "Get a customizable talabat clone to provide food and grocery ordering delivery service business now"
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />

        {/* <MobileAppScroll
          title={"Customer mobile apps like Talabat clone"}
          data={AppScreenApi}
          white={true}
        /> */}
        <SectionThree
          title={
            <>
              Why should you buy our <span>Talabat clone</span> for your business?
            </>
          }
          description={"We focus on providing an innovative solution that makes you different from the rest. Contact us to get a customized talabat clone app. Increase your sales profit and take your business to the next level with our food ordering and delivery script. "}
          data={WhyChooseApiSecond}
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
export default TalabatClone;
