import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";

import useAuth from "../../../hooks/useAuth";
import Choice from "../Choice/Choice";

// import { Link } from "react-router-dom";

/*********************
 *
 * NOTE: THIS COMPONENT IS RELATED ONLY  TO
 *  PLACES.
 *  NO VEHICLES
 *
 *  ******************** */
const AllChoices = () => {
  const { user } = useAuth();
  const [choices, setChoices] = useState([]); // Sets All the chosen place's id

  // GET API (LINE 73 OF INDEX.JS)
  useEffect(() => {
    fetch(`http://localhost:5000/allChoices?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setChoices(data));
  }, []);

  return (
    <>
      {!user.email && (
        <h1 className="text-danger d-flex justify-content-center">
          User not found....
        </h1>
      )}
      {choices == 0 && (
        <Button variant="dark" style={{ margin: " 5% 50%" }} disabled>
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
      <div
        className="row d-flex justify-content-around align-items-center mx-auto"
        style={{ width: "100%" }}
      >
        {choices.map((choice) => (
          <Choice choice={choice} key={choice.id}></Choice>
        ))}
      </div>
    </>
  );
};

export default AllChoices;
