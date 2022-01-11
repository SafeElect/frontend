import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ( {children} : {children:any} ) => {
  return (
    <Fragment>
      <Head>
        <title>Safe Elect</title>
        <link rel="icon" href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {children}

      <Footer />
    </Fragment>
  );
};

export default Layout;
