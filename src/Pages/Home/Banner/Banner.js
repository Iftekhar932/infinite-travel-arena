import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="bannerBox">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/QbLp7D4/s-migaj-Yui5vf-KHuzs-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Is Travelling your hobby?</h3>
            <p>Connect With Us</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/sK2GVrM/luca-bravo-O453-M2-Liufs-unsplash.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Nothing is more enjoying than travelling?</h3>
            <p>Be Our Guest</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/k1B3MrD/place-0.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Always looking for opportunities to travel?</h3>
            <p>Keep in touch with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
