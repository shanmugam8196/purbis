import { Helmet } from "react-helmet-async";

import React from 'react'

const ThankyouSeo = () => {
    return (
        <>
            <Helmet>

                {/* Meta tags:  */}
                <title>Thank you</title>
                <meta name="description" content="Thanks for contacting us." />
                <meta name="keywords" content="thanks" />

            </Helmet>
        </>
    )
}

export default ThankyouSeo;