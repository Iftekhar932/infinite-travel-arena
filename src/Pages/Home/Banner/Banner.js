import React from "react";
// import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const bannerBtext = {
    fontSize: "3vw",
  };
  return (
    <div className="bannerBox">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/N1tRTxn/vcr7.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={bannerBtext}>Is Travelling your hobby?</h3>
            <h6>Connect With Us</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/sK2GVrM/luca-bravo-O453-M2-Liufs-unsplash.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={bannerBtext}>
              Nothing is more enjoying than travelling?
            </h3>
            <h6>Be Our Guest</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/k1B3MrD/place-0.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={bannerBtext}>
              Always looking for opportunities to travel?
            </h3>
            <h6>Keep in touch with us.</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
