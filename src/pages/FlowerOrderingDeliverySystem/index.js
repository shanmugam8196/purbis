import React from 'react'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import Seo from './seo'
import HeroSubSection from '../../components/HeroSubSection'
import LandingSectionThree from '../../components/LandingSectionThree'
import { ContentListSectionThreeApi, FaqApi, IconsCardApi, LandingSectionIntegrationApi, LandingSectionThreeApi, WhyChooseApiSecond } from './api'
const FlowerOrderingDeliverySystem = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              Online <span>Flower Ordering</span> and Delivery System
            </>
          }
          description={
            "Our florist software is the easiest and most convenient way for managing your floral shop business."
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/flower/flowerbanner.png"}
        />
        <LandingSectionThree
          title={
            <>
              Robust Online <span>Floral Shop</span> Software Solutions
            </>
          }
          description={
            <>
              Nowadays, people prefer online ordering and delivery services to purchase any required product. So, most businesses plan to implement online order deliveries to fulfill customer needs. If you were running a flower shop, then provide the best online shopping experience to your customers and deliver the customer’s desired location. It gives you to manage the online ordering and delivery tasks smoothly by automating your floral business
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Get better ways to grow your <span>flower shop business</span>

            </>
          }
          description={
            "Our top-notch florist software will help you grow your business and boost online sales."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          title={
            <>
              Outstanding features of our <span>Flower delivery</span> software

            </>
          }
          description={
            "With Purbis flower ordering and delivery solutions, you will get effective delivery software to simplify your flower deliveries"
          }
          data={ContentListSectionThreeApi}
        />
        <OneClickSection
          title={"Transform Your Floral Business Today with Purbis!"}
          description={"Explore our feature-rich online flower ordering system and delivery management software for seamless growth"}
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              Why is our <span>florist software</span> suitable for your business?
            </>
          }
          description={"Purbis offers an efficient flower ordering and delivery system that will help you to deliver flowers to your customer’s doorsteps"}
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

export default FlowerOrderingDeliverySystem