import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const AllVehicles = () => {
  const { user } = useAuth();
  // ************ GET API VEHICLES***** (INDEX.JS LINE 136)*******
  useEffect(() => {
    fetch(`http://localhost:5000/allVehicles?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>AllVehicles</div>;
};

export default AllVehicles;
