import React from "react";

import {
  Nav,
  Container,
  Navbar,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, signOutHandler, isHere, setIsHere } = useAuth();
  setIsHere(true);
  const navigate = useNavigate();

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/userProfile"
            className="d-none d-sm-block"
          >
            {user ? user.displayName : "Infinite-travel-arena"}
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* TO PREVENT FROM RELOADING THE PAGE WHILE ROUTING USED "as={Link}" and instead of "path" used "to" */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link>
              {/* // here "/" is home  */}
              <NavHashLink to="/#places-section" style={{ color: "initial" }}>
                Places
              </NavHashLink>
            </Nav.Link>

            <Nav.Link>
              {/* // here "/" is home  */}
              <NavHashLink to="/#services-section" style={{ color: "initial" }}>
                Vehicles
              </NavHashLink>{" "}
            </Nav.Link>
          </Nav>

          {!user.email && (
            <DropdownButton id="dropdown-basic-button" title="More Options">
              {/* href="#/action-1" removed this from the  "Dropdown.Item" */}
              {/* LOGIN BUTTON BELOW */}
              {!user.email && (
                <Dropdown.Item as={Link} to="/login">
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    to="/login"
                  >
                    <Button
                      style={{ marginRight: "1rem" }}
                      variant="primary"
                      className="w-100 m-auto "
                    >
                      Log In
                    </Button>
                  </Link>
                </Dropdown.Item>
              )}

              {/* href="#/action-3" removed this from the  "Dropdown.Item" */}
              {/* SIGNUP BUTTON BELOW */}
              {!user.email && (
                <Dropdown.Item as={Link} to="/signup">
                  <Link className="text-white" to="/signup">
                    <Button
                      variant="success"
                      className="w-100 m-auto text-white"
                    >
                      Sign-Up
                    </Button>
                  </Link>
                </Dropdown.Item>
              )}
            </DropdownButton>
          )}

          {/* LOGOUT BUTTON BELOW */}
          {user.email && (
            <DropdownButton id="dropdown-basic-button" title="More Options">
              <Dropdown.Item as={Link} to="/userProfile">
                <Link
                  className="text-decoration-none text-dark w-100 d-block"
                  to="/userProfile"
                >
                  My Profile
                </Link>
              </Dropdown.Item>

              {/* "RATE US" BUTTON BELOW */}
              <Dropdown.Item as={Link} to="/ratingform">
                <Link
                  className="text-decoration-none text-dark "
                  to="/ratingform"
                >
                  Rate Us
                </Link>
              </Dropdown.Item>

              {/* LOGOUT BUTTON BELOW */}
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link
                  onClick={() => signOutHandler(navigate)}
                  className="text-decoration-none text-dark"
                  to="/signup"
                >
                  <Button variant="danger" className="w-100">
                    Log-Out
                  </Button>
                </Link>
              </Dropdown.Item>
            </DropdownButton>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
