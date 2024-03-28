import React from 'react'
import { ContentListSectionTwo, Faq, LandingSectionIntegration, LandingSectionTwo, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import Seo from './seo'
import HeroSubSection from '../../components/HeroSubSection'
import LandingSectionThree from '../../components/LandingSectionThree'
import { ContentListApi, FaqApi, IconsCardApi, LandingSectionIntegrationApi, LandingSectionThreeApi, WhyChooseApi } from './api'

const DoorDashClone = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              Cost-Effective <span>Doordash Clone</span> Script

            </>
          }
          description={
            "Start your own food delivery business by capturing our Doordash clone script."
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/hungerstation-clone/hungerstation-banner.png"}
        />

        <LandingSectionThree
          title={
            <>
              Begin New Journey with our <span>Doordash clone</span>
            </>
          }
          description={
            <>
              Want to launch your own food delivery marketplace business in your country? Purbis have a ready-to-use Doordash clone app that helps those who are interested to begin their own delivery services business. Undoubtedly, Purbis provides complete solutions from beginning to end for your business and also its features can help you to drive more revenue for your business.  Our food delivery script like doordash can deal with any business like startups, medium, or entrepreneurs.
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Successful <span>Doordash Clone</span> for your business
            </>
          }
          description={
            "Using our Dunzo Clone, you can enhance your business operations and automate the food, grocery, fruits, vegetables, meat, fish, and gifts delivery services"
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <ContentListSectionTwo

          title={<>Important characteristics of our <span>Doordash Clone</span> </>}
          description={""}
          data={ContentListApi}
        />

        <SectionThree
          title={
            <>
              Why utilize our<span>Doordash clone?</span>

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

export default DoorDashClone