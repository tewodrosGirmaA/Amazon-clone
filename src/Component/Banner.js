import "../Bootsrap/bootstrap.css";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

import React from "react";

import AmazonImage1 from "../Image/banner1 (1).jpg";
import AmazonImage2 from "../Image/banner2.jpg";
import AmazonImage3 from "../Image/banner3.jpg";
import AmazonImage4 from "../Image/banner4.jpg";
import AmazonImage5 from "../Image/banner5.jpg";

const Banner = () => {
  return (
    <Carousel className="banner" fade={true} pause={false} indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage2}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage4}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage5}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
