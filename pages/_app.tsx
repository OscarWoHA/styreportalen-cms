import React from "react"
import { AppProps } from "next/app"
import { withTina } from "tinacms"
import Head from "next/head"
import Navbar from "../components/Navbar"

const SPApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Styreportalen CMS</title>
                <script
                    src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
                    crossOrigin="anonymous"
                ></script>
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
                    rel="stylesheet"
                    type="text/css"
                />
                <link href="/styles.css" rel="stylesheet" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
            <script src="/scripts.js"></script>
        </React.Fragment>
    )
}

export default withTina(SPApp, {
    enabled: true,
    sidebar: process.env.NODE_ENV !== "production",
})
