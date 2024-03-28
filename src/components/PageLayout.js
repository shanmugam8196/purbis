import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FooterTop from "./FooterTop";

const PageLayout = ({ consultForm,  children }) => {
  return (
    <div>
      <Header />
      <div className="main-content">{children}</div>
      {!consultForm && <FooterTop /> }
      <Footer />
    </div>
  );
};
export default PageLayout;
