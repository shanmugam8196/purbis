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
  ContentListSectionTwo,
} from "../../components";
import {
  IconsCardApi,
  LandingSectionContentApi,
  LandingSectionIntegrationApi,
  FaqApi,
  WhyChooseApi,
  ContentListApi,
  WhyChooseApiSecond
} from "./api";
import { Link } from "react-router-dom";

const ZomatoClone = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              <span>Zomato Clone</span> - A Perfect Food Delivery Script
            </>
          }
          description={
            "Experience the power of multi-vendor online food ordering and delivery with our Zomato clone script."
          }
          buttonName={"Get a Quote"}
          buttonLink="/"
          image={"images/fooddelivery/resaturantpanelweb-and-mobile.png"}
        />
        <LandingSectionOne
          title={
            <>
              Simplify Multi-Vendor Food Delivery with <span>Zomato Clone</span>
            </>
          }
          description={
            <>
              Purbis have ready-made multi vendor restaurant aggregator and <Link to="/food-delivery-software">food delivery platform</Link> and Zomato clone offers complete web app, iOS and Android applications to quickly launch business with following deliverables customers panel, admin master panel, driver app, and wth vendor partner application. Our zomato clone is meticulously designed to help entrepreneurs effortlessly launch their own online marketplace, connecting customers with a wide range of restaurants and cuisines.
            </>
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={
            <>
              Get Your Complete <span>Zomato Clone Script</span>
            </>
          }
          description={
            "With the help of our white-labeled parcel delivery solution, you can revolutionize your delivery operation to make it smarter, easier to manage, and more convenient for your customers."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionTwo
          title={<>Key Features of Our <span>Zomato Clone</span></>}
          description={"All-in-One Solution"}
          data={ContentListApi}
        />

        <SectionThree
          title={
            <>
              Additional Key Features of Our <span>Zomato Clone </span>
            </>
          }
          description={false}
          data={WhyChooseApi}
        />
        <OneClickSection
          title={"Join the food delivery revolution with Purbis!"}
          description={
            "Embrace our cutting-edge restaurant delivery software for growth and success"
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
              Why Choose Purbis - <span>Zomoto Clone Script?</span>
            </>
          }
          description={false}
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
export default ZomatoClone;
