import { faPhoneAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const FooterContactColumn = () => {
  return (
    <Col md={3}>
      <h5>Contact</h5>

      <p className="footer-email">
        Do you have a question?
        <br />
        <Link href="mailto:Muhammad.raza@ug.bilkent.edu.tr">
          <span>
            <h6 style={{display: "inline-block"}}>Muhammad.raza@ug.bilkent.edu.tr</h6>
          </span>
        </Link>
      </p>

      {/* <h5>{t.telephone}</h5> */}
      <p className="footer-phone">
      <Link href={"tel:+905538448565"}>
        <span>
          <FontAwesomeIcon icon={faPhoneAlt} size={"lg"} />
          <h6 style={{display: "inline-block"}}>+90 553 844 85 65</h6>
        </span>
      </Link>
      </p>

      {/* <h5>{t.fax}</h5> */}
      <p className="footer-fax">
      <Link href={"tel:+905538448565"}>
        <span>
          <FontAwesomeIcon icon={faPhoneAlt} size={"lg"} />
          <h6 style={{display: "inline-block"}}>+90 553 844 85 65</h6>
        </span>
      </Link>
      </p>

    </Col>
  );
};

export default FooterContactColumn;
