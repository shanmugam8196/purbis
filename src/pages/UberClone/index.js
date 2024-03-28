import React from 'react'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import Seo from './seo'
import HeroSubSection from '../../components/HeroSubSection'
import LandingSectionThree from '../../components/LandingSectionThree'
import { ContentListSectionThreeApi, FaqApi, IconsCardApi, LandingSectionIntegrationApi, LandingSectionThreeApi } from './api'
import { WhyChooseApiSecond } from '../DeliverooClone/api'


const UberClone = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              A Perfect <span>Uber Clone</span> Script for Transports and Delivery Services
            </>
          }
          description={
            "Get Uber clone software from us to make your taxi, food, and freight business and to be a conqueror in the on-demand market."
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/ifood-clone/ifood-banner.png"}
        />
        <LandingSectionThree
          title={
            <>
              Customizable <span>Uber</span> Like App Development
            </>
          }
          description={
            <>
              Do you have an idea about starting an Uber-like business? Purbis offers you the Uber clone software and helps create your own marketplace application like Uber. It contains various services like taxi booking and ride-hailing, restaurant and grocery store aggregating, courier delivery, liquor and medicine delivery, handyman services, and car services. We provide the perfect solution for managing on-demand multi-services in your business.   </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Grow your business with our <span>Uber clone</span>

            </>
          }
          description={
            "Purbis, the Uber clone delivers eminent solutions for your business to handle online delivery services."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          title={
            <>
              Highlighted features of our <span>Uber clone</span> application

            </>
          }
          description={
            "We build the best online ordering and delivery system for your business with advanced features"
          }
          data={ContentListSectionThreeApi}
        />
        <SectionThree
          title={
            <>
              Why are we dissimilar from others?
            </>
          }
          description={"Purbis permits you to create your own app and lets you include your business name for that app utilizing our white-label solutions"}
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

export default UberClone