import React, { useState } from "react";
import "./Signup.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Signup = () => {
  const { signUpWithEmail, signInWithGoogle } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithEmail(loginData.email, loginData.password);
  };

  return (
    <div>
      <h1 className="form-h-text">Please Sign-up Here!</h1>

      <div className="form-box">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={() => handleOnblur}
              type="email"
              name="email"
              placeholder="Enter email"
              onBlur={handleOnblur}
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
              placeholder="Password"
              onBlur={handleOnblur}
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
        <Button variant="success" onClick={signInWithGoogle}>
          Signup With Google
        </Button>{" "}
        <br />
        <Link to="/login">Already have an account?Log In! </Link>
      </div>
    </div>
  );
};

export default Signup;
