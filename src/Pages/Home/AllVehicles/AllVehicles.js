import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Vehicle from "../Vehicle/Vehicle";

/*********************
 *
 * NOTE: THIS COMPONENT IS RELATED ONLY  TO
 *  VEHICLES.
 *  NO PLACES
 *
 *  ******************** */

const AllVehicles = ({ handleDeletion }) => {
  const { user } = useAuth();
  const [chosenVehiclesID, setChosenVehiclesID] = useState([]);
  const { vehicleDeleteID } = useParams();
  // ************ GET API VEHICLES***** (INDEX.JS LINE 136)******
  // TO GET WHICH ONE OF THE VEHICLES USER CHOSE
  useEffect(() => {
    fetch(
      `https://calm-basin-94890.herokuapp.com/allVehicles?email=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => setChosenVehiclesID(data));
  }, []);

  // DELETE API (index.js line 72)
  /* const handleDeletion = () => {
    const deleteInfo = { id: vehicleAPI_id, email: user.email };
    fetch(`https://calm-basin-94890.herokuapp.com/deletePlace/${}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleteInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  }; */
  return (
    <>
      <h1 className="">Vehicles that you've chosen</h1>
      <div className="d-flex justify-content-evenly flex-wrap my-5 w-100 text-start">
        {chosenVehiclesID == 0 && (
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
        {chosenVehiclesID.map((chosenVehicleID) => (
          <Vehicle
            chosenVehicleID={chosenVehicleID}
            key={chosenVehicleID._id}
            vehicleDeleteID={vehicleDeleteID}
            handleDeletion={handleDeletion}
          ></Vehicle>
        ))}
      </div>
    </>
  );
};

export default AllVehicles;
