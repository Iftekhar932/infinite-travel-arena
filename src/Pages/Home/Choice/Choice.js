import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

const Choice = ({ choice, handleDeletion }) => {
  const [displayChoice, setDisplayChoices] = useState([]); // NOTE:  to set the id of the chosen "PLACES" not "VEHICLES"

  // GET API (LINE 101 OF INDEX.JS)...for "PLACES"
  useEffect(() => {
    fetch(
      `https://calm-basin-94890.herokuapp.com/choiceDataLoad?id=${choice.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((v) => {
          setDisplayChoices(v);
        });
      });
  }, [choice.id]);

  return (
    <>
      <Col xs={12} md={6} lg={4} className="mx-auto">
        <Card className="singleBox shadow text-start my-3 p-4 border border-round">
          <Card.Img variant="top" src={displayChoice.imgURL} height="300px" />
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
              onClick={() => handleDeletion(displayChoice?.id, "place")}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Choice;
