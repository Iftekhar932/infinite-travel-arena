// import React, { useEffect } from "react";
import "./Place.css"; // used same css file "Service.js"
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

const Place = ({ place }) => {
  const { id, cost, rating, discount, policy, imgURL, time, destination } =
    place;
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="singleBox shadow text-start my-3 p-4 border border-round">
        <Card.Img variant="top" src={imgURL} height="400px" />
        <Card.Body>
          <Card.Title>
            <h3>{destination}</h3>
          </Card.Title>
          <Card.Title>Rating: {rating}</Card.Title>
          <Card.Title>Departure Date: {time}</Card.Title>
          <Card.Title>Discounts: {discount}</Card.Title>
          <Card.Title>Discounts: {cost}</Card.Title>
          <Card.Text>
            <h6>Policy: {policy}</h6>
          </Card.Text>

          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={`/booking/${id}`} // SENDING "placeID"***************
          >
            <Button variant="dark" className="d-block">
              Purchase
              <MDBIcon fas icon="cart-plus fa-lg" />
            </Button>
          </Link>
        </Card.Body>
      </Card>

      {/*   <Card.Img variant="top" src={imgURL} height="400px" />
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
          to={`/booking/${id}`} // SENDING "placeID"***************
        >
          <Button variant="dark" className="d-block">
            Purchase
            <MDBIcon fas icon="cart-plus fa-lg" />
          </Button>
        </Link>
      </Card.Body> */}
    </Col>
  );
};

export default Place;
