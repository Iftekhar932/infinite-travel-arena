import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import Place from "../Place/Place";
import "./Places.css";

const Places = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className="placeBox-formation my-5">
      <h1>Up Next We Are Going</h1>
      <div className="placeDisplayBox">
        {places.map((place) => {
          return <Place place={place} key={place._id}></Place>;
        })}
      </div>
    </div>
  );
};

export default Places;
