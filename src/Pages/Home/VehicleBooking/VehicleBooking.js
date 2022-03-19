import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const VehicleBooking = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [chosenVehicle, setChosenVehicle] = useState({});
  const { vehicleID } = useParams();
  // ************ GET API VEHICLES***** (INDEX.JS LINE 63)*******
  useEffect(() => {
    fetch(`https://calm-basin-94890.herokuapp.com/vehicles/${vehicleID}`)
      .then((res) => res.json())
      .then((data) => setChosenVehicle(data));
  }, [vehicleID]);

  // ************ POST API *******(INDEX.JS LINE 127)
  const handleConfirmation = () => {
    // INFORMATION COLLECTION OBJECT
    const postInfo = {
      email: user.email,
      name: user.name,
      id: vehicleID,
      ...chosenVehicle,
    };
    console.log(chosenVehicle);
    console.log(postInfo);
    fetch("https://calm-basin-94890.herokuapp.com/vehicleBooking", {
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
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card className="singleBox shadow text-start my-3 p-4 border border-round">
            <Card.Img variant="top" src={chosenVehicle.imgURL} height="400px" />
            <Card.Body>
              <Card.Title>
                <h3>{chosenVehicle.destination}</h3>
              </Card.Title>
              <Card.Title>Rating: {chosenVehicle.rating}</Card.Title>
              <Card.Title>Departure Date: {chosenVehicle.time}</Card.Title>
              <Card.Title>Discounts: {chosenVehicle.discount}</Card.Title>
              <Card.Text>
                <h6>Policy: {chosenVehicle.policy}</h6>
              </Card.Text>
              {/* PREVIOUS ONE IS THE FIRST ONE */}
              <Button variant="primary" onClick={handleConfirmation}>
                Confirm
              </Button>

              {/* <Link to={`allChoices/`}>
            <Button variant="primary" onClick={handleConfirmation}>
              Confirm
            </Button>
          </Link> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleBooking;
