import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FooterApi, FooterNavApi } from "./Data/FooterApi";
import { ProductNavApi, BusinessModelsNav, HeaderNavApiTwo } from "./Data/NavApi";
import ColorIcons from "../helpers/ColorIcons";
import { Icon } from '@iconify/react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });

  }, []);


  useEffect(() => {
    getDayOfWeek(); // Call the function once when the component mounts

    const intervalId = setInterval(() => {
      getDayOfWeek(); // Call the function to update the day every 24 hours
    }, 1000 * 60 * 60 * 24); // Update every 24 hours

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const [day, setDay] = useState('');

  const currentYear = new Date().getFullYear();
  const getDayOfWeek = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayIndex = today.getDay();
    const dayName = daysOfWeek[dayIndex];
    setDay(dayName);
  };


  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Back to Top */}
      <div
        className={
          showTopBtn ? "progress-wrap active-progress" : "progress-wrap"
        }
        onClick={goToTop}
      >
        <Icon icon="ph:caret-up" />
      </div>

      {/* Footer */}
      <footer className="site_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <LazyLoadImage
                  alt={"Purbis"}
                  height="45"
                  src={"images/logo1.png"}
                  width="168"
                />
                <p className="mt-3">{FooterApi.description}</p>
              </div>
              <h5 className="text-white pt-3 ps-2">Follow us</h5>
              <div className="d-flex social-icons pt-1">

                <Link to={FooterApi.facebook} >

                  <i className="fa-brands fa-square-facebook" />
                </Link>
                <Link to={FooterApi.twitter} >

                  <i className="fa-brands fa-square-twitter" />
                </Link>
                <Link to={FooterApi.instagram} >
                  {/* <img src="images/instagram.png" className="w-50" /> */}
                  <i className="fa-brands fa-square-instagram"></i>
                </Link>
                <Link to={FooterApi.linkedin}>
                  <i className="fa-brands fa-linkedin" />
                </Link>
              </div>

            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="text-white">Products</h3>
                  <ul>
                    {ProductNavApi?.map((link, i) => {
                      return (
                        <li key={i}>
                          <Link to={link.url}>{link.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-md-6 business-model">
                  <h3 className="text-white">Business Models</h3>
                  <ul>
                    {BusinessModelsNav?.map((link, i) => {
                      return (
                        <li key={i}>
                          <Link to={link.url}>{link.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-md-3">
                  <h3 className="text-light" >Quick Links</h3>
                  <ul>
                    {HeaderNavApiTwo?.map((link, i) => {
                      return (
                        <li key={i}>
                          <Link to={link.url}>{link.title}</Link>
                        </li>
                      );
                    })}
                    <li><Link to={"/request-for-demo"}>Request a Demo</Link></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          {/* <div className="d-flex social-icons">
            <div className="d-flex">
              <Link to={FooterApi.facebook} className="facebook">
                <i className="fa-brands fa-facebook" />
              </Link>
              <Link to={FooterApi.twitter} className="twitter">
                <i className="fa-brands fa-twitter" />
              </Link>
              <Link to={FooterApi.instagram} className="instagram">
                <i className="fa-brands fa-instagram" />
              </Link>
            </div>
          </div> */}
          <div className="footer_policy">
            <ul>
              {FooterNavApi?.map((link, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={link.url}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="happy_footer">Have a great {day} !  <img src={ColorIcons.coffee} /> </p>
          </div>
          <div className="mt-1">
            <p className="mb-0">{FooterApi.copy} {currentYear} {FooterApi.copyrights}</p>
          </div>
        </div>

      </footer>
      {/* <FooterPolicy /> */}


      {/* Footer */}
    </>
  );
};

export default Footer;
