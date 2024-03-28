import React from 'react'
import Seo from './seo'
import { Link } from "react-router-dom";
import { PageLayout, HeroSectionLanding, LandingSectionOne, LandingSectionTwo, ContentListSectionTwo, LandingSectionIntegration, SectionThree, Faq, OurCustomerSay, OurClients, } from '../../components'
import { LandingSectionContentApi, IconsCardApi, ContentListApi, LandingSectionIntegrationApi, WhyChooseApiSecond, FaqApi, } from './api';

const index = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSectionLanding
          title={
            <>
              Cost Effective <span> Foodpanda Clone</span> For Your Business
            </>
          }
          description={
            "A cutting-edge food and grocery delivery solution that is designed to outperform your competitors."
          }
          buttonName={"Get a Quote"}
          buttonLink="/"
          image={"images/fooddelivery/resaturantpanelweb-and-mobile.png"}
        />
        <LandingSectionOne
          title={
            <>Online Food and Grocery Delivery Solutions  <span>A Profitable Foodpanda Clone</span>
            </>
          }
          description={
            <>

              FoodPanda is one of the top excellent <Link to="/food-delivery-software">food and grocery ordering delivery platforms</Link> that fulfill the customers demand on time. Same way, our FoodPanda clone script has many inbuilt features suitable for both food and grocery delivery business. We offer a complete end to end solution to take your multi services business to the next level.
            </>
          }
          data={LandingSectionContentApi}

        />
        <LandingSectionTwo
          title={
            <>
              Supports Various <span>Food and Grocery</span> Business Models
            </>
          }
          description={
            "Purbis, foodpanda clone work with different vertical businesses that can help you to leverage a wide range of services."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionTwo

          title={<>Key Features of <span>Foodpanda Clone</span></>}
          description={"All-in-One Solution"}
          subtitle={'All-in-One Solution'}
          data={ContentListApi}
        />
        {/* <MobileAppScroll
          title={"Customer mobile apps like Talabat clone"}
          data={AppScreenApi}
          white={true}
        />    */}
        <SectionThree
          title={
            <>
              Why should you opt Purbis - <span>foodpanda clone script?</span>
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
  )
}

export default index