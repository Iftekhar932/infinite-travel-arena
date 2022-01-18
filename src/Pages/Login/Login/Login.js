import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, signInWithEmail } = useAuth();
  const [loginData, setLoginData] = useState({});

  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    loginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmail(loginData.email, loginData.password);
  };

  return (
    <div>
      <h1 className="form-h-text">Please Login</h1>
      <div className="form-box">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleOnblur}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handleOnblur}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <br />
        <Button variant="success" onClick={signInWithGoogle}>
          Log in With Google
        </Button>{" "}
        <br />
        <Link to="/signup">Don't have an account? Create One! </Link>
      </div>
    </div>
  );
};

export default Login;
