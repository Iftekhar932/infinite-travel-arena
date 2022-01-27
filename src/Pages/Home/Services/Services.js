import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../Service/Service";
import Ratings from "../Ratings/Ratings";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <Ratings></Ratings>
      <div className="placeBox-formation my-5">
        <div className="headerText">
          <h1 className="">Our Services</h1>
          <div className="mb-5">{/* straight Horizontal Line */}</div>
        </div>

        <div className="placeDisplayBox">
          {services.map((service) => {
            return <Service service={service} key={service._id}></Service>;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;

/* AFTER COMPLETION LET'S SEE WHAT HAPPENS UNCOMMENTING LINE NUMBER 2 */
