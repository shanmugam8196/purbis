import { Helmet } from "react-helmet-async";

const IntegrationSeo= () => {
  return (
    <>
      <Helmet>
        
{/* Meta tags :  */}

<title> Third-Party Integration - Purbis </title>
    
<meta name="description" content=" Purbis integrates any of the third-party APIs that are payment gateways, SMS, and push notification, delivery services providers and much more"/>

<meta name="keywords" content=" third-party integration, integration services"/>

<link rel="canonical" href="https://www.purbis.com/third-party-integration"/>

<meta name="robots" content="index,follow"/>

<meta name="language" content="en"/>

<meta name="Expires" content="never"/>

<meta name="Distribution" content="Global"/>

<meta name="search engines" content="ALL"/>

  {/* OG :  */}

<meta property="og:site_name" content="purbis.com"/>

<meta name="og:url" content="https://www.purbis.com/third-party-integration"/>

<meta name="og:title" content="Third-Party Integration - Purbis"/>

<meta name="og:description" content="Purbis integrates any of the third-party APIs that are payment gateways, SMS, and push notification, delivery services providers and much more"/>

      {/* Website schema :  */}

<script type="application/ld+json">
  {`
          { "@context": "http://schema.org", "@type": "WebSite", "url": "https://www.purbis.com", "potentialAction": { "@type": "SearchAction", "target": "https://www.purbis.com/index.php?q={search_term}", "query-input": "required name=search_term" } }
    
          `}
          </script>
          {/* Organization schema :  */}

<script type="application/ld+json">
  {`
      {
       "@context": "https://schema.org",
       "@type": "Organization",
       "name" : "Purbis",
       "url" : "https://www.purbis.com",
       "logo" : "https://www.purbis.com/images/logo.png",
       "address" : {
         "@type": "PostalAddress",
         "addressCountry": "India",
         "addressLocality": "Tamil Nadu",
         "addressRegion": "Coimbatore",
         "postalCode": "641041",
         "streetAddress": "JV Building, 2/3 & 2/4, Mullai Nagar, Maruthamalai Main Road, Vadavalli"
       },
       "founder": "Rajesh Prabhu",
       "email" : "purbis@technoduce.com"
      }
      `}
    </script>



      </Helmet>
    </>
  );
};
export default IntegrationSeo;
