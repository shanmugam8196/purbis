import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput, {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { FooterApi } from "./Data/FooterApi";
import {
  CaptchaErrorMessage,
  EmailSuccessMessage,
  FooterFormSubjectLine,
  PUBLIC_KEY,
  SERVICE_ID,
  SITE_KEY,
  TEMPLATE_ID,
} from "../helpers";
import Toster from "./Utils/Toster";

const FooterTop = () => {
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const formRef = useRef();
  const [alertShow, setAlertShow] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
    senEmail: false,
    product: "",
  });
  const [IPData, setIPData] = useState({});
  const [refererUrl, setRefererUrl] = useState("");
  const VisitorTypeSchema = Yup.object().shape({
    name: Yup.string().required(`Please enter your name`),
    email: Yup.string()
      .email("Please enter a valid email")
      .required(`Please enter your email id`),
    contactNumber: Yup.string().required("Please enter your contact number"),
    //product: Yup.string().required("Please select an option"),
  });

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (response?.status < 400 && Object.keys(data)?.length > 0) {
      setIPData(data);
    }
  };

  const NavigateTO = (page) => {
    return navigate(page);
  };
  const SendEmail = async (value, resetForm) => {
    const serviceId = SERVICE_ID;
    const templateId = TEMPLATE_ID;

    try {
      const resp = await emailjs.send(serviceId, templateId, {
        "g-recaptcha-response": value,
        from_name: formValues.name,
        subject_line: FooterFormSubjectLine,
        to_name: "Sales Team",
        page: window.location.href,
        city: IPData.city,
        country: IPData.country_name,
        userEmail: formValues.email,
        userContactNumber: formValues.contactNumber,
        category: "Footer get quote form",
        message: formValues.message,
        IP: IPData?.ip,
        region_code: IPData?.region_code,
        region_name: IPData?.region,
        timezone: IPData?.timezone,
        continent_code: IPData?.continent_code,
        latitude: IPData?.latitude,
        longitude: IPData?.longitude,
        referer_url: refererUrl,
      });
      if (resp?.status < 400) {
        setAlertShow({
          show: true,
          message: EmailSuccessMessage,
          type: "success",
        });
        resetForm({
          values: {
            name: "",
            email: "",
            contactNumber: "",
            message: "",
            senEmail: false,
          },
        });
        setFormValues({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = async (values, resetForm) => {
    captchaRef.current.executeAsync().then((value) => {
      if (value !== null) {
        SendEmail(value, resetForm);
      } else {
        setAlertShow({
          show: true,
          message: CaptchaErrorMessage,
          type: "danger",
        });
      }
    });
  };

  const OnClose = () => {
    setAlertShow({
      show: false,
      message: "",
      type: "",
    });
    NavigateTO("/thankyou");
  };

  useEffect(() => {
    getIp();
    emailjs.init(PUBLIC_KEY);
    const referrerUrl = document.referrer;
    setRefererUrl(referrerUrl);
  }, []);

  return (
    <>
      <section className="consulting-contact" id="scroll-footer">
        <Toster
          show={alertShow.show}
          message={alertShow.message}
          type={alertShow.type}
          OnClose={OnClose}
        />
        <div className="container relative">
          <svg
            className="vector-flying-1"
            width={31}
            height={92}
            viewBox="0 0 31 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5568 1.12005C18.9659 8.73665 -2.5392 29.6133 4.16747 52.1872C4.66376 54.7691 8.11116 69.7944 12.8903 65.4444C17.6725 61.0916 19.8202 51.3593 14.4622 47.7387C13.5109 47.0958 12.2313 46.9238 10.5156 47.55C4.64322 49.6933 1.08107 56.0464 1.49036 62.2843C1.98041 69.7532 6.21128 80.6234 22.5577 91.0049"
              stroke="#434445"
            />
          </svg>
          <div className="text-center mb-5">
            <div className="w-75 d-inline-block">
              <h2>{FooterApi.heading}</h2>
              <p className="text-secondary">{FooterApi.subHeading}</p>
            </div>
          </div>
          <div className="row justify-content-center footer-top">
            <div className="col-md-6">
              <Formik
                innerRef={formRef}
                enableReinitialize
                initialValues={{
                  name: "",
                  email: "",
                  contactNumber: "",
                  message: "",
                  product: "",
                }}
                validationSchema={VisitorTypeSchema}
                onSubmit={(values, { resetForm }) => {
                  if (isValidPhoneNumber(values.contactNumber)) {
                    HandleSubmit(values, resetForm);
                  }
                }}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  touched,
                  resetForm,
                  isSubmitting,
                }) => (
                  <Form className="needs-validation">
                    <h3>How can we help you?</h3>
                    {setFormValues(values)}
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        onChange={handleChange}
                      />
                      {errors.name !== undefined && touched.name && (
                        <p className="text-error">{errors?.name}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                      />
                      {errors.email !== undefined && touched.email && (
                        <p className="text-error">{errors?.email}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <PhoneInput
                        international
                        value={formValues?.contactNumber}
                        placeholder={"Contact Number"}
                        countryCallingCodeEditable={false}
                        defaultCountry={"IN"}
                        className="form-control"
                        onChange={(e) => {
                          let number = e;
                          formRef.current.setFieldValue(
                            "contactNumber",
                            formatPhoneNumberIntl(number)
                          );
                        }}
                      />
                      {errors.contactNumber !== undefined &&
                        touched.contactNumber && (
                          <p className="text-error">{errors?.contactNumber}</p>
                        )}
                      {isSubmitting &&
                        !isValidPhoneNumber(values.contactNumber) && (
                          <p className="text-error">
                            Enter a valid contact number
                          </p>
                        )}
                    </div>
                    {/* <div className="form-group">
                      <select
                        className="form-control"
                        name="product"
                        onChange={(e) => {
                          formRef.current.setFieldValue(
                            "product",
                            e.target.value
                          );
                        }}
                      >
                        <option selected>Select What You're Looking For</option>
                        <option value="Food Ordering and Delivery System">
                          Food Ordering and Delivery System
                        </option>
                        <option value="Grocery Ordering and Delivery App">
                          Grocery Ordering and Delivery App
                        </option>
                        <option value="Taxi Booking Dispatch System">
                          Taxi Booking Dispatch System
                        </option>
                        <option value="Multi Service App like Gojek, Grab">
                          Multi Service App like Gojek, Grab
                        </option>
                        <option value="Courier Delivery Software">
                          Courier Delivery Software
                        </option>
                        <option value="Fuel Ordering Delivery App">
                          Fuel Ordering Delivery App
                        </option>
                        <option value="Online Laundry Delivery System">
                          Online Laundry Delivery System
                        </option>
                        <option value="Pizza Delivery System">
                          Pizza Delivery System
                        </option>
                        <option value="Looking for Something Other">
                          Looking for Something Other
                        </option>
                      </select>
                      {errors.product !== undefined && touched.product && (
                        <p className="text-error">{errors?.product}</p>
                      )}
                    </div> */}
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        defaultValue={""}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <ReCAPTCHA
                        className="recaptcha"
                        sitekey={SITE_KEY}
                        size="invisible"
                        ref={captchaRef}
                      //onChange={(e) => console.log("CAPTACHA ONCHANGE", e)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary fw-bold w-100"
                    >
                      Send Message
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-md-6">
              {/* <div className="img-contact mb-3 text-center">
                  <LazyLoadImage
                    src="images/footer-image.png"
                    width="325"
                    height="302"
                    alt="Footer"
                  />
                </div> */}
              <div className="img-contact-ul">
                <ul className="reset">
                  <li>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-location-dot icon-circle" />
                      <p className="mb-0 text-secondary">{FooterApi.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-whatsapp icon-circle" />
                      <p className="mb-0 text-secondary">
                        {FooterApi.whatsapp}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-phone icon-circle" />
                      <p className="mb-0 text-secondary">{FooterApi.phone}</p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-envelope icon-circle" />
                      <p className="mb-0 text-secondary">{FooterApi.email}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
    </>
  );
};

export default FooterTop;
