import React, { useState } from "react";
import "./Signup.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Signup = () => {
  const { signUpWithEmail, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});

  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithEmail(
      loginData.email,
      loginData.password,
      loginData.displayName,
      navigate
    );
    e.target.reset();
  };

  const signInWithGoogleNavigate = () => {
    signInWithGoogle(navigate);
  };

  return (
    <div>
      <h1 className="form-h-text">Please Sign-up Here!</h1>
      <div className="form-box">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="name"
              name="displayName"
              placeholder="Enter Name"
              onKeyUp={handleOnblur}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onKeyUp={handleOnblur}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              onKeyUp={handleOnblur}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
        <br />
        <Button variant="success" onClick={signInWithGoogleNavigate}>
          Signup With Google
        </Button>{" "}
        <br />
        <Link to="/login">Already have an account? Login Here! </Link>
      </div>
    </div>
  );
};

export default Signup;
