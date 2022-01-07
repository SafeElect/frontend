import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Widget from "../Common/Widget";

const Slider = () => {
  return (
    <Carousel
      interval={5000}
      // nextIcon={<Image src="./images/slider/next.png"></Image>}
      // prevIcon={<Image src="./images/slider/back.png"></Image>}
    >
      <Carousel.Item
        className="slider-carousel-item row no-gutters"
        interval={5000}
      >
        <video className="video" playsInline autoPlay loop muted>
          <source src={"/videos/video.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="slider-carousel-caption container">
          <Widget>
            <Row>
              <Col
                xl={{ span: 12, offset: 0 }}
                lg={{ span: 12, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                sm={{ span: 10, offset: 1 }}
                xs={{ span: 4, offset: 4 }}
              >
                {/* <Image src="./images/portfolyo-title.png"></Image> */}
              </Col>
            </Row>
            <Row className="slider-detail-header-under">
              <Col
                xl={{ span: 3 }}
                lg={{ span: 3 }}
                md={{ span: 4 }}
                sm={{ span: 4 }}
                xs={{ span: 3 }}
                className="slider-detail-header-under-col1"
              >
                {/* <Button>Portfolyo</Button> */}
              </Col>
              <Col
                xl={{ span: 5, offset: 4 }}
                lg={{ span: 5, offset: 4 }}
                md={{ span: 7, offset: 1 }}
                sm={{ span: 8, offset: 0 }}
                xs={{ span: 8, offset: 0 }}
                className="slider-detail-header-under-col2"
              >
                {/* <h4>PROFESYONEL FOTOĞRAF ÇEKİMİ</h4> */}
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
              </Col>
            </Row>
          </Widget>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
