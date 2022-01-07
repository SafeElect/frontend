import React from "react";
import Logo from "../../Common/Logo";
import { Col, Container, Form, Row } from "react-bootstrap";

import FooterWhoAreWeColumn from "./FooterWhoAreWeColumn";
import FooterAddressColumn from "./FooterAddressColumn";
import FooterContactColumn from "./FooterContactColumn";
import FooterNavigationColumn from "./FooterNavigationColumn";
import Link from "next/link";



const Footer = () => {


  return (
    <footer className="footer">
      <div className="container">
        <Container
          fluid
          style={{ textAlign: "center" }}
          id="footer-logo-section"
        >
          <Link href="/">
            <Logo isLight={true} />
          </Link>
        </Container>

        <Container fluid id="information-section" className="row">
          <FooterWhoAreWeColumn/>

          <FooterNavigationColumn/>

          <FooterContactColumn/>
          <FooterAddressColumn/>

          
        </Container>

        <Container fluid id="copy-right-section">
          Copyright © 2020 - All Rights Reserved
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
