import Link from "next/link";
import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import styles from "../HomePage.module.scss";
// import { Helmet } from "react-helmet";

const WhatIs = () => {
  return (
    <Container className={styles.whatIsContainer}>
      <div className="d-xl-flex d-lg-flex d-md-flex d-sm-block d-block">
        <Col xl={{ span: 5 }} lg={{ span: 5 }} md={{span:12}} className={styles.pictureCol}>
          <Image className="w-100" src="/images/HomePage/Team2.jpg"></Image>
        </Col>
        <Col xl={{ span: 5, offset: 2 }} className={styles.teamDiscription}>
          <Image src="/images/HomePage/hands.gif"></Image>
          <h5>
            The Team Behind <span>SafeElect!</span>
          </h5>
          <p>
            A project of this magnitude needs a good team behind it! Lucky for
            us, the developers behind SafeElect are innovative, bright, problem
            solvers and the best at what they do! To top that off, the advisor
            for the team is CTIS's very own Dr. Seyid Amjad Ali, who need no
            introduction!
          </p>
        </Col>
      </div>
      <div className="d-xl-flex d-lg-flex d-md-flex d-sm-block d-block" style={{ marginTop: 200 }}>
        <Col xl={{ span: 5, offset: 0 }} className={styles.teamDiscription}>
          <Image src="/images/HomePage/handvote.gif"></Image>
          <h5>
            How does <span>SafeElect</span> work?
          </h5>
          <p>
            SafeElect is a web application which focuses on organizing digital
            elections. Voters will be able to register, log-in or be pre-fed
            into a database. These registered voters will login to our portal
            where they will be allowed to vote for their candidate. These votes
            will then be digitally counted and the results will be displayed on
            our mobile application!
          </p>
        </Col>
        <Col
          xl={{ span: 5, offset: 2 }}
          lg={{ span: 5 }}
          className={styles.pictureCol}
        >
          <Image className="w-100" src="/images/HomePage/worldspin.gif"></Image>
        </Col>
      </div>

      <div className="d-xl-flex d-lg-flex d-md-flex d-sm-block d-block" style={{ marginTop: 200 }}>
        <Col xl={{ span: 5 }} lg={{ span: 5 }} className={styles.pictureCol}>
          <Image className="w-100" src="/images/HomePage/Binance.gif"></Image>
        </Col>
        <Col xl={{ span: 5, offset: 2 }} className={styles.teamDiscription}>
          <Image src="/images/HomePage/bnbspin.gif"></Image>
          <h5>
            Blockchain and <span>SafeElect!</span>
          </h5>
          <p>
            SafeElect will use the Binance Smart Chain to safely conduct the
            election process. Each Voter will be lent an Election Crypto Token.
            When the voters select a candidate this token will exit the booth
            address and will be sent to the candidate wallet. At the end of the
            election period, the candidate with the most tokens in their wallets
            will win the election!
            <br></br>
            <br></br>
            The Binance Smart Chain offer the market's best features such as
            very quick transactions, cheaper transactions, secure transactions
            and most importantnly every thing is open to public!
          </p>
        </Col>
      </div>

      <div className="" style={{ marginTop: 200 }}>
        <Col
          xl={{ span: 2, offset: 5 }}
          lg={{ span: 2 }}
          className={styles.lastCol}
        >
          <Image
            className="w-100"
            src="/images/HomePage/registertovote.gif"
          ></Image>
        </Col>
        <Col
          xl={{ span: 6, offset: 3 }}
          lg={{ span: 6 }}
          className={styles.lastCol}
        >
          <h5>All you have to do is register for the election and then login to check
            if you are eligible to vote!</h5>
            <Link href={"/"}>Register!</Link> 
        </Col>
      </div>

      <div
        style={{
          height: 433,
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          boxSizing: "border-box",
          border: "1px solid #56667F",
          borderRadius: "4",
          textAlign: "right",
          lineHeight: 14,
          fontSize: 12,
          boxShadow: "inset 0 -20px 0 0 #56667F",
          padding: 0,
          margin: 0,
          width: "100%",
          marginTop: 200,
        }}
      >
        <div style={{ height: 413, padding: "0", margin: 0, width: "100%" }}>
          <iframe
            src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes"
            width="100%"
            height="409px"
            scrolling="auto"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
            border={0}
            style={{ border: 0, margin: 0, padding: 0 }}
          ></iframe>
        </div>
        <div
          style={{
            color: "#FFFFFF",
            lineHeight: 14,
            fontWeight: 400,
            fontSize: 11,
            boxSizing: "border-box",
            padding: "2px 6px",
            width: "100%",
            fontFamily: "Verdana, Tahoma, Arial, sans-serif",
          }}
        >
          <a
            href="https://coinlib.io"
            target="_blank"
            style={{
              fontWeight: 500,
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: 11,
            }}
          >
            Cryptocurrency Prices
          </a>
          &nbsp;by Coinlib
        </div>
      </div>
    </Container>
  );
};

export default WhatIs;
