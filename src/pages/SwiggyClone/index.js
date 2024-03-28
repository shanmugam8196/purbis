import React from "react";
import Seo from "./seo";
import {
  PageLayout,
  HeroSectionLanding,
  LandingSectionOne,
  LandingSectionTwo,
  OneClickSection,
  LandingSectionIntegration,
  OurCustomerSay,
  OurClients,
  SectionThree,
  Faq,
  ContentListSection,
} from "../../components";
import {
  IconsCardApi,
  LandingSectionContentApi,
  LandingSectionIntegrationApi,
  FaqApi,
  WhyChooseApi,
  ContentListApi,
} from "./api";

const SwiggyClone = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              Whitelabel <span>Swiggy Clone</span> Script
            </>
          }
          description={
            "Looking for something similar to the Swiggy like app? Then get customized swiggy clone script for your business."
          }
          buttonName={"Get a Quote"}
          image={"images/fooddelivery/resaturantpanelweb-and-mobile.png"}
        />
        <LandingSectionOne
          title={
            <>
              Empower your Food Delivery Business with our <span>Swigy Clone</span>
            </>
          }
          description={
            <>
              If you are looking for a Swiggy clone script to start a food, grocery ordering and delivery business. Purbis offers end-to-end solutions for your ordering and delivery business with ready-made applications. We provide a convenient way for your customers to order their favorite food and grocery items online, pay with various payment methods, real-time tracking options, Promo codes and much more.
            </>
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={
            <>
              Profitable <span>Swiggy Clone</span> For Food and Grocery Delivery Business
            </>
          }
          description={
            "Purbis, Swiggy clone script is a ready-made solution, so it comes with all the features and functionality that you need to run a successful food delivery business."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSection
          title={<>Key Features of <span>Swiggy Clone</span> </>}
          description={"All-in-One Solution"}
          data={ContentListApi}
        />
        <OneClickSection
          title={"Revolutionize Your Food Business Today! "}
          description={
            "Explore our feature-rich on-demand multi-vendor food delivery app now"
          }
          buttonName={"Enquire now"}
        />
        <SectionThree
          title={
            <>
              Why Choose Purbis - <span>Swiggy Clone?</span>
            </>
          }
          description={false}
          data={WhyChooseApi}
        />
        {/* 
        <MobileAppScroll
          title={<> Customer mobile apps like <span>Swiggy clone</span> </>}
          data={AppScreenApi}
          white={true}
        /> */}

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
export default SwiggyClone;
