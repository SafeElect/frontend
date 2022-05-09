import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { Fragment } from "react";

import Widget from "../Common/Widget";


const DetailPage = (props:any) => {
  const { src, pageTitle, children, breadCrumbClass } = props;
  const title = pageTitle ? pageTitle : "Detay Sayfası";
  const addBreadCrumbClass = breadCrumbClass ? breadCrumbClass : "";

  return (
    <Fragment>
      {pageTitle ? (
        <Head>
          {" "}
          <title>{pageTitle}</title>{" "}
        </Head>
      ) : (
        <Head>
          {" "}
          <title>Detay</title>{" "}
        </Head>
      )}

      <div
        className={"breadcrumb-area" + " " + addBreadCrumbClass}
        style={
          src
            ? { backgroundImage: `url(${src})` }
            : { backgroundImage: `url(/images/detailsPage/layout-background.png)` }
        }
      >
        <h4> {title} </h4>
        <div>
          {/* {/* <Link href={"/"}></Link> */}
          {/* <Link href={"/"} >Home</Link>  */}
        </div>
      </div>

      <Widget className="detail-page-container" light>
        {children}
      </Widget>
    </Fragment>
  );
};
export default DetailPage;
