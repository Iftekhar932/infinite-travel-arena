import React from "react";
import "./Service.css";
import "../../Login/Login/Login";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

const Service = ({ service }) => {
  const { id, category, cost, rating, discount, policy, imgURL } = service;
  return (
    <div className="ServiceSingleBox mx-auto">
      <Card.Img variant="top" src={imgURL} height="400px" />
      <Card.Body>
        <Card.Title>
          <h3>{category}</h3>
        </Card.Title>
        <Card.Title>Rating: {rating}</Card.Title>
        <Card.Title>cost: {cost}</Card.Title>
        <Card.Title>Discounts: {discount}</Card.Title>
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
    </div>
  );
};

export default Service;
