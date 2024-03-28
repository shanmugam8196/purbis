import React, { useEffect, useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form, Formik } from "formik";
import PhoneInput, {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {
  CaptchaErrorMessage,
  EmailSuccessMessage,
  PUBLIC_KEY,
  SERVICE_ID,
  SITE_KEY,
  TEMPLATE_ID,
  EmailSubjectLines,
} from "../helpers";
import Toster from "./Utils/Toster";

const RequestDemoModal = ({ data, name = "Request a Demo" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  let temp = location.pathname.split("/");
  let category = temp[1].split(".");
  const captchaRef = useRef(null);
  const formRef = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
    //product: "",
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
        subject_line:
          EmailSubjectLines[category[0].replace(/-/g, "").split(".").join("")],
        to_name: "Sales Team",
        page: window.location.href,
        city: IPData.city,
        country: IPData.country_name,
        userEmail: formValues.email,
        userContactNumber: formValues.contactNumber,
        category: category[0],
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
            product: "",
          },
        });
        setFormValues({});
        setShow(false);
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
      <Toster
        show={alertShow.show}
        message={alertShow.message}
        type={alertShow.type}
        OnClose={OnClose}
      />
      <Button onClick={handleShow} className="btn btn-primary fw-bold">
        {name}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="modal-design-1"
      >
        <Modal.Body>
          <div className="modal-left">
            <h2>Request Demo</h2>
            <p>
              Find out Purbis products here that help to transform your
              traditional business into an online platform to manage operations
              efficiently.
            </p>
          </div>
          <div className="modal-right">
            <Modal.Header closeButton></Modal.Header>
            <p>
              Have a question? You can contact us directly through Email or
              WhatsApp:
            </p>
            <Formik
              innerRef={formRef}
              enableReinitialize
              initialValues={{
                name: "",
                email: "",
                contactNumber: "",
                message: "",
                //product: "",
              }}
              validationSchema={VisitorTypeSchema}
              onSubmit={(values, { resetForm }) => {
                if (isValidPhoneNumber(values.contactNumber)) {
                  HandleSubmit(values, resetForm);
                }
              }}
            >
              {({ values, errors, handleChange, touched, isSubmitting }) => (
                <Form className="needs-validation">
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RequestDemoModal;
