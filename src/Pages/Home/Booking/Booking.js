import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { serviceID } = useParams(); // GETTING PARAMS ****************
  const [chosenPlace, setChosenPlace] = useState({});

  // ************ GET API FOR PLACES***** (INDEX.JS LINE 53)*******
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceID}`)
      .then((res) => res.json())
      .then((data) => setChosenPlace(data));
  }, []);

  // INFORMATION COLLECTION OBJECT
  const postInfo = {
    email: user.email,
    name: user.name,
    id: serviceID,
  };

  // ************ POST API *******(INDEX.JS LINE 82)*****SAME API USED IN "VehicleBooking.js"
  const handleConfirmation = () => {
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Order Confirmed");
          navigate("/"); // "Home" is "/" here
        }
      });
  };

  return (
    <div className="placeBox-formation text-center my-5">
      <h1> serviceID: {serviceID}</h1>
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
1. POST OPERATION  XXXXXXXX
2. DELETE OPERATION 
3.TOTAL COST FUNCTION 
*/

/* // DELETE API EXAMPLE
 deleteButton.addEventListener('click', _ => {
   fetch('', {
     method: 'delete',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       name: 'Darth Vad'
     })
   })
     .then(res => {
       if (res.ok) return res.json()
     })
     .then(data => {
       window.location.reload()
     })
 })
 We can then handle the event on our server side with the delete method:
 app.delete('/quotes', (req, res) => {
    Handle delete event here
 })
 */

/*  // DELETE API
  const handleDeletion = () => {
    const deleteInfo = { id: placeID, email };
    fetch(`http://localhost:5000/deletePlace/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleteInfo),
    });
  }; */
