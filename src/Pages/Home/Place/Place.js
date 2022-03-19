// import React, { useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Place.css"; // used same css file "Service.js"

const Place = ({ place }) => {
  const { id, cost, rating, discount, policy, imgURL, time, destination } =
    place;
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="singleBox shadow text-start my-3 p-4 border border-round">
        <Card.Img variant="top" src={imgURL} height="300px" loading="lazy" />
        <Card.Body>
          <Card.Title>
            <h3>{destination}</h3>
          </Card.Title>
          <Card.Title>Rating: {rating}</Card.Title>
          <Card.Title>Departure Date: {time}</Card.Title>
          <Card.Title>
            <h6>Discounts: {discount}</h6>
          </Card.Title>
          <Card.Title>
            <h6>Cost: {cost}</h6>
          </Card.Title>
          <Card.Text>
            <b>Policy: {policy}</b>
          </Card.Text>

          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={`/booking/${id}`} // SENDING "placeID"***************
          >
            <Button variant="dark" className="d-block">
              Purchase
              <MDBIcon fas icon="cart-plus fa-lg" />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Place;
