import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Choice = ({ choice }) => {
  const [displayChoice, setDisplayChoices] = useState([]); // to set the id of the chosen place
  // GET API (LINE 89 OF INDEX.JS)
  useEffect(() => {
    fetch(`http://localhost:5000/choiceDataLoad?id=${choice.id}`)
      .then((response) => response.json())
      .then((data) => {
        data.map((v) => setDisplayChoices(v)); // setting id here
      });
  }, [choice.id]);

  return (
    <div className="singleBox mt-4 col-sm-12 col-md-4 col-lg-6 ">
      <Card.Img variant="top" src={displayChoice.imgURL} height="400px" />
      <Card.Body>
        <Card.Title>
          <h3>{displayChoice.destination}</h3>
        </Card.Title>
        <Card.Title>Rating: {displayChoice.rating}</Card.Title>
        <Card.Title>Departure Date: {displayChoice.time}</Card.Title>
        <Card.Title>Discounts: {displayChoice.discount}</Card.Title>
        <Card.Title>Discounts: {displayChoice.price}</Card.Title>
        <Card.Text>
          <h6>Policy: {displayChoice.policy}</h6>
        </Card.Text>
        <Link to={`/booking/:${displayChoice.id}`}>
          <Button variant="primary">Remove</Button>
        </Link>
      </Card.Body>
    </div>
  );
};

export default Choice;
