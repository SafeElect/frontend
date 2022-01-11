import React, { Fragment, useEffect, useState } from "react";
// import Image from "next/image";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import { Nav, Navbar, NavItem, Button, Col } from "react-bootstrap";
import Logo from "../../../Common/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const TopStickyMenu = ( {isSticky} :{isSticky:any} ) => {
  // const node = ReactDOM.findDOMNode(this);
  useEffect(() => {
    const topBar = Array.from(
      document.getElementsByClassName(
        "navbar-collapse"
      ) as HTMLCollectionOf<HTMLElement>
    );
    const topLogo = Array.from(
      document.getElementsByClassName(
        "navbar-brand"
      ) as HTMLCollectionOf<HTMLElement>
    );

    console.log(topBar[0].style.display);
    if (topBar[0].style.display === "") {
      topLogo[0].style.justifyContent = "center";
    }
  });

  return (
    <Navbar
      className="sidebar"
      expand="lg"
      sticky="top"
      style={
        isSticky
          ? { position: "fixed", background: "linear-gradient(to right, #7BC6CC, #BE93C5)", marginTop: "0px" }
          : { position: "absolute" }
      }
    >
      <div className="container top-sticky-bar">
        <Col xl={{ span: 2 }} lg={{ span: 2 }} md={{span:2}} sm={{span:2}}>
          <Navbar.Brand>
            {console.log(isSticky + "sticky cehck")}
            <Link href="/">
              <a>
                {!isSticky ? (
                  <Logo
                    isLight={!isSticky}
                    id="logo"
                    // width="160px"
                    height="50px"
                  />
                ) : (
                  <Logo
                    isLight={!isSticky}
                    id="logo"
                    // width="160px"
                    height="50px"
                  />
                )}
              </a>
            </Link>
          </Navbar.Brand>
        </Col>

        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          height={600}
        ></Sidebar>

        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle> */}
        <Col xl={{span:8}} lg={{span:8}} md={{span:8}}>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ width: "100%" }} className="mr-auto">
              <ul
                className="sticky-menu-list"
                style={isSticky ? { background: "" } : { background: "" }}
              >
                <Link href="/">
                  <li
                    style={isSticky ? { color: "#fff" } : { color: "#fff" }}
                  >
                    Home
                    <span></span>
                  </li>
                </Link>
                <Link href="/aboutus">
                  <li
                    style={isSticky ? { color: "#fff" } : { color: "#fff" }}
                  >
                    About Us
                    <span></span>
                  </li>
                </Link>
                <Link href="/">
                  <li
                    style={isSticky ? { color: "#fff" } : { color: "#fff" }}
                  >
                    How To Vote
                    <span></span>
                  </li>
                </Link>
                <Link href="/signin">
                  <li
                    style={isSticky ? { color: "#fff" } : { color: "#fff" }}
                  >
                    SafeElect
                    <span></span>
                  </li>
                </Link>
                <Link href="/">
                  <li
                    style={isSticky ? { color: "#fff" } : { color: "#fff" }}
                  >
                    <Link href="/signin">
                      <FontAwesomeIcon icon={faUser} style={{height:"30px"}}/>
                    </Link>
                    <span></span>
                  </li>
                </Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </div>
    </Navbar>
  );
};

export default TopStickyMenu;
