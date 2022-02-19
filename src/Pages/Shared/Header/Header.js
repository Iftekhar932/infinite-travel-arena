import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, signOutHandler } = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="d-none d-sm-block">
            {user && user.displayName}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              {/* TO PREVENT FROM RELOADING THE PAGE WHILE ROUTING USED "as={Link}" and instead of "path" used "to" */}
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/ratingform">
              Rate Us
            </Nav.Link>
            <Nav.Link as={Link} to="/allChoices">
              All Choices
            </Nav.Link>
          </Nav>

          {/******* LOGIN BUTTON ******/}
          {!user.email && (
            <Button style={{ marginRight: "1rem" }} variant="primary">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to="/login"
              >
                Log In
              </Link>
            </Button>
          )}

          {/******* SIGNUP BUTTON *******/}
          {!user.email && (
            <Button variant="success">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/signup"
              >
                Sign-Up
              </Link>
            </Button>
          )}

          {/******* LOGOUT BUTTON *******/}
          {user.email && (
            <Button
              onClick={() => signOutHandler(navigate)}
              variant="primary"
              style={{ marginLeft: "1rem" }}
            >
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to="/signup"
              >
                Log-Out
              </Link>
            </Button>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
