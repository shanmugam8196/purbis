import React from 'react'
import PageLayout from './PageLayout'
import { Link } from 'react-router-dom'
import OurCustomerSay from './OurCustomerSay'
import OurClients from './OurClients'

const TermsandConditions = () => {
  return (
    <>
      <PageLayout>
        <section className="hero-subsection">
          <div className="container">
            <div className="row align-items-center pt-3">
              <div className="col-md-12 text-center">
                <div className="showcase-image">
                  <h2 className="text-center"><span> Terms</span> and <span>Conditions</span></h2>
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
                <h3>Acceptance the use of <Link>www.purbis.com</Link> - Terms and Conditions</h3>
                <p>Your access to and use of www.purbis.com is subject exclusively to these Terms and Conditions. You will not use the Website for any purpose that is unlawful or prohibited by these Terms and Conditions. By using the Website you are fully accepting the terms, conditions and disclaimers contained in this notice. If you do not accept these Terms and Conditions you must immediately stop using the Website.</p>

                <h3>Advice</h3>
                <p>The contents of www.purbis.com website do not constitute advice and should not be relied upon in making or refraining from making, any decision.</p>

                <h3>Change of use</h3>
                <p>www.purbis.com reserves the right to:</p>
                <p>change or remove (temporarily or permanently) the Website or any part of it without notice and you confirm that www.purbis.com shall not be liable to you for any such change or removal.</p>
                <p>change these Terms and Conditions at any time, and your continued use of the Website following any changes shall be deemed to be your acceptance of such change.</p>

                <h3>Links to third party websites</h3>
                <p>www.purbis.com Website may include links to third party websites that are controlled and maintained by others. Any link to other websites is not an endorsement of such websites and you acknowledge and agree that we are not responsible for the content or availability of any such sites.</p>

                <h3>Copyright</h3>
                <p>All copyright, trade marks and all other intellectual property rights in the Website and its content (including without limitation the Website design, text, graphics and all software and source codes connected with the Website) are owned by or licensed to www.purbis.com or otherwise used by www.purbis.com as permitted by law.In accessing the Website you agree that you will access the content solely for your personal, non-commercial use.</p>

                <h3>Disclaimers and limitation of liability</h3>
                <p>The Website is provided on an AS IS and AS AVAILABLE basis without any representation or endorsement made and without warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy.To the extent permitted by law, www.purbis.com will not be liable for any indirect or consequential loss or damage whatever (including without limitation loss of business, opportunity, data, profits) arising out of or in connection with the use of the Website.www.purbis.com makes no warranty that the functionality of the Website will be uninterrupted or error free, that defects will be corrected or that the Website or the server that makes it available are free of viruses or anything else which may be harmful or destructive.</p>
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

export default TermsandConditions