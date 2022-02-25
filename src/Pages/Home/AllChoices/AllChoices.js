import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Choice from "../Choice/Choice";

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
      <div className="d-flex justify-content-around align-items-center flex-wrap my-5 text-start">
        {choices.map((choice) => (
          <Choice choice={choice} key={choice.id}></Choice>
        ))}
      </div>
    </>
  );
};

export default AllChoices;
