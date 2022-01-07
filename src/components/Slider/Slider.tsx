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
        className="slider-carousel-item"
        interval={5000}
      >
        <video className="video" playsInline autoPlay loop muted>
          <source src={"/videos/video.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="slider-carousel-caption1 container">
            <Image src="./images/logo/vote.png"></Image>
            <h5>SafeElect is a state-of-the art Digital<br></br>Election System based on the Binance Smart Chain</h5>
            <button>Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
