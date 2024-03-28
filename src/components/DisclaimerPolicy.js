import React from 'react'

import PageLayout from './PageLayout'
import HeroSubSection from './HeroSubSection'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OurCustomerSay from './OurCustomerSay'
import OurClients from './OurClients'

const DisclaimerPolicy = () => {
  return (
    <>
      <PageLayout>
        <section className="hero-subsection">
          <div className="container">
            <div className="row align-items-center pt-3">
              <div className="col-md-12 text-center">
                <div className="showcase-image">
                  <h2 className="text-center"><span> Disclaimer</span> Policy </h2>
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
                <ul>

                  <li><p>Your use of this site is at your sole risk. Neither purbis, its subsidiaries affiliates nor any of their respective employees, agents, merchants, third-party content providers or licensors, or any of their officers, directors, employees or agents, warrant that use of the site will be uninterrupted or error free.</p></li>
                  <li><p>There is no warranty for: (I) results that may be obtained from use of this site, or (ii) the accuracy, completeness, reliability or content of any information (including, but not limited to, product descriptions), service, products or vouchers provided through this site.</p></li>
                  <li><p>The site and all content, statements (as defined below) and other information contained on the site, and products and services accessible or available through the site are made accessible or available on an “as is” and “as available” basis.</p></li>
                  <li><p>Purbis hereby disclaims any and all representations, warranties and conditions, whether express or implied, as to the operation of the site or the content, statements or other information contained on the site, or the products or services accessible or available through the site, including, but not limited to, those of title noninfringement, merchantability, and fitness for a particular purpose.</p></li>

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

export default DisclaimerPolicy