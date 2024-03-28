import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./config";
// helmet
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./helpers/ScrollToTop";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

function App() {
  useEffect(() => {
    const referrerUrl = document.referrer;
    console.log("Referrer URL:", referrerUrl);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <RouterConfig />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
