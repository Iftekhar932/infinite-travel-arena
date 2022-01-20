import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, signOut } = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {user ? user.displayName : "Infinite Travel Arena"}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
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
          <Button variant="success">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="Signup"
            >
              Sign-Up
            </Link>
          </Button>
          {user && (
            <Button
              onClick={signOut}
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
    </div>
  );
};

export default Header;
