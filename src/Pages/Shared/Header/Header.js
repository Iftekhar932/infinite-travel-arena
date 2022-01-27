import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const signOutNavigate = () => {
    signOut(navigate);
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="d-none d-sm-block">
            User: {user && user.displayName}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          {user &&
            !(
              <Button style={{ marginRight: "1rem" }} variant="danger">
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="login"
                >
                  Log In
                </Link>
              </Button>
            )}
          {user &&
            !(
              <Button variant="success">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="Signup"
                >
                  Sign-Up
                </Link>
              </Button>
            )}
          {user && (
            <Button
              onClick={signOutNavigate}
              variant="primary"
              style={{ marginLeft: "1rem" }}
            >
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                to="Signup"
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
