import React from 'react'

import PageLayout from './PageLayout'
import HeroSubSection from './HeroSubSection'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OurCustomerSay from './OurCustomerSay'
import OurClients from './OurClients'

const DeliveryandShippingPolicy = () => {
  return (
    <>
      <PageLayout>
        <section className="hero-subsection">
          <div className="container">
            <div className="row align-items-center pt-3">
              <div className="col-md-12 text-center">
                <div className="showcase-image">
                  <h2 className="text-center"><span> Delivery & Shipping</span> Policy </h2>
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
                <h3>Please read these delivery & shipping policy carefully before purchasing purbis products or services.</h3>
                <p>By using this site (www.purbis.com) you accept these terms and conditions of use. If you do not agree to these terms and conditions of use, please do not purchase any Purbis products or services. Additional terms and conditions of use, available at www.purbis.com, apply to the use of Purbis's website generally.</p>
                <p>Purbis reserves the right, at its discretion, to change, modify, add or remove portions of these terms and conditions at any time. Please check these terms and conditions periodically for changes. Your continued use of this site following the posting of changes to these terms and conditions will mean you accept those changes.</p>

                <h3>Return of software</h3>
                <ul>

                  <p>www.purbis.com offers Demo for products (not for services) so customers have adequate opportunity to assess the value of products prior to purchase. Therefore, Purbis does not accept returns on its products purchased:</p>
                  <li><p>Directly from www.purbis.com once they have been downloaded from our website; or</p></li>
                  <li><p>Indirectly through Purbis business partners.</p></li>
                </ul>

                <h3>Replacement of Corrupted or Defective Software</h3>
                <p>Purbis will replace software downloaded from www.purbis.com only if such software is defective or corrupted. Please contact Customer Service in the event of defective or corrupted software. You must contact Customer Service within 30 business days after receiving or downloading such software in order for purbis to replace such software.</p>

                <h3>Bundled Software</h3>
                <p>Purbis does not accept returns on products obtained as part of a bundle with other computer services or equipment, or distributed by another company as part of a software compilation.</p>

                <h3>Services</h3>
                <p>Purbis does not accept returns on its services (including without limitation customer support contracts, professional services, and product customizations) that are sold to customers under contract.</p>

                <h3>License</h3>
                <p>For every download of the product, a license will be provided. This license will be valid only for a single domain. User has to download the product each time to obtain a new license.</p>

                <h3>Online Demo</h3>
                <p>Online Demo is available for the products offered by Purbis however we do not guarantee demo for all products.</p>
                <p>General Terms and Conditions applicable to Use of a Web Site.</p>

                <h3>Delivery Terms</h3>
                <p>We provide software that is downloadable in nature which involves no shipping. For other services, we do not provide any guarantee for the time of product delivery since it may vary from one product/service to another.</p>
                <p>To obtain further information, please contact Customer Service</p>

                <OurCustomerSay />
                <OurClients />

              </div>
            </div>

          </div>
        </section>
      </PageLayout>
    </>
  )
}

export default DeliveryandShippingPolicy