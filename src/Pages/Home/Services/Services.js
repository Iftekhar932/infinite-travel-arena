import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../Service/Service";
import { Button, Spinner } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);
  // GET API(INDEX.JS LINE 45)
  useEffect(() => {
    fetch("https://calm-basin-94890.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div
        className="placeBox-formation my-5 d-grid place-items-center"
        id="services-section"
      >
        <div className="headerText">
          <h1 className="">Our Services</h1>
          <div className="mb-5">{/* straight Horizontal Line */}</div>
        </div>

        <div className="placeDisplayBox">
          {services === 0 && (
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
