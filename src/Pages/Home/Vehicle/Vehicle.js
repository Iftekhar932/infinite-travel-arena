import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
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
    <div className="singleBox my-3">
      <Card.Img variant="top" src={displayVehicles.imgURL} height="400px" />
      <Card.Body>
        <Card.Title>
          <h3>{displayVehicles.category}</h3>
        </Card.Title>
        <Card.Title>Rating: {displayVehicles.rating}</Card.Title>
        <Card.Title>cost: {displayVehicles.cost}</Card.Title>
        <Card.Title>Discounts: {displayVehicles.discount}</Card.Title>
        <Card.Text>
          <h6>Policy: {displayVehicles.policy}</h6>
        </Card.Text>
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
    </div>
  );
};

export default Vehicle;
