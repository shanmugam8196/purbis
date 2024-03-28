import React from 'react'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import Seo from './seo'
import { ContentListSectionThreeApi, FaqApi, IconsCardApi, LandingSectionIntegrationApi, LandingSectionThreeApi, WhyChooseApiSecond } from './api'
import HeroSubSection from '../../components/HeroSubSection'
import LandingSectionThree from '../../components/LandingSectionThree'


const PizzaDeliverySoftware = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              A simplified<span> Pizza Delivery Software</span> for takeaway business
            </>
          }
          description={
            "We make it simple from managing the online orders to delivering to your customers quickly."
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/pizza/banner.png"}
        />
        <LandingSectionThree
          title={
            <>
              Profitable Online <span>Pizza Ordering</span> System with Delivery Software
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
              Highlighted things about our <span>pizza delivery</span> system
            </>
          }
          description={
            "Our pizza delivery software provides brimming features that will be lucrative for your business. "
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          title={
            <>
              Key Features of Online <span>Pizza Ordering</span> and Delivery System


            </>
          }
          description={
            "Purbis, pizza delivery app helps restaurants by providing a perfect dashboard to boost your sales drastically. "
          }
          data={ContentListSectionThreeApi}
        />
        <OneClickSection
          title={"Are you searching for readymade pizza delivery software to deal with your online deliveries?"}
          description={
            "Quick launch + 100% source code + Native app"
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              How will you benefit from our online <span>pizza ordering</span> system?
            </>
          }
          description={
            <>
              Purbis, a pizza delivery system will be paramount for your business with its optimized efficacy.

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

export default PizzaDeliverySoftware