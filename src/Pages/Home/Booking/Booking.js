import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

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

const Booking = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(user.name);
  const { placeID } = useParams();
  const [chosenPlace, setChosenPlace] = useState({});

  // ************ GET API ************
  useEffect(() => {
    fetch(`http://localhost:5000/services/${placeID}`)
      .then((res) => res.json())
      .then((data) => setChosenPlace(data));
  }, []);

  // ************ POST API ************
  const handleConfirmation = () => {
    const postInfo = { email: user.email, id: placeID, name: user.name };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Order Confirmed");
          navigate("/"); // "Home" is '/' here
        }
      });
  };

  /*  // DELETE API
  const handleDeletion = () => {
    const deleteInfo = { id: placeID, email };
    fetch(`http://localhost:5000/deletePlace/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleteInfo),
    });
  }; */
  return (
    <div className="placeBox-formation text-center my-5">
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

          {/*   <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/booking/${id}`}
            >
              <Button variant="dark">Purchase</Button>
            </Link>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/booking/${id}`}
            >
              <Button variant="light">Confirm</Button>
            </Link> */}
          <Button variant="primary" onClick={handleConfirmation}>
            Confirm
          </Button>
          {/*  <Button variant="secondary" onClick={handleDeletion}>
            Confirm
          </Button> */}
        </Card.Body>
      </div>
    </div>
  );
};

export default Booking;