import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Login/Login/Login";
import "../Place/Place"; // used same css file in 'place.js'

const Service = ({ service }) => {
  const { id, category, cost, rating, discount, policy, imgURL } = service;
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="singleBox shadow text-start my-3 p-4 border border-round">
        <Card.Img variant="top" src={imgURL} height="300px" loading="lazy" />
        <Card.Body>
          <Card.Title>Category: {category}</Card.Title>
          <Card.Title>Rating: {rating}</Card.Title>
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
            to={`/vehicleBooking/${id}`} // SENDING "vehicleID"  ************************
          >
            <Button variant="dark">
              Purchase
              <MDBIcon fas icon="cart-plus fa-lg" />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
