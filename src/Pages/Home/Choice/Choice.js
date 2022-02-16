import React from "react";
import { Card, Button } from "react-bootstrap";

const Choice = ({ displayChoice }) => {
  const { imgURL, destination, rating, time, discount, policy } = displayChoice;
  return (
    <div>
      <div>
        <h1>{/* length: {choices.length} |||| ID: {idNumber} | */}</h1>

        <div className="singleBox">
          <Card.Img variant="top" src={displayChoice.imgURL} height="400px" />
          <Card.Body>
            <Card.Title>
              <h3>{displayChoice.destination}</h3>
            </Card.Title>
            <Card.Title>Rating: {displayChoice.rating}</Card.Title>
            <Card.Title>Departure Date: {displayChoice.time}</Card.Title>
            <Card.Title>Discounts: {displayChoice.discount}</Card.Title>
            <Card.Text>
              <h6>Policy: {displayChoice.policy}</h6>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default Choice;
