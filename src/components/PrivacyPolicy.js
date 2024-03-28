import React from 'react'

import PageLayout from './PageLayout'
import { Link } from 'react-router-dom'
import OurCustomerSay from './OurCustomerSay'
import OurClients from './OurClients'

const PrivacyPolicy = () => {
  return (
    <>
      <PageLayout>
        <section className="hero-subsection">
          <div className="container">
            <div className="row align-items-center pt-3">
              <div className="col-md-12 text-center">
                <div className="showcase-image">
                  <h2 className="text-center"><span> Privacy</span> Policy</h2>
                  <Link to="/">
                    <p className="fs-6 text-secondary">Return to Home</p>
                  </Link>


                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="policy" >
          <div className="container relative">

            <div className="row">
              <div className="col-md-12">

                <p>PRIVACY POLICY : This Privacy Policy governs the manner in which Purbis collects, uses, maintains and discloses information collected from users (each, a "User") of the www.purbis.com website ("Site"). This privacy policy applies to the Site and all products and services offered by Purbis.</p>

                <h3>Personal Identification Information</h3>
                <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information, social security number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>

                <h3>Non-personal Identification Information</h3>
                <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>

                <h3>Web Browser Cookies</h3>
                <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>


                <h3>How We Use Collected Information</h3>
                <p>Purbis may collect and use Users personal information for the following purposes:</p>
                <ul>
                  <li>
                    <b>To Improve Customer Service</b>
                    <p>Information you provide helps us respond to your customer service requests and support needs more efficiently.</p>
                  </li>
                  <li>
                    <b>To Personalize User Experience</b>
                    <p>We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</p>
                  </li>
                  <li>
                    <b>To Process Payments</b>
                    <p>We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</p>
                  </li>
                  <li>
                    <b>To Send Periodic Emails</b>
                    <p>We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.</p>
                  </li>
                </ul>

                <h3>How We Protect Your Information</h3>
                <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
                <p>Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected.</p>

                <h3>Sharing Your Personal Information</h3>
                <p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>

                <h3>Changes To This Privacy Policy</h3>
                <p>Purbis has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>

                <h3>Your Acceptance Of These Terms</h3>
                <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>


                <h3>General Data Protection Regulation (GDPR) Compliance</h3>
                <p>General Data Protection Regulation (GDPR) Compliance</p>
                <p>However from time to time, we would like to contact you with details of other [specific products]/ [offers ]/ [services]/ [competitions] we provide. If you consent to us contacting you for this purpose how you like us to contact you:</p>
                <p>Text message, Email, Telephone.</p>
                <h3>Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: Purbis</p>
                <p>www.purbis.com</p>





                <OurCustomerSay />
                <OurClients />

              </div>
            </div>

          </div>
        </section>
      </PageLayout >
    </>
  )
}

export default PrivacyPolicy