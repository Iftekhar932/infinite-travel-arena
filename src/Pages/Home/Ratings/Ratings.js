import React, { useEffect, useState } from "react";
import Rating from "../Rating/Rating";

const Ratings = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ratings")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);
  return (
    <div style={{ cursor: "grab" }}>
      {ratings.map((rating) => (
        <Rating rating={rating} key={rating._id}></Rating>
      ))}
    </div>
  );
};

export default Ratings;
