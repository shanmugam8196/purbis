import React from "react";
import Seo from "./seo";
import {
  PageLayout,
  OurCustomerSay,
  OurClients,
} from "../../components";
import ContactSummery from "../../components/ContactSummery";

const ContactUs = () => {
  return (
    <>
      <PageLayout consultForm={true}>
        <Seo />
        <section className="hero-subsection">
          <div className="container">
            <div className="row align-items-center pt-5 pb-5">
              <div className="col-md-12 text-center">
                <div className="showcase-image">
                  <h1 className="text-center"> Contact <span>us</span> now!</h1>
                  <p className="fs-5 mt-4 text-secondary">We're here to answer any questions you may have.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSummery />
        <OurCustomerSay />
        <OurClients />

      </PageLayout>
    </>
  );
};
export default ContactUs;
