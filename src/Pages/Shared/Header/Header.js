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
            {/* {user ? "Present" : "no"} */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/ratingform">Rate Us</Nav.Link>
          </Nav>

          {/******* LOGIN BUTTON ******/}
          {!user && (
            <Button style={{ marginRight: "1rem" }} variant="danger">
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
          {!user && (
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
          {user && (
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