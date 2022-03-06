import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Choice = ({ choice, handleDeletion, placeDeleteID }) => {
  const [displayChoice, setDisplayChoices] = useState([]); // NOTE:  to set the id of the chosen "PLACES" not "VEHICLES"

  // GET API (LINE 101 OF INDEX.JS)...for "PLACES"
  useEffect(() => {
    fetch(`http://localhost:5000/choiceDataLoad?id=${choice.id}`)
      .then((response) => response.json())
      .then((data) => {
        data.map((v) => {
          setDisplayChoices(v);
        });
      });
  }, [choice.id]);

  return (
    <>
      {displayChoice && (
        <div className="singleBox mt-4 col-sm-12 col-md-4 col-lg-6 my-3 ">
          <Card.Img variant="top" src={displayChoice.imgURL} height="400px" />
          <Card.Body>
            <Card.Title>
              <h3>{displayChoice?.destination}</h3>
            </Card.Title>
            <Card.Title>Rating: {displayChoice?.rating}</Card.Title>
            <Card.Title>Departure Date: {displayChoice?.time}</Card.Title>
            <Card.Title>Discounts: {displayChoice?.discount}</Card.Title>
            <Card.Text>
              <h6>Policy: {displayChoice?.policy}</h6>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                handleDeletion(displayChoice?.id, "place");
              }}
            >
              Remove
            </Button>
          </Card.Body>
        </div>
      )}
    </>
  );
};

export default Choice;
