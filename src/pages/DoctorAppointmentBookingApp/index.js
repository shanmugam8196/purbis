import React from 'react'
import Seo from './seo'
import HeroSubSection from '../../components/HeroSubSection'
import { ContentListSectionThree, Faq, LandingSectionIntegration, LandingSectionTwo, OneClickSection, OurClients, OurCustomerSay, PageLayout, SectionThree, SectionTwo } from '../../components'
import LandingSectionThree from '../../components/LandingSectionThree'
import { ContentListSectionThreeApi, FaqApi, LandingSectionIntegrationApi, LandingSectionThreeApi, PowerFullApi, WhyChooseApiSecond } from './api'
import { IconsCardApi } from '../PizzaDeliverySoftware/api'

const index = () => {
  return (
    <>
      <PageLayout>
        <Seo />
        <HeroSubSection
          title={
            <>
              Online <span>Doctor Appointment Booking</span> System
            </>
          }
          description={
            "A comprehensive doctor appointment scheduling app that is designed to automate the operations of your clinics and enhance the patient experience."
          }
          button={"Request Demo"}
          buttonName={"Get a Quote"}
          image={"images/doctor-app/doctorbanner.png"}
        />
        <LandingSectionThree
          title={
            <>
              Easy automated online <span>medical appointment</span> system
            </>
          }
          description={
            <>
              Scheduling appointments with a healthcare professional can be a cumbersome task. It often entails enduring long phone queues and encountering busy signals while attempting to secure an appointment with the desired doctor. Furthermore, there's no surety that the preferred date and time slot will be available. That's precisely where the Purbis online medical appointment booking system proves invaluable. Through this web and mobile app-based booking system, patients gain the convenience of self-scheduling appointments at their own leisure and selecting their preferred time slots with precision.
            </>
          }
          data={LandingSectionThreeApi}
        />
        <LandingSectionTwo
          title={
            <>
              Empower your<span> healthcare services</span> with technology
            </>
          }
          description={
            "We will help you to automate your healthcare services by opting for our appointment booking software that can maintain your appointments with readymade solutions "
          }
          data={IconsCardApi}
          landingPage={true}
        />
        <SectionTwo data={PowerFullApi} />
        <OneClickSection
          title={"Automate Your Healthcare Service with Purbis! "}
          description={
            "Discover our cutting-edge online doctor appointment booking software with telehealth system for streamlined patient care"
          }
          buttonName={"Enquire now"}
          buttonLink="/"
        />
        <ContentListSectionThree
          title={
            <>
              Incredible features of our <span>Online Doctor appointment booking software</span>


            </>
          }
          description={
            "You can easily manage appointments and consultations by developing an online system for your medical services. "
          }
          data={ContentListSectionThreeApi}
        />
        <SectionThree
          title={
            <>
              Why do you prefer Purbis for setting up your <span>doctor booking software?</span>
            </>
          }
          description={
            <>
              Purbis, doctor appointment booking has distinctive features for your medical services that coil all the required processes

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