import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";
import SocialMediaIcons from "../../Common/SocialMediaIcons";

const FooterWhoAreWeColumn = () => {
  return (
    <Col md={3} style={{marginBottom:"15px"}}>
      <h5>About Us</h5>
      
      <p>
        SafeElect is a state-of-the art Digital Election System based on the Binance Smart Chain<br/>
      </p>



      <br />

      <SocialMediaIcons size="2x" />
    </Col>
  );
};

export default FooterWhoAreWeColumn;
