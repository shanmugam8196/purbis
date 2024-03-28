import React from 'react'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
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
              Instant <span>Delivery.com</span> Clone App
            </>
          }
          description={
            "A powerful on-demand delivery platform for your businesses will help you run the business with reliable ordering deliveries."
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/delivery-app/delivery-banner.png"}
        />
        <LandingSectionThree
          title={
            <>
              Utilize our Readymade <span>delivery clone</span> to elevate your business services
            </>
          }
          description={
            <>
              If you prefer a comfort zone to deal with your business, use our on-demand delivery platform to manage your entire business process. We make it simple for you to get our perfect on-demand delivery software to manage local favorite restaurants, liquor, grocery stores, and laundromats from order placements to delivery. Our Delivery.com clone can simplify online ordering and delivery that can undoubtedly meet your customer demands. We help you to expand your business and also develop boundless deliveries.
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Transform your business with our <span>delivery.com</span> clone

            </>
          }
          description={
            "Our delivery clone script assists you in creating your delivery app which can help to provide multi-delivery services to your customers."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          title={
            <>
              Momentous features in our <span>delivery.com</span> clone

            </>
          }
          description={
            "Our delivery clone has crucial features that will help your business to get the best delivery solutions for managing online orders."
          }
          data={ContentListSectionThreeApi}
        />
        <SectionThree

          title={
            <>
              Why prefer <span>Purbis</span> delivery software?
            </>
          }
          description={
            <>
              Purbis, delivery clone app gives excellent support for your business to meet its future requirements and manage delivery services

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