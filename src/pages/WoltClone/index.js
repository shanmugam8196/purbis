import React from 'react'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, SectionThree, } from '../../components'
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
              Whitelabel <span>Wolt Clone</span> Software
            </>
          }
          description={
            "Introducing ready-to-use wolt clone software, grab it now! it will help you to announce the success of your delivery services business in a short period of time"
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/wolt-clone/wolt-banner.png"}
        />
        <LandingSectionThree
          title={
            <>
              Best Way to Start Your Business With <span>Wolt Clone</span>
            </>
          }
          description={
            <>
              Wolt is a popular food delivery platform that is used by millions of people around the world. If you’re interested to commence your own on-demand delivery business that covers restaurants, retailers, and couriers business? Then, capture the Purbis - wolt clone script, which is the perfect solution for your business and also we are one of the leading trusted partners in providing remarkable online food, grocery, and courier delivery platforms for startups, and entrepreneurs like you to launch your own on-demand business.
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              <span>Wolt Clone</span> Covered Everything For You

            </>
          }
          description={
            "Purbis, wolt clone is a complete turnkey solution that includes everything you need to get your business up and running."
          }
          data={IconsCardApi}
          landingPage={true}
        />

        <ContentListSectionThree
          title={
            <>
              Find Some Essential Characteristics of<span> Wolt Clone</span>

            </>
          }
          description={
            "Purbys helps you establish your brand in the fast-growing on-demand delivery industry with wolt clone software."
          }
          data={ContentListSectionThreeApi}
        />
        <OneClickSection
          title={"Get Started with Purbis, Wolt Clone Script"}
          description={
            "Contact us today, and we will be glad to assist you with a demo of our Wolt clone script and answer any questions you may have."
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              What makes Purbis' <span>Wolt Clone</span> stand out?
            </>
          }
          description={
            <>
              Launch your own successful platform and make a mark in the booming on-demand delivery industry now.

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
