import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Choice from "../Choice/Choice";
import { useParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

/*********************
 *
 * NOTE: THIS COMPONENT IS RELATED ONLY  TO
 *  PLACES.
 *  NO VEHICLES
 *
 *  ******************** */
const AllChoices = ({ handleDeletion }) => {
  const { user, setVanishAfterDelete } = useAuth();
  const [choices, setChoices] = useState([]); // Sets All the chosen place's id
  const { placeDeleteID } = useParams();

  // GET API (LINE 98 OF INDEX.JS)
  useEffect(() => {
    fetch(`allChoices?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setChoices(data);
      });
  }, [user.email]);

  return (
    <>
      <h1 className="mt-5 ">Places that you've chosen</h1>
      <div className="d-flex justify-content-around align-items-center flex-wrap my-5 text-start">
        {choices == 0 && (
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

        {choices.map((choice) => (
          <Choice
            choice={choice}
            key={choice.id}
            handleDeletion={handleDeletion}
            placeDeleteID={placeDeleteID}
          ></Choice>
        ))}
      </div>
    </>
  );
};

export default AllChoices;
