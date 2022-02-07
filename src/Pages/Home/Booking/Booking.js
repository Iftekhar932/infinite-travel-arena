import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { placeID } = useParams();
  const [chosenPlace, setChosenPlace] = useState({});
  useEffect(() => {
    // const url = `http://localhost:5000/services/${placeID}`;
    fetch(`http://localhost:5000/services/${placeID}`)
      .then((res) => res.json())
      .then((data) => setChosenPlace(data));
  }, []);

  return (
    <div className="App">
      <h2>{placeID}</h2>
      <h2>{chosenPlace.rating}</h2>
    </div>
  );
};

export default Booking;
