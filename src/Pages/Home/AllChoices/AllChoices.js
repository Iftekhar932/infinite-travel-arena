import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Choice from "../Choice/Choice";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Spinner } from "react-bootstrap";

/*********************
 *
 * NOTE: THIS COMPONENT IS RELATED ONLY  TO
 *  PLACES.
 *  NO VEHICLES
 *
 *  ******************** */
const AllChoices = ({ handleDeletion, isUpdated, setIsUpdated }) => {
  const { user, setVanishAfterDelete, vanishAfterDelete } = useAuth();
  const [choices, setChoices] = useState([]); // Sets All the chosen place's id
  const { placeDeleteID } = useParams();

  // GET API (LINE 98 OF INDEX.JS)
  useEffect(() => {
    fetch(
      `https://calm-basin-94890.herokuapp.com/allChoices?email=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setChoices(data);
        setIsUpdated(false);
      });
  }, [user.email, isUpdated]);
  /* 
  const handleDelete = (c) => {
    console.log(c);
  }; */

  return (
    <>
      <h1 className="mt-5 ">Places that you've chosen</h1>
      {/* <div className="d-flex justify-content-around align-items-center flex-wrap my-5 text-start"> */}
      <Container>
        <Row>
          {choices === 0 && (
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
        </Row>
      </Container>
      {/* </div> */}
    </>
  );
};

export default AllChoices;
