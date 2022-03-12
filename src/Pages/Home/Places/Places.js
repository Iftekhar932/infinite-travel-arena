import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import Place from "../Place/Place";
import "./Places.css";

const Places = () => {
  const [places, setPlaces] = useState([]);
  // GET API IN (INDEX.JS LINE 33)
  useEffect(() => {
    fetch("https://calm-basin-94890.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
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
