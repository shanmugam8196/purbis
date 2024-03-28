import React from 'react'
import { Blog, ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
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
         <span>iFood Clone</span>
          </>
        }
        description={
          "Get a powerful and fully functional iFood Clone software for your successful delivery business "
        }
        button={"Request Demo"}
        buttonName={"Get a Quote"}
        image={"images/ifood-clone/ifood-banner.png"}
        />  
        <LandingSectionThree
          title={
            <>
             On-demand <span>iFood clone</span> script to enhance your delivery service
            </>
          }
          description={
            <>
            Are you searching for the best delivery platform like the iFood application to empower your business? If yes, try out our iFood Clone script that provides comprehensive solutions for your delivery business. Purbis, iFood Clone have pixel-perfect designs and user-friendly interfaces that can help you to provide the smoothie experience for your customers, restaurants, and drivers. 
              </>
          }
          data={LandingSectionThreeApi}
      />
      <LandingSectionTwo
          title={
            <>
             Kickstart your best online deliveries with our <span> iFood Clone</span>    
            </>
          }
          description={
            "Our iFood Clone is designed with rich inbuilt features to help you to handle online orders and deliveries"
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionThree
        title={
          <>
         Important characteristics of our <span>iFood Clone</span>

          </>
        }
        description={
          "Purbis, iFood Clone will serve outstanding features for your business to maintain ordering systems and helps in providing speedy deliveries"
        }
        data={ContentListSectionThreeApi}
        />
         <OneClickSection
          title={"Discover the Power of Purbis, iFood Clone Script App to Begin New Journey"}
          description={
            "Take your business to the next level with our iFood clone application. Contact us for a customized iFood clone script."
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
         title={
            <>
            What are the reasons for selecting our <span>iFood Clone</span> app?
            </>
          }
          description={
            <>
           Purbis, iFood Clone script offers the best convenient solutions for managing your orders and deliveries online. 
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