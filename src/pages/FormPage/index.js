import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TestimonialApiTwo } from "../../components/Data/TestimonialApi";
import FormSlider from "../../components/Slider/FormSlider";
import { Form, Formik } from "formik";
import PhoneInput, {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
  CaptchaErrorMessage,
  EmailSuccessMessage,
  RequestFormSubjectLine,
  PUBLIC_KEY,
  SERVICE_ID,
  SITE_KEY,
  TEMPLATE_ID,
} from "../../helpers";
import Toster from "../../components/Utils/Toster";

const FormPageindex = () => {
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const formRef = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
    product: "",
  });
  const [alertShow, setAlertShow] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [IPData, setIPData] = useState({});
  const [refererUrl, setRefererUrl] = useState("");
  const VisitorTypeSchema = Yup.object().shape({
    name: Yup.string().required(`Please enter your name`),
    email: Yup.string()
      .email("Please enter a valid email")
      .required(`Please enter your email id`),
    contactNumber: Yup.string().required("Please enter your contact number"),
    product: Yup.string().required("Please select an option"),
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
        subject_line: RequestFormSubjectLine,
        from_name: formValues.name,
        to_name: "Sales Team",
        page: window.location.href,
        city: IPData.city,
        country: IPData.country_name,
        userEmail: formValues.email,
        userContactNumber: formValues.contactNumber,
        message: formValues.message,
        IP: IPData?.ip,
        region_code: IPData?.region_code,
        region_name: IPData?.region,
        timezone: IPData?.timezone,
        continent_code: IPData?.continent_code,
        latitude: IPData?.latitude,
        longitude: IPData?.longitude,
        referer_url: refererUrl,
        category: formValues.product,
      });
      if (resp?.status < 400) {
        setAlertShow({
          show: true,
          message: EmailSuccessMessage,
          type: "success",
        });
        formRef.current.resetForm({
          values: {
            name: "",
            email: "",
            contactNumber: "",
            message: "",
            product: "",
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
      <section className="formpage">
        <Toster
          show={alertShow.show}
          message={alertShow.message}
          type={alertShow.type}
          OnClose={OnClose}
        />
        <Container>
          <Button
            variant="link"
            onClick={() => navigate(-1)}
            className="btn-close"
          ></Button>
          <Row>
            <Col md={6} className="position-relative">
              <div className="bg-img-1">
                <LazyLoadImage
                  src="images/bg-1.png"
                  alt="bg-1"
                  height="211"
                  width="170"
                />
              </div>
              <div className="bg-img-2">
                <LazyLoadImage
                  alt="bg-2"
                  src="images/bg-2.png"
                  width="622"
                  height="587"
                />
              </div>

              <div className="text-center">
                <Link to="/">
                  <LazyLoadImage
                    alt="logo"
                    src="images/logo.png"
                    width="168"
                    height="45"
                  />
                </Link>
                <p className="mt-3">
                  Fill out a form and our team will get back to you within 24
                  hours with more information
                </p>
              </div>

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
                  <Form className="form-boxed">
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
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="3"
                        placeholder="Tell us Something About Your Requirement"
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* <div className="form-check form-group">
                      <input
                        name="sendEmail"
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => {
                          formRef.current.setFieldValue(
                            "sendEmail",
                            e.target.checked
                          );
                        }}
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Send me Email on purbis for news and update
                      </label>
                    </div> */}
                    <button
                      type="submit"
                      className="btn btn-primary w-100 btn-lg"
                    >
                      Send
                    </button>
                    <div>
                      <ReCAPTCHA
                        className="recaptcha"
                        sitekey={SITE_KEY}
                        size="invisible"
                        ref={captchaRef}
                        //onChange={(e) => console.log("CAPTACHA ONCHANGE", e)}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
            <Col md={6} className="formpage_space">
              <div className="text-center mb-5">
                <h3>Trusted by 100+ businessess</h3>
                <FormSlider data={TestimonialApiTwo} />
              </div>
              <div className="text-center">
                <img src="images/group.png" className="filter-gray" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* </PageLayout > */}
    </>
  );
};

export default FormPageindex;
