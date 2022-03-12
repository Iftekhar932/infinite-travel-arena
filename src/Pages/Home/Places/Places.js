import React, { useEffect, useState } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import Place from "../Place/Place";

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
    <div className="mx-auto text-center my-5 mx-auto" id="places-section">
      <div className="headerText">
        <h1 className="mb-5">Up Next We Are Going</h1>
      </div>
      <div className="placeDisplayBox">
        <Container>
          <Row className="placeDisplayBox">
            {places === 0 && (
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
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Places;

/*  const defaultData = data.map((d) => d.id);
        const dataToCompare = filteredDataDisplay.map((d) => d.id);
        const result = defaultData.filter((v) => defaultData == dataToCompare);
        console.log(result); */
