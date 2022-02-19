import React, { useState } from "react";
import { useEffect } from "react";

import useAuth from "../../../hooks/useAuth";
import Choice from "../Choice/Choice";

// import { Link } from "react-router-dom";

const AllChoices = () => {
  const { user } = useAuth();
  const [choices, setChoices] = useState([]); // Sets All the chosen place's id

  // GET API (LINE 73 OF INDEX.JS)
  useEffect(() => {
    fetch(`http://localhost:5000/allChoices?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setChoices(data);
        // console.log(data);
      });
  }, []);

  return (
    <>
      <h2>{choices.length}</h2>
      {choices.map((choice) => (
        <Choice choice={choice} key={choice.id}></Choice>
      ))}
    </>
  );
};

export default AllChoices;
