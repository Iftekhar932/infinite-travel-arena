import React from "react";
import "../Place/Place"; // used same css file in 'place.js'
import "../../Login/Login/Login";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

const Service = ({ service }) => {
  const { id, category, cost, rating, discount, policy, imgURL } = service;
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="singleBox shadow text-start my-3 p-4 border border-round">
        <Card.Img variant="top" src={imgURL} height="400px" />
        <Card.Body>
          <Card.Title>Category: {category}</Card.Title>
          <Card.Title>Rating: {rating}</Card.Title>
          <Card.Title>Discounts: {discount}</Card.Title>
          <Card.Title>Discounts: {cost}</Card.Title>
          <Card.Text>
            <h6>Policy: {policy}</h6>
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
