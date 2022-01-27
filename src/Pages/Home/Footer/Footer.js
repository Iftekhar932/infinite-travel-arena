import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className="border-bottom">
              <p className="text-center">
                Got our own corporate business. <br /> Interested in corporate
                business? <br />
                just let us know!
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="border-bottom">
              <h5 className="text-center">contact us</h5>
              <div className="m-auto w-50 d-flex justify-content-around flex-row">
                <span>
                  <a href="">
                    <i
                      className="fab fa-facebook-square"
                      style={{
                        color: "white",
                        padding: ".5rem",
                        fontSize: "1.5rem",
                      }}
                    ></i>
                  </a>
                </span>
                <span>
                  <a href="">
                    <i
                      className="far fa-envelope"
                      style={{
                        color: "white",
                        padding: ".5rem",
                        fontSize: "1.5rem",
                      }}
                    ></i>
                  </a>
                </span>
                <span>
                  <a href="">
                    <i
                      className="fas fa-phone-square-alt"
                      style={{
                        color: "white",
                        padding: ".5rem",
                        fontSize: "1.5rem",
                      }}
                    ></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="mt-2 mx-auto w-50">
              <h5>Want to Contribute?</h5>

              <div className="d-flex justify-content-around flex-column">
                <ul>
                  <li>Voluntary Work? </li>
                  <li>Paid Internships? </li>
                  <li>Jobs?</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
