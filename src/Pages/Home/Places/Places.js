import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

import Place from "../Place/Place";
import "./Places.css";

const Places = () => {
  const [places, setPlaces] = useState([]);
  // GET API IN (INDEX.JS LINE 33)
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((d) => d?.id != filteredDataDisplay[0]?.id);
        // console.log(result, filteredDataDisplay);
        setPlaces(result);
      });
  }, []);

  return (
    <div className="placeBox-formation my-5" id="places-section">
      <div className="headerText">
        <h1 className="">Up Next We Are Going</h1>
        <div className="mb-5"></div>
      </div>
      <div className="placeDisplayBox">
        {places == 0 && (
          <Button variant="dark" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        )}
        {places.map((place) => {
          return <Place place={place} key={place._id}></Place>;
        })}
      </div>
    </div>
  );
};

export default Places;

/*  const defaultData = data.map((d) => d.id);
        const dataToCompare = filteredDataDisplay.map((d) => d.id);
        const result = defaultData.filter((v) => defaultData == dataToCompare);
        console.log(result); */
