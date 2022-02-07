import React, { useEffect } from "react";
import "./Place.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Place = ({ place }) => {
  const { id, cost, rating, discount, policy, imgURL, time, destination } =
    place;
  /* useEffect(() => {
    fetch("http://localhost:5000/");
  }, []); */
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

        <Link
          style={{ color: "white", textDecoration: "none" }}
          to={`/booking/${id}`}
        >
          <Button variant="dark">Purchase</Button>
        </Link>
      </Card.Body>
    </div>
  );
};

export default Place;
