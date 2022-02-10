import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AllChoices = () => {
  const { user } = useAuth();
  const { placeID } = useParams();
  const [choices, setChoices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allChoices?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => setChoices(data));
  }, []);
  return (
    <div>
      <h1>{choices.length}</h1>
    </div>
  );
};

export default AllChoices;
