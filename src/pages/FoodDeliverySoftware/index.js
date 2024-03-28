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
  OurCustomerSay,
  OurClients,
  Faq,
  SectionThree,
  ContentListSectionThree
} from "../../components";
import {
  IconsCardApi,
  PowerFullApi,
  LandingSectionContentApi,
  PortfolioTabApi,
  LandingSectionIntegrationApi,
  FaqApi,
  WhyChooseApi,
  WhyChooseApiSecond,
  ContentListSectionThreeApi,
} from "./api";



const FoodDeliverySoftware = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              <span>Online Food Ordering</span> and Delivery Software
            </>
          }
          description={
            "Launch your own online food ordering and delivery service business with our readymade application for your single or multiple restaurant aggregate businesses."
          }
          buttonName={"Get a Quote"}
          image={"images/food-banner.png"}
        />
        <LandingSectionOne
          title={
            <>
              Get Ahead of the Competition with Our <span>Food Delivery Software</span>
            </>
          }
          description={
            "Are you seeking reliable online food ordering and delivery software for your single-restaurant or multi-restaurant food delivery business? Purbis has got you covered all! Our ready-made food ordering software is designed to help you manage your online orders and deliveries with ease. We offer customizable and white-label solutions for your business to get maximum productivity to increase sales with satisfied customers."
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={
            <>
              Our tailor-made <span>food delivery software</span> suits various business models
            </>
          }
          description={
            "Looking at a single restaurant with a multi-branch business or plan to integrate multiple restaurants under one roof? Then, Get customized online food delivery systems now. "
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <SectionTwo data={PowerFullApi} />
        <SectionThree
          title={
            <>
              Most Important Features to Begin Your <span>Food Delivery</span> Business
            </>
          }
          description={"Purbis is an attractive piece of online food ordering system that is tailored to your business needs. You can get all the features and functionalities from Purbis to run smoothly and efficiently.  "}
          data={WhyChooseApi}
          darkMode={true}
        />
        <PortfolioTabSection
          title={

            "Key Features of Each Modules "
          }
          description={"Our restaurant delivery system is a valuable tool for entrepreneurs wishing to start a meal delivery business in a specific market or demographic. It has all the essential features that help to grow your business. "}
          data={PortfolioTabApi}

        />

        <OneClickSection
          title={"Stay Ahead of the Competition in the Food Industry with Purbis"}
          description={"We provide your complete online food ordering and delivery platform solutions for your single or multi-vendor restaurant business"}
          buttonName={"Let’s discuss this now "}
        />


        <ContentListSectionThree
          data={ContentListSectionThreeApi}
        />



        {/* <MobileAppScroll
          title={"Customer mobile apps like Talabat clone"}
          data={AppScreenApi}
        /> */}

        <SectionThree
          title={
            <>
              Why do you opt Purbis <span>food delivery software?</span>
            </>
          }
          data={WhyChooseApiSecond}
        />



        <LandingSectionIntegration data={LandingSectionIntegrationApi} />
        {/* <IndustrySection
          title={"Our Business Solutions"}
          description={
            "Purbis has a wide range of business solutions to help on-demand service providers get into the digitalized world with its advanced technology."
          }
          data={BusinessSolutionApi}
          landingPage={true}
        />  */}
        <OurCustomerSay />
        <OurClients />

        <Faq
          title="Frequently asked questions"
          data={FaqApi}
        />


      </PageLayout>
    </>
  );
};
export default FoodDeliverySoftware;
