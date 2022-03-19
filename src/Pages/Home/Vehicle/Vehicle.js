import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

const Vehicle = ({ chosenVehicleID, vehicleDeleteID, handleDeletion }) => {
  const [displayVehicles, setDisplayVehicles] = useState([]); // NOTE:  to set the id of the chosen "PLACES" not "VEHICLES"

  //GET API (INDEX.JS line143) // LOADING VEHICLE DATA WITH ID
  useEffect(() => {
    fetch(
      `https://calm-basin-94890.herokuapp.com/chosenVehicleLoad?id=${chosenVehicleID.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.map((v) => {
          setDisplayVehicles(v);
        });
      });
  }, [chosenVehicleID.id]);

  return (
    <Col xs={12} md={6} lg={4} className="mx-auto">
      <Card className="singleBox shadow text-start my-3 p-4 border border-round">
        <Card.Img variant="top" src={displayVehicles.imgURL} height="300px" />
        <Card.Body>
          <Card.Title>{displayVehicles.category}</Card.Title>
          <Card.Title>Rating: {displayVehicles.rating}</Card.Title>
          <Card.Title>
            <h6>Discounts: {displayVehicles.discount}</h6>
          </Card.Title>
          <Button
            id="remove_Btn"
            onClick={() => {
              handleDeletion(displayVehicles?.id, "vehicle");
              document.getElementById("remove_Btn").value = "REmove";
            }}
            variant="primary"
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Vehicle;
