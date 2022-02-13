import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllChoices = () => {
  const { user } = useAuth();
  const { placeID } = useParams();
  const [choices, setChoices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allChoices?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setChoices(data));
  }, []);
  return (
    <div>
      <h1>{choices.length}</h1>
      {/*  <div className="singleBox">
        <Card.Img variant="top" src={imgURL} height="400px" />
        <Card.Body>
          <Card.Title>
            <h3>{destination}</h3>
          </Card.Title>
          <Card.Title>Rating: {rating}</Card.Title>
          <Card.Title>Departure Date: {time}</Card.Title>
          <Card.Title>Discounts: {discount}</Card.Title>
          <Card.Text>
            <h6>Policy: {policy}</h6>
          </Card.Text>

          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={`/booking/${id}`}
          >
            <Button variant="dark">Purchase</Button>
          </Link>
        </Card.Body>
      </div> */}
    </div>
  );
};

export default AllChoices;
