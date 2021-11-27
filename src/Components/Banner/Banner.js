import React from "react";
import { Carousel } from "react-bootstrap";

// Home page banner

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="inner">
            <img
              className="d-block w-100"
              src="    https://i.ibb.co/YQQdzMZ/main-slider-1.jpg
"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h1>
              {" "}
              <b>Amazing!!! Tours and Fun</b>{" "}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="inner">
            <img
              className="d-block w-100"
              src="https://i.ibb.co/0j9Gctk/main-slider-3.jpg
"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h1>
              <b>Choose The Destination </b>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="inner">
            <img
              className="d-block w-100"
              src="https://i.ibb.co/JmSsgRg/main-slider-2.jpg
"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h1>
              <b>Amazing Offers!</b>
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
