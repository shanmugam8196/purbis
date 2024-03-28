import { Helmet } from "react-helmet-async";

const HomeSeo = () => {
  return (
    <>
      <Helmet>
        <title>Online food ordering,delivery system|Multi restaurant ordering system, software| Try Live Demo Now| Purbis</title>
     {/* meta tags */}
     <title>Digital transformation for commerce business</title>

<meta name="description" content="Purbis provides on-demand digital transformation solutions for startups, entrepreneurs, and enterprises. We offer complete automation platforms for food and restaurant, retail, and transportations businesses."/>

<meta name="keywords" content="on-demand marketplace app development, online ordering system, delivery management software, booking, and scheduling application" />

<meta name="robots" content="index, follow" />
<meta name="language" content="en-us" />
<meta name="distribution" content="global" />
<meta name="search engines" content="ALL"/>
<meta name="expires" content="never"/>
<meta property="og:title" content="Digital transformation for commerce business"/>
<meta property="og:description" content="Purbis provides on-demand digital transformation solutions for startups, entrepreneurs, and enterprises. We offer complete automation platforms for food and restaurant, retail, and transportation businesses." />
<meta property="og:type" content="Website" />
<meta property="og:url" content="https://www.purbis.com/" />
<meta property="og:site_name" content="Purbis Solutions" />


{/* Organization Schema :  */}

<script type='application/ld+json'>
  {`
    {
        "@context": "http://schema.org/",
        "@type": "Organization",
        "legalName": "Purbis",
        "url": "https://www.purbis.com/",
        "telephone": "+91 9629370003",
        "email": "Purbis@technoduce.com",
        "logo": "https://www.purbis.com/images/logo.png",
        "description": "Purbis provides on-demand digital transformation solutions for startups, entrepreneurs, and enterprises. We offer complete automation platforms for food and restaurant, retail, and transportations businesses.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 9629370003",
            "contactType": "sales",
            "availableLanguage": [
                "English",
                "Hindi"
            ]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "JV Building, 2/3 & 2/4 Mullai Nagar, Maruthamalai Main Road",
            "addressLocality": "Vadavalli",
            "postalCode": "641041",
            "addressCountry": "India"
        },
        "founder": ["Rajesh Prabhu S"],
        "foundingLocation": "Coimbatore",
        "location": {
            "@type": "Place",
            "name": "Coimbatore"
            }
    }
    `}
    </script>
    {/* Website schema  :  */}

<script type="application/ld+json">
  {`
          { "@context": "http://schema.org", 
          "@type": "WebSite", "url": "https://www.purbis.com",
           "potentialAction": { "@type": "SearchAction",
            "target": "https://www.purbis.com/index.php?q={search_term}",
             "query-input": "required name=search_term" } }
             `}
      </script>

      {/* Dataset schema :  */}

<script type="application/ld+json">
  {`
          { "@context": "https://schema.org", "@type": "Dataset", "name" : "Purbis", "keywords":[ "Digital transformation for commerce business","on-demand marketplace app development", "online ordering system", "delivery management software", "booking and scheduling application" ], 
          "url" : "https://www.purbis.com", 
          "description": "Purbis provides on-demand digital transformation solutions for startups, entrepreneurs, and enterprises. We offer complete automation platforms for food and restaurant, retail, and transportation  businesses."
        }
        `}
      </script>




     
     
      </Helmet>
    </>
  );
};
export default HomeSeo;
