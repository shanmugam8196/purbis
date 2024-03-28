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
              Turkey <span>Just Eat Clone</span> Software
            </>
          }
          description={
            "Build your food delivery business empire with our customizable Justeat Clone script"
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/justeat-clone/justeat-banner.png"}
        />
        <LandingSectionThree
          title={
            <>
              Everything accessible in our <span>Justeat clone</span>
            </>
          }
          description={
            <>
              Are you interested in connecting foodies and eateries on a single platform? Then, try out the ready-to-go JustEat Clone script that is designed and developed by highly qualified developers to suit all business types. Our Just Eat clone gives you a customizable and white-labeled solution for your business. With this, you can create your own identity in the food delivery marketplace industry
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Reason to choose <span>Just Eat clone</span> from Purbis
            </>
          }
          description={
            "Our Just Eat Clone helps you to manipulate the whole delivery operations like ordering, payment, tracking, and delivering items"
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          title={
            <>
              Main aspects of our <span>Just Eat Clone</span>

            </>
          }
          description={
            "Our Purbis Just Eat Clone offers the end to end support to assist with the functionalities of your deliveries"
          }
          data={ContentListSectionThreeApi}
        />
        <SectionThree
          title={
            <>
              Why choose <span>Just Eat Clone </span>software from us?
            </>
          }
          description={
            <>
              Purbis, Just Eat Clone provides inbuilt features to manipulate and control the overall operations in the delivery services
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