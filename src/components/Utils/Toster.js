import React from "react";
import Toast from "react-bootstrap/Toast";

const Toster = ({ show, message, type, OnClose }) => {
  return (
    <>
      <Toast
        show={show}
        autohide={true}
        delay={3000}
        bg={type}
        onClose={OnClose}
      >
        <Toast.Body style={{ color: "white" }}>{message}</Toast.Body>
      </Toast>
    </>
  );
};
export default Toster;
