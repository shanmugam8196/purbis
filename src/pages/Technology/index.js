import React from 'react'
import Seo from './seo'
import { OurClients, OurCustomerSay, PageLayout, SectionThree } from '../../components'
import { IntegrationCardApi, WhyChooseApi } from './api'
import IntegrationCard from '../../components/IntegrationCard'
import TechnologyBanner from '../../components/TechnologyBanner'

const Technology = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <TechnologyBanner
          title={
            <>
              <span>Technologies</span> and Frameworks
            </>
          }
          image={"images/technology.png"}
          description={
            "We can build a marketplace that resonates with your customers, drives growth, and creates lasting success"
          }
        />

        <IntegrationCard
          title={
            <>
              Tech Fusion for <span>Dynamic</span> Marketplaces Solutions

            </>

          }
          description={
            "We at Purbis Solutions, take pride in offering a diverse range of on-demand marketplace software products that are tailored to different industries and service providers. We employ cutting-edge technologies and versions to achieve top-notch performance and reliability. Our tech stacks are carefully curated, combining robust frameworks, programming languages, tools, and third-party integrations to deliver exceptional user experiences"
          }
          data={IntegrationCardApi}
          landingPage={true}
        />

        <SectionThree
          title={<>Step into the <span>future of marketplace</span> with customzied solution</>}
          description={
            "At Purbis, we take pride in our well-defined process for delivering tailored on-demand marketplace solutions that cater to the unique requirements of various industries"
          }
          data={WhyChooseApi}
          darkMode={true}
        />
        <OurCustomerSay />
        <OurClients />
      </PageLayout>
    </>
  )
}

export default Technology