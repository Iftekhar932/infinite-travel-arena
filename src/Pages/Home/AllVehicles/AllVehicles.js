import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Vehicle from "../Vehicle/Vehicle";

/*********************
 *
 * NOTE: THIS COMPONENT IS RELATED ONLY  TO
 *  VEHICLES.
 *  NO PLACES
 *
 *  ******************** */

const AllVehicles = () => {
  const { user } = useAuth();
  const [chosenVehiclesID, setChosenVehiclesID] = useState([]);

  // ************ GET API VEHICLES***** (INDEX.JS LINE 136)*******
  useEffect(() => {
    fetch(`http://localhost:5000/allVehicles?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setChosenVehiclesID(data));
  }, []);
  return (
    <div className="d-flex justify-content-evenly flex-wrap my-5 w-100 text-start">
      {chosenVehiclesID.map((chosenVehicleID) => (
        <Vehicle
          chosenVehicleID={chosenVehicleID}
          key={chosenVehicleID._id}
        ></Vehicle>
      ))}
    </div>
  );
};

export default AllVehicles;
