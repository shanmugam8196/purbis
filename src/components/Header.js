import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HeaderNavApi } from "./Data/NavApi";
import { Icon } from "@iconify/react";
import RequestDemoModal from "./RequestDemoModal";
import { FooterApi } from "./Data/FooterApi";
import ColorIcons from "../helpers/ColorIcons";
import { Button } from "react-bootstrap";

const Header = () => {
  const [small, setSmall] = useState(false);
  const [responsive, setResponsive] = useState(false);

  const MobileToggle = () =>{
    setResponsive(!responsive);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 50)
      );
    }

    const nav = document.querySelector(".site_header");
    const scrollUp = "top-up";
    let lastScroll = 800;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      lastScroll = currentScroll;
    });


  }, []);


  return (
    <>

 <header className="responsive-header">
  <div className="container">
    <div className="logo">
      <Link to="/">
        <LazyLoadImage
          alt={"Purbis"}
          height="45"
          src={"images/logo.png"}
          width="168"
        />
      </Link>
    </div>
    <div className="responsive-nav">
      <button className="btn menu-click" onClick={MobileToggle}>
        <i className={responsive ? "fa-solid fa-xmark" : "fa-solid fa-bars" }></i>
      </button>
    </div>
  </div>
</header>


      {/* header */}
      <header className={`site_header ${small ? "sticky-head" : ""}  ${responsive ? "sticky-mobile-shown" : ""} `}>
        {/* sticky head */}
        <div className="container sticky reset">
          <div className="d-flex social-icon pb-2">
            <Link to={FooterApi.whatsapplink} target="_blank" className="whatsapp">
              <img src={ColorIcons.whatsapp} />
              <p className="d-inline ps-2">+91 96293 70003</p>
            </Link>
            <Link to={FooterApi.emaillink} target="_blank" className="twitter">
              <img src={ColorIcons.mail} />
              <p className="d-inline ps-2">sales@technoduce.com</p>
            </Link>
          </div>

        </div>
        {/* sticky head */}
        <div className="container">
          {/*logo  */}
          <div className="logo">
            <Link to="/">
              <LazyLoadImage
                alt={"Purbis"}
                height="45"
                src={"images/logo.png"}
                width="168"
              />
            </Link>
          </div>
          <ul className="navigation">
            {HeaderNavApi?.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    to={link.url}
                    className={link.child && "menu_has_child"}
                  >
                    {link.title}
                  </Link>
                  {link.child && (
                    <ul>
                      {link.child?.map((sub, i) => {
                        return (
                          <li key={i}>
                            {" "}
                            <Link to={sub.url}>
                              {sub.icon && <span className="menu-icon-circle"><Icon icon={sub.icon} /></span>}
                              <span className="sub">{sub.title}</span>
                              <span className="sub-nav fs-6">{sub.sub}</span>
                            </Link>{" "}

                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
      <Link to={"/request-for-demo"} className="btn btn-primary fw-bold">
        Request a Demo
      </Link>
        </div>
      </header>

      {/* header */}
    </>
  );
};

export default Header;
