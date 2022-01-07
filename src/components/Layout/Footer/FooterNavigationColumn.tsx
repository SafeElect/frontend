import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const FooterNavigationColumn = () => {
  return (
    <Col md={3}>
      <h5>Links</h5>

      <ul id="navigation">
        <Link href="/">
        <li>
            Home
            <span></span>
          </li>
        </Link>
        <Link href="/candidates">
          <li>
            Candidates
            <span></span>
          </li>
        </Link>
        <Link href="/howtovote">
          <li>
            {/* {t.ourServices} */}
            How To Vote
          </li>
        </Link>
        <Link href="/safeelect">
          <li>
            SafeElect
            <span></span>
          </li>
        </Link>
        <Link href="/login">
          <li>
            Login
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
