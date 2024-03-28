import React from 'react'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import Seo from './seo'
import { ContentListSectionThreeApi, FaqApi, LandingSectionIntegrationApi, LandingSectionThreeApi, WhyChooseApiSecond } from './api'
import { IconsCardApi } from '../ZomatoClone/api'
import HeroSubSection from '../../components/HeroSubSection'
import LandingSectionThree from '../../components/LandingSectionThree'

const DeliverooClone = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              A simplified<span> Deliveroo Clone</span> for takeaway business
            </>
          }
          description={
            "We make it simple from managing the online orders to delivering to your customers quickly."
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/deliveroo-clone/deliveroo-banner2.png"}
        />
        <LandingSectionThree
          title={
            <>
              A Smart <span>Deliveroo Clone</span> Script For Food and Grocery Deliveries
            </>
          }
          description={
            <>
              In recent times, the on-demand food business has emerged, and its growth has been unbridled, and also transforming the restaurant chain in a dramatic fashion. As a result, restaurants are starting to move towards digital solutions, and entrepreneurs, startups, etc. are also interested in starting on-demand businesses.
              Are you searching for the best food and grocery delivery app script solution like deliveroo?Purbis, deliveroo clone is the right choice for the takeaway business to manage your food, grocery orders, and delivery business.
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              The perfect <span>Deliveroo clone</span> script for your business

            </>
          }
          description={
            "With the help of our white-labeled parcel delivery solution, you can revolutionize your delivery operation to make it smarter, easier to manage, and more convenient for your customers."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          data={ContentListSectionThreeApi}
        />

        <OneClickSection
          title={"Want to launch your own Deliveroo like platform?"}
          description={
            "Get your perfect customizable multi vendor food delivery app solutions from us."
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              Why Choose <span>Deliveroo Clone</span> App From Us?
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

export default DeliverooClone