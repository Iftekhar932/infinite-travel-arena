import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import { Button, Container, Row, Spinner } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);
  // GET API(INDEX.JS LINE 45)
  useEffect(() => {
    fetch("https://calm-basin-94890.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mx-auto text-center my-5 mx-auto" id="places-section">
      <div className="headerText">
        <h1 className="mb-5">Vehicles we can provide</h1>
      </div>
      <div className="placeDisplayBox">
        <Container>
          <Row className="placeDisplayBox">
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
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;

/* AFTER COMPLETION LET'S SEE WHAT HAPPENS UNCOMMENTING LINE NUMBER 2 */
