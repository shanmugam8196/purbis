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
           Launch Your Delivery Empire with Our <span>Hungerstation Clone</span> 
 
          </>
        }
        description={
          "Build a successful food delivery business with our feature-packed Hungerstation clone script."
        }
        button={"Request Demo"}
        buttonName={"Get a Quote"}
        image={"images/hungerstation-clone/hungerstation-banner.png"}
        /> 
        <LandingSectionThree
          title={
            <>
             Your perfect choice for an instant<span> Hungerstation-like app</span>
            </>
          }
          description={
            <>
            Do you want to extend your business with online ordering and delivery services? When you have this plan, then you can create your own platform with our customizable Hungerstation clone script. Purbis offers a customizable Hungerstation clone script with salient features that help you aggregate various restaurants under one platform. With our feature-packed Hungerstation clone script, you can create a robust ordering and delivery app for enticing customers, restaurant partners, and drivers. 
          
              </>
          }
          data={LandingSectionThreeApi}
      /> 
       <LandingSectionTwo
          title={
            <>
             Key elements of our<span> Hungerstation</span> clone
                    
            </>
          }
          description={
            "Purbis, the Hungerstation clone script brings you the solutions to launch a food delivery service business"
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
        title={
          <>
           What features do we offer for your business?

          </>
        }
        description={
          "We support you in employing our Whitelabel Hungerstation clone that will help you to launch an on-demand delivery service in your country."
        }
        data={ContentListSectionThreeApi}
        />
         <SectionThree
          title={
            <>
             Why choose <span>Purbis?</span>
            </>
          }
          description={
            <>
            Our Purbis developed a white-label Hungerstation clone script that brings comprehensive solutions for your delivery services.

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