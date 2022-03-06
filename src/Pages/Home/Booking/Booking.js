import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { serviceID } = useParams(); // GETTING PARAMS ****************
  const [chosenPlace, setChosenPlace] = useState({});
  // ************ GET API FOR PLACES***** (INDEX.JS LINE 54)*******
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceID}`)
      .then((res) => res.json())
      .then((data) => {
        setChosenPlace(data);
      });
  }, [serviceID]);

  // OBJECT FOR INFORMATION COLLECTION
  const postInfo = {
    email: user.email,
    name: user.displayName,
    id: serviceID,
    ...chosenPlace,
  };

  // ************ POST API *******(INDEX.JS LINE 89)*****SAME API USED IN "VehicleBooking.js"
  const handleConfirmation = () => {
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          navigate("/"); // "Home" is "/" here
        }
      });
  };

  return (
    <div className="placeBox-formation text-center my-5">
      {/* BOX FOR PLACE DISPLAY  */}
      <div className="singleBox">
        <Card.Img variant="top" src={chosenPlace.imgURL} height="400px" />
        <Card.Body>
          <Card.Title>
            <h3>{chosenPlace.destination}</h3>
          </Card.Title>
          <Card.Title>Rating: {chosenPlace.rating}</Card.Title>
          <Card.Title>Departure Date: {chosenPlace.time}</Card.Title>
          <Card.Title>Discounts: {chosenPlace.discount}</Card.Title>
          <Card.Text>
            <h6>Policy: {chosenPlace.policy}</h6>
          </Card.Text>
          {/* PREVIOUS ONE IS THE FIRST ONE */}
          <Button variant="primary" onClick={handleConfirmation}>
            Confirm
          </Button>
        </Card.Body>
      </div>
      {/* BOX FOR VEHICLE DISPLAY  */}
    </div>
  );
};

export default Booking;

/* 
  *********TO DO*********
3.TOTAL COST FUNCTION 
*/
