import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const Choice = ({ choice }) => {
  // console.log(choice);
  const [displayChoice, setDisplayChoices] = useState([]); // to set the id of the chosen place
  console.log(displayChoice);
  // GET API (LINE 89 OF INDEX.JS)
  useEffect(() => {
    fetch(`http://localhost:5000/choiceDataLoad?id=${choice.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.map((v) => {
          setDisplayChoices(v); // setting id here
        });
        // setDisplayChoices(data);
        // console.log("Not setting the value unless I reload ", choice.id);
      });
  }, [choice.id]);

  return (
    <div>
      <div>
        <h1>{/* length: {choices.length} |||| ID: {choice.id} | */}</h1>

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
