import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";
import SocialMediaIcons from "../../Common/SocialMediaIcons";

const FooterWhoAreWeColumn = () => {
  return (
    <Col md={3} style={{marginBottom:"15px"}}>
      {/* <h5>{t.whoAreWe}</h5> */}
      
      <p>
        {/* {t.setOutToEnrich}     <br/><Link href="/kurumsal"><a  style={{color:"white", fontWeight:"bold"}}>{t.readMore}</a></Link> */}
      </p>



      <br />

      <SocialMediaIcons size="2x" />
    </Col>
  );
};

export default FooterWhoAreWeColumn;
