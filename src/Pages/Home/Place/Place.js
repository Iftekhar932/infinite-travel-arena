import React from "react";
import "./Place.css";
import { Card, Button, Col, Row } from "react-bootstrap";

const Place = ({ place }) => {
  console.log(place);
  const { cost, rating, discount, policy, imgURL, time, destination } = place;
  return (
    <div className="singleBox">
      <Card.Img variant="top" src={imgURL} height="400px" />
      <Card.Body>
        <Card.Title>
          <h3>{destination}</h3>
        </Card.Title>
        <Card.Title>Rating: {rating}</Card.Title>
        <Card.Title>Departure Date: {time}</Card.Title>
        <Card.Title>Discounts: {discount}</Card.Title>
        <Card.Text>
          <h6>Policy: {policy}</h6>
        </Card.Text>
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </div>
  );
};

export default Place;
