import React from 'react'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import Seo from './seo'
import HeroSubSection from '../../components/HeroSubSection'
import { ContentListSectionThreeApi, FaqApi, IconsCardApi, LandingSectionIntegrationApi, LandingSectionThreeApi, WhyChooseApiSecond } from './api'
import LandingSectionThree from '../../components/LandingSectionThree'


const index = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              Customizable <span> Postmates Clone</span> Solution
            </>
          }
          description={
            "Start a multi-service delivery business that entails restaurants, retailers, grocers, and more with our White Label solution"
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/postmates-clone/banner1.png"}
        />
        <LandingSectionThree
          title={
            <>
              Your Go-To Solution for <span>Postmates Clone</span> Script
            </>
          }
          description={
            <>
              Looking to launch your own on-demand multi-service delivery app like Postmates? Then grab Purbis, postmates clone software solution. We have a ready-made Postmates clone script that permits startups and entrepreneurs like you to establish a successful on-demand multi-delivery service that includes food/meals, grocery, alcohol, and more. With our feature-rich and customizable solution, you can seamlessly connect customers, delivery providers, and restaurant partners in a single platform.
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Get a Convenient <span>Postmates clone</span> from us

            </>
          }
          description={
            "Our Postmates Clone gives you personalized and readymade solutions to manage deliveries in your business"
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          title={
            <>
              Discover Some Important Features of <span> Postmates Clone</span>

            </>
          }
          description={
            "Purbis, Postmates clone gives streamlined solutions for your business to interact with customers and in managing your online deliveries"
          }
          data={ContentListSectionThreeApi}
        />
        <OneClickSection
          title={"Transform Your Delivery Business with Purbis!"}
          description={
            "The ultimate postmates clone script! Inquiry now for the demo and also get a free consultation"
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              Discover the Advantages of Choosing Our <span>Postmate Clone</span>
            </>
          }
          description={
            <>
              Purbis, Postmates Clone brings a lot of advanced features for your business to find the best delivery solutions

            </>
          }
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