import React from 'react'
import HeroSubSection from '../../components/HeroSubSection'
import Seo from './seo'
import { ContentListSectionThree, ContentListSectionTwo, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, PortfolioTabSection, SectionThree, Title } from '../../components'
import LandingSectionThree from '../../components/LandingSectionThree'
import { AppScreenApi, ContentListApi, ContentListSectionThreeApi, FaqApi, IconsCardApi, LandingSectionIntegrationApi, LandingSectionThreeApi, PortfolioTabApi, WhyChooseApi, WhyChooseApiSecond } from './api'
import MobileCloneSlider from '../../components/MobileCloneSlider'
const index = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              Your One-Stop Solutions <span> Gojek Clone</span>
            </>
          }
          description={
            "Get into a profitable business by opting for our white-label Gojek clone now, which offers multiple on-demand services."
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/gojek-clone/gojek-banner2.png"}
        />
        <LandingSectionThree
          title={
            <>
              Fully Automated <span>Gojek Clone</span> Script
            </>
          }
          description={
            <>
              Want to be a leader in the on-demand multi-service marketplace business like Gojek? Grab our state-of-the-art Gojek clone script today to begin your multi-service business. Purbis have the best cutting-edge Gojek-like solutions, you can offer multiple services to your customers under one platform. Our Gojek Clone helps you deliver on-demand services like ride-hailing, food, grocery, package, medicine, beauty and wellness, professional cleaning, event booking, car wash, logistics, courier services, etc.,
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Benefits of Embracing <span>Gojek Clone</span> Script

            </>
          }
          description={
            "Purbis, a Gojek app clone have an unwavering commitment to your business in assisting and establishing a reputable brand."
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionTwo

          title={<>All Services at a <span>Single Platform</span> </>}
          description={"Purbis, Gojek Clone is your one-stop-shop solution to commence your on-demand multiple-service business. We provide a top-notch multi-service application for your business whether you're a startup or running a business."}
          data={ContentListApi}
        />
        <PortfolioTabSection
          title={
            "Important features are available in the Purbis, grocery ordering system "
          }
          data={PortfolioTabApi}
        />

        <OneClickSection
          title={"Want to Start Your Multi Service Business?"}
          description={
            "Get Our All-in-One On-Demand Gojek Clone Marketplace Solution Now."
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <SectionThree
          title={
            <>
              What Makes <span>Purbis</span> Different from Others?
            </>
          }
          description={false}
          data={WhyChooseApiSecond}
        />
        <MobileCloneSlider
          title={"Customer mobile apps like Gojek clone"}
          data={AppScreenApi}
          white={true}
        />
        <Title
          title={
            <>
              Get all Stakeholders of our <span>Gojek Clone</span> Script

            </>
          }
          description={
            "Purbis, Gojek Clone Script is a comprehensive multi-service on-demand platform that has a wide range of features and functionalities, it helps to launch your own on-demand multi-service business within a week."
          }
        />
        <ContentListSectionThree

          data={ContentListSectionThreeApi}
        />
        <SectionThree
          title={
            <>
              Revenue Model of On-demand <span>Multi Services</span> Platforms like Gojek
            </>
          }
          description={false}
          data={WhyChooseApi}
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
