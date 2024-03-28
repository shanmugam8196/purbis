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
  ContentListApi
} from "./api";

const CourierParcelDeliverySoftware = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              Online Parcel{" "}
              <span>Pickup and Delivery</span> Software
            </>
          }
          description={
            "Improve your logistics business operation efficiently and profitability with our customizable and user-friendly system."
          }
          buttonName={"Get a Quote"}
          image={"images/courier/courier-banner.png"}
        />
        <LandingSectionOne
          title={
            <>
              Your Trusted <span>Courier Delivery Software</span>
            </>
          }
          description={
            "If you're in the courier business, you know the importance of having a reliable and efficient system for managing pickups and deliveries. That's where Purbis comes in with ready-made courier pickup and delivery management software. We offer complete solutions for managing and automating your logistics business.Purbis, a parcel delivery management system offers power-packed features to deliver the couriers of your customers successfully and securely. With our unique features, you can attract your customers easily by improvising effective delivery services. It will help boost your business growth and get more profits than you expected. Empower your business by expanding your distributions and being flexible to your customer demands. "
          }
          data={LandingSectionContentApi}
        />
        <LandingSectionTwo
          title={
            <>
              Purbis helps you <span>grow your delivery</span> business
            </>
          }
          description={
            "With the help of our white-labeled parcel delivery solution, you can revolutionize your delivery operation to make it smarter, easier to manage, and more convenient for your customers."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSection
          title={<>Key Features of <span>Courier Software</span></>}
          description={"All-in-One Solution"}
          data={ContentListApi}
        />
        <OneClickSection
          title={"Empowering Your Courier Services with Cutting-Edge Software"}
          description={
            "Simplify, Automate, and Accelerate Your Courier Business."
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              Benefits of having a <span>courier delivery</span> management
              software
            </>
          }
          description={
            "All delivery-related components are managed by courier software, which enables you to streamline procedures and boost communications. The advantages of courier delivery management software are listed below."
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
export default CourierParcelDeliverySoftware;
