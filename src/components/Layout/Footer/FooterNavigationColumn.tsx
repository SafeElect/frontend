import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const FooterNavigationColumn = () => {
  return (
    <Col md={3}>
      {/* <h5>{t.navigation}</h5> */}

      <ul id="navigation">
        <Link href="/hakkimizda">
        <li>
            {/* {t.aboutUs} */}
            <span></span>
          </li>
        </Link>
        <Link href="/kurumsal">
          <li>
            {/* {t.corporate} */}
            <span></span>
          </li>
        </Link>
        <Link href="/hizmetlerimiz">
          <li>
            {/* {t.ourServices} */}
            <span></span>
          </li>
        </Link>
        <Link href="/referanslarimiz">
          <li>
            {/* {t.ourReferences} */}
            <span></span>
          </li>
        </Link>
        <Link href="/insanKaynaklari">
          <li>
            {/* {t.humanResources} */}
            <span></span>
          </li>
        </Link>
        <Link href="/iletisim">
          <li>
            {/* {t.contact} */}
            <span></span>
          </li>
        </Link>
      </ul>
    </Col>
  );
};

export default FooterNavigationColumn;
