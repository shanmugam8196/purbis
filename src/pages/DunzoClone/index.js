import React from 'react'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import Seo from './seo'
import HeroSubSection from '../../components/HeroSubSection'
import LandingSectionThree from '../../components/LandingSectionThree'
import { ContentListSectionThreeApi, FaqApi, IconsCardApi, LandingSectionIntegrationApi, LandingSectionThreeApi, WhyChooseApiSecond } from './api'
const index = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              Ready-Made<span> Dunzo Clone</span> Software
            </>
          }
          description={
            "Kick-start your multi-service business that comprises food, groceries, medicines, and so on"
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/dunzo-clone/dunzo-banner.png"}
        />
        <LandingSectionThree
          title={
            <>
              Get our white-label <span> Dunzo clone</span> for your multi-delivery business
            </>
          }
          description={
            <>
              Are you in search of software that can help you dominate the on-demand delivery market? Hoping to achieve rapid growth in a short period of time? Then, you've arrived at the correct destination. Here at Purbis, we provide a sturdy Dunzo clone software solution that can overcome any obstacles that may arise. Once you adopt this solution, you can manage the entire business process and operations at your fingertip and success will be your only companion!
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Strengthen your delivery with our <span>Dunzo clone</span> app

            </>
          }
          description={
            "Using our Dunzo Clone, you can enhance your business operations and automate the food, grocery, fruits, vegetables, meat, fish, and gifts delivery services"
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          title={
            <>
              Key features of <span> Dunzo Clone</span> Script

            </>
          }
          description={
            "Our surprising features will surely amaze you to handle the business services and help you to increase the customer range."
          }
          data={ContentListSectionThreeApi}
        />
        <OneClickSection
          title={"Want to start your delivery business like Dunzo?"}
          description={
            "Inquiry now to get customizable dunzo-like app that developed with the most advanced features and attributes with the latest tech stacks"
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />

        <SectionThree
          title={
            <>
              What are the advantages of our <span>Dunzo clone?</span>
            </>
          }
          description={
            <>
              Our Dunzo clone app has the best features that bring extraordinary solutions to multi-delivery services.

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