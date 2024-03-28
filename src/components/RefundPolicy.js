import React from 'react'

import PageLayout from './PageLayout'
import { Link } from 'react-router-dom'
import OurCustomerSay from './OurCustomerSay'
import OurClients from './OurClients'

const RefundPolicy = () => {
  return (
    <>
      <PageLayout>
        <section className="hero-subsection">
          <div className="container">
            <div className="row align-items-center pt-3">
              <div className="col-md-12 text-center">
                <div className="showcase-image">
                  <h2 className="text-center"><span> Refund</span> Policy</h2>
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
                <h3>Refund Policy</h3>
                <p>As we provide software that is downloadable in nature, we follow a strict refund policy. Kindly read through our Refund Policy for understanding your part as a customer who purchases item from the site. Refund is NOT provided by PURBIS. Once when the products are sent and the order is accomplished. In few exceptional circumstances the refund is possible depending upon the nature of the product. Please check product demo before purchasing the script, We will deliver the exact product as shown in the demo.</p>

                <h3>Exceptional Cases when a customer is eligible for Refund are:</h3>
                <ul>
                  <li>
                    <p>Normally, due to the nature of the product, there will be no refund once when the product is sold.</p></li>
                  <li><p>Refund will not eligible in case of host side errors or any technical error with the customer server.</p></li>
                  <li><p>Every additional customization for the product will be considered as new project. There is no refund for the customization projects.</p></li>
                  <li><p>Please note that we do not bear any responsibility and therefore we do not satisfy any refund/ return/exchange requests based on incompatibility of our products with some third-party software (plug-ins, add-ons, modules, search engines, scripts, extensions etc) other than those which are specified as compatible in a description available on the preview page of each product. We don’t guarantee that our products are fully compatible with any third-party programs and we do not provide support for third-party applications.</p></li>
                </ul>
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

export default RefundPolicy