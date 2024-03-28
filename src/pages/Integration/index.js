import React from 'react'
import Seo from './seo'
import { Faq, OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import { FaqApi, IntegrationCardApi, WhyChooseApi } from './api'
import IntegrationCard from '../../components/IntegrationCard'
import TechnologyBanner from '../../components/TechnologyBanner'

const Integration = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <TechnologyBanner
          title={
            <>
              Third-Party <span>Integration</span>
            </>
          }
          description={
            "We help you integrate a wide range of third-party tools into your app, delivering a powerful and user-friendly experience"
          }
          image={"images/intergration.png"}
        />

        <IntegrationCard
          title={
            <>
              Elevate Your Platforms with <span>Purbis</span> Third-Party Integrations

            </>
          }
          description={
            "In today's fast-paced on-demand marketplace, staying ahead of the competition requires smart solutions that enhance user experiences and streamline operations. Purbis is a leading provider of on-demand marketplace platforms and offers a powerful advantage through its expertly crafted third-party integration services. These integrations empower businesses to unlock the full potential of their platforms, delivering exceptional functionalities, increased efficiency, and unmatched user satisfaction"
          }
          data={IntegrationCardApi}

        />
        {/* <LandingSectionTwo
          title={
            <>
          Benefits of   <span>third-party integration</span>  
            </>
          }
          description={
            "We help you integrate a wide range of third-party tools into your app, delivering a powerful and user-friendly experience"
          }
          data={IconsCardApi}
          landingPage={true}
        />
         */}
        <SectionThree
          title={<>Essential <span>Third-Party</span> Tools Provided by <span>Purbis</span> Solutions</>}
          description={
            "We integrate any of the third-party tools and service providers according to your business needs"
          }
          data={WhyChooseApi}
          darkMode={true}
        />
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

export default Integration