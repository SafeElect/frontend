import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Navbar } from "react-bootstrap";
import { faBars, faPhoneAlt, faAt, faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SocialMediaIcons from "../../../Common/SocialMediaIcons";



const TopBarMenu = ({isSticky} :{isSticky:any} ) => {





  return (
    <Navbar
      className="topBarMenu"
      style={isSticky ? { position: "relative", display: "none" } : { position: "absolute" }}
    >
      {/* <Col sm={3} className="topBarMenu-item topBarMenu-item-with-border">
        <FontAwesomeIcon
          icon={faBars}
          pull="right"
          size={"lg"}
          fontSize="16px"
          fontFamily="Poppins"
        />
      </Col> */}
      <div className="container">
        <Col
          sm={{ span: 8, offset: 0 }}
          md={{ span: 9, offset: 0 }}
          lg={{ span: 11, offset: 0 }}
          xs={{ span: 6 }}
          xl={{ span: 11, offset: 0 }}
          className="topBarMenu-item topBarMenu-item-with-border"
        >
          <Col
            md={{ span: 2, offset: 0 }}
            sm={{ span: 8, offset: 0 }}
            xs={{ span: 5, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
            className="float-left"
          >
            {/* <Link href={"/kvkk"}>K.V.K.K.</Link> */}

            {/* <Link href={"/hakkimizda"}>{t.aboutUs}</Link> */}

            {/* <Link href={"/projelerimiz"}>Projelerimiz</Link> */}
          </Col>
          <Col
            style={{ flexDirection: "column", textAlign: "center" }}
            md={{ span: 2, offset: 0 }}
            sm={{ span: 4, offset: 0 }}
            xs={{ span: 5, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
            className="change-language"
          >

          </Col>

          <Col
            md={{ span: 7, offset: 1 }}
            sm={{ span: 12, offset: 0 }}
            xs={{ span: 0, offset: 0 }}
            xl={{ span: 8, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
            className="float-right"
          >
            <Link href={"tel:+908503464737"}>
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} size={"lg"} />
                +90 850 346 47 37
              </span>
            </Link>

            <Link href="mailto:info@pointo.com.tr">
              <span>
                <FontAwesomeIcon icon={faAt} size={"lg"} />
                info@pointo.com.tr
              </span>
            </Link>
          </Col>
        </Col>

        <Col
          sm={{ span: 4, offset: 0 }}
          md={{ span: 3, offset: 0 }}
          lg={{ span: 1, offset: 0 }}
          xs={{ span: 6, offset: 0 }}
          xl={{ span: 1, offset: 0 }}
          className="topBarMenu-item social-links"
        >
          <SocialMediaIcons />
        </Col>
      </div>
    </Navbar>
  );
};

export default TopBarMenu;
