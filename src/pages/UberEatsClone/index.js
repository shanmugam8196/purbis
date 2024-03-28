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


const UberEatsClone = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              A Whitelabel <span>UberEats Clone</span>
            </>
          }
          description={
            "Launch your own food ordering and delivery business with our custom UberEats clone script. "
          }
          buttonName={"Get a Quote"}
          buttonLink="/"
          image={"images/fooddelivery/resaturantpanelweb-and-mobile.png"}
        />
        <LandingSectionOne
          title={
            <>
              Revolutionize Your Food Delivery Business with <span>UberEats Clone</span>
            </>
          }
          description={
            <>
              Purbis offers a readymade fully functional UberEats clone for your online food ordering and delivery business.Our UberEats clone script is highly customizable, so you can easily launch your own multiple restaurant businesses. We offer UberEats clone script supporting on web and mobile platforms (Android & iOS) with complete technical support for instant delivery service.
            </>
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={
            <>
              <span>UberEats Clone</span> - A One-Stop-Shop Solutions For Your Business
            </>
          }
          description={false}
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSection
          title={<>Key Feaures of Our <span>UberEats Clone</span> Script</>}
          description={"All-in-One Solutions "}
          data={ContentListApi}
        />
        <OneClickSection
          title={"Expand Your Food Delivery Marketplace with Purbis!"}
          description={
            "Discover the power of our on-demand multi-vendor food delivery solution"
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              What Makes Different from Others to Opt Purbis <span>UberEats Clone?</span>
            </>
          }
          description={"By choosing the Ubereats Clone Script from Purbis, you gain access to a reliable, customizable, and feature-packed solution that empowers you to launch your own successful food delivery platform."}
          data={WhyChooseApi}
        />
        {/* <MobileAppScroll
          title={"Customer mobile apps like Talabat clone"}
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
export default UberEatsClone;
