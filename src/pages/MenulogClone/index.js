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
              Profitable<span>  Menulog Clone</span>
            </>
          }
          description={
            "Our Menulog Clone - A perfect choice for your online ordering and delivering module which comes up with live tracking  "
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/menulog-clone/menulog-banner.png"}
        />
        <LandingSectionThree
          title={
            <>
              A custom-tailored <span>Menulog Clone</span> script
            </>
          }
          description={
            <>

              If you are looking for the best solution to manage online deliveries in your business? Purbis Menulog Clone will help firms to deal with flawless deliveries. Menulog clone script assists you with the finest takeaway solutions to get ahead in development. We put forward a readymade solution to help you in empowering your instant deliveries.

            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Choose our <span>Menulog Clone</span> to make successful online deliveries
            </>
          }
          description={
            "Our customizable Menulog Clone will aid you in developing your online deliveries as per your business necessity"
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
          title={
            <>
              Essential Features of our <span>Menulog Clone</span> Software

            </>
          }
          description={
            "Our Purbis Menulog Clone script will allow you to develop your own Menulog Clone app that offers an all-in-one solution for your business"
          }
          data={ContentListSectionThreeApi}
        />
        <OneClickSection
          title={"Want to start your own on-demand food delivery business?"}
          description={
            "Purbis has highly skilled designers and developers who can personalized Menulog clone scripts to meet your business needs"
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              Reason to Choose Purbis, <span>Menulog clone?</span>
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