import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div>
              <p>
                Got our own corporate business. <br /> Interested in corporate
                business? <br />
                just let us know!
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div>
              <h5>contact us</h5>
              <div className="d-flex justify-content-around w-25 flex-column">
                <span>
                  <i
                    class="fab fa-facebook-square"
                    style={{ padding: ".5rem", fontSize: "1.5rem" }}
                  ></i>
                  Infinite Travel Arena
                </span>
                <span>
                  <i
                    class="far fa-envelope"
                    style={{ padding: ".5rem", fontSize: "1.5rem" }}
                  ></i>
                  Gmail
                </span>
                <span>
                  <i
                    class="fas fa-phone-square-alt"
                    style={{ padding: ".5rem", fontSize: "1.5rem" }}
                  ></i>
                  123-673-234
                </span>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div>
              <h5>contact us</h5>
              <div className="d-flex justify-content-around w-25 flex-column">
                <span>
                  <i
                    class="fab fa-facebook-square"
                    style={{ padding: ".5rem", fontSize: "1.5rem" }}
                  ></i>
                  Infinite Travel Arena
                </span>
                <span>
                  <i
                    class="far fa-envelope"
                    style={{ padding: ".5rem", fontSize: "1.5rem" }}
                  ></i>
                  Gmail
                </span>
                <span>
                  <i
                    class="fas fa-phone-square-alt"
                    style={{ padding: ".5rem", fontSize: "1.5rem" }}
                  ></i>
                  123-673-234
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
