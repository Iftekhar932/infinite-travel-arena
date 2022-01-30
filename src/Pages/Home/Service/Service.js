import React from "react";
// import "./Service.css";
import "../../Login/Login/Login";
import { Card, Button } from "react-bootstrap";

const Service = ({ service }) => {
  const { id, category, cost, rating, discount, policy, imgURL } = service;
  return (
    <div className="singleBox">
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
        <Button variant="dark">Purchase</Button>
      </Card.Body>
    </div>
  );
};

export default Service;
