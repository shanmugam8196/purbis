import React from "react";
import Seo from "./seo"
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { OurClients, OurCustomerSay, PageLayout } from "../../components";
import { FooterApi } from "../../components/Data/FooterApi";
import { Icon } from "@iconify/react";

const Thankyou = () => {
  return (
    <>
      <PageLayout>

        <section className="thankyou">
          <Container>
            <div className="text-center mt-5">
              <LazyLoadImage alt={"Thankyou"} height="255" src="/images/thankyou.png" width="400" />
              {/* <h1 className="mb-0">Thank You !</h1> */}
              <p className="text-secondary mt-4">We have received your information successfully.<br />We will get back to you shortly.</p>
              {/* <Link to="/" className="btn btn-primary fw-bold btn-lg">Back to Home</Link> */}
              <Link to="/">
                <button className="btn btn-primary fw-bold w-20 m-3 mb-5">
                  Return to home
                </button>
              </Link>
            </div>
            <div className="row">

              <div className='col-md-4'>
                <div className='content text-center'>

                  <div className='content-details '>
                    <Icon icon="entypo:email" color="red" className="icon " />
                    <p className="text-secondary mt-2">Write an email</p>
                    <Link to={FooterApi.emaillink} target="_blank" className="whatsapp">
                      <button className="btn btn-outline-primary fw-bold w-20">
                        purbis@technoduce.com
                      </button></Link>

                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='content text-center'>
                  <Icon icon="streamline:interface-favorite-give-heart-reward-social-rating-media-heart-hand" color="red" className="icon " />
                  <p className="text-secondary mt-2">Connect with us</p>
                  {/* <div className="d-flex"> */}
                  <div className="text-center">
                    <Link to={FooterApi.facebook} className="social-icon">
                      <Icon icon="ps:facebook-alt" color="#1877f2" />
                    </Link>
                    <Link to={FooterApi.twitter} className="social-icon ">
                      <Icon icon="skill-icons:twitter" />
                    </Link>
                    <Link to={FooterApi.instagram} className="social-icon   ">
                      <Icon icon="skill-icons:instagram" />
                    </Link>
                    <Link to={FooterApi.linkedin} className="social-icon  ">
                      <Icon icon="skill-icons:linkedin" />
                    </Link>
                  </div>
                  {/* </div> */}

                </div>

              </div>

              <div className='col-md-4'>
                <div className='content text-center'>
                  <div className='content-details '>
                    <Icon icon="bi:whatsapp" color="red" className="icon " />
                    <p className="text-secondary mt-2">Instant chat reach</p>
                    <Link to={FooterApi.whatsapplink} target="_blank" className="whatsapp">

                      <button className="btn btn-outline-primary fw-bold w-20">
                        +91 96293 70003
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <OurCustomerSay />
        <OurClients />
      </PageLayout>
    </>
  );
};
export default Thankyou;
